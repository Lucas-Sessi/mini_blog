import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
}

const insertReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "INSERTED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}


export const userInsertDocument = (docCollection)=> {

  const [response, dispatch] = useReducer(insertReducer, initialState);
  // o primeiro parâmetro é pra executar essa função e o segundo parâmetro é para setar os valores iniciais

  // limpeza de memória (ou seja, para que não haja vazamento de memória e nao renderize sem necessidade)

  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action)=> {
    // checando para ver se a função ja foi renderizada
    if(!cancelled){
      dispatch(action);
    }
  }

  const insertDocument = async (document) => {
    checkCancelBeforeDispatch ({ type: "LOADING" });

    try {
      
      const newDocument = {...document, createdAt: Timestamp.now()} // timestamp.now: é para resgatar em qual horário e data foi criado o post

      const insertedDocument = await addDoc(
        collection(db, docCollection),
        newDocument
      );

      checkCancelBeforeDispatch ({
        type: "INSERTED_DOC",
        payload: insertedDocument
      });

    } catch (error) {

      checkCancelBeforeDispatch({
        type: "ERROR",
        payload: error.message
      })
      
    }

  }

  useEffect(()=> {
    return ()=> setCancelled(true);
  }, [])

  return { insertDocument, response }

}