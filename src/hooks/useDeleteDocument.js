import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { doc, deleteDoc, collection } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
}

const deleteReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "DELETED_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}


export const useDeleteDocument = (docCollection)=> {

  const [response, dispatch] = useReducer(deleteReducer, initialState);
  // o primeiro parâmetro é pra executar essa função e o segundo parâmetro é para setar os valores iniciais

  // limpeza de memória (ou seja, para que não haja vazamento de memória e nao renderize sem necessidade)

  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispatch = (action)=> {
    // checando para ver se a função ja foi renderizada
    if(!cancelled){
      dispatch(action);
    }
  }

  const deleteDocument = async (id) => {
    checkCancelBeforeDispatch ({ type: "LOADING" });

    try {
      
      const deleteDocument = await deleteDoc(doc(db, docCollection, id))

      checkCancelBeforeDispatch ({
        type: "DELETED_DOC",
        payload: deleteDocument,
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

  return { deleteDocument, response }

}