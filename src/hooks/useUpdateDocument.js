import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { updateDoc, doc } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
}

const updateReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "UPDATE_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}


export const useUpdateDocument = (docCollection)=> {

  const [response, dispatch] = useReducer(updateReducer, initialState);
  // o primeiro parâmetro é pra executar essa função e o segundo parâmetro é para setar os valores iniciais

  // limpeza de memória (ou seja, para que não haja vazamento de memória e nao renderize sem necessidade)

  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action)=> {
    // checando para ver se a função ja foi renderizada
    if(!cancelled){
      dispatch(action);
    }
  }

  const updateDocument = async (id, data) => {
    checkCancelBeforeDispatch ({ type: "LOADING" });

    try {
      
      const docRef = await doc(db, docCollection, id)

      const updatedDocument = await updateDoc(docRef, data);

      checkCancelBeforeDispatch ({
        type: "UPDATE_DOC",
        payload: updatedDocument,
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

  return { updateDocument, response }

}