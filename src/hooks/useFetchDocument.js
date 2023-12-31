import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, query, orderBy, onSnapshot, where, QuerySnapshot } from "firebase/firestore";


export const useFetchDocument = (docCollection, search = null, uid = null)=> {
  const [documents, setDocuments] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);


    useEffect(()=> {

       const loadData = async ()=> {
        if(cancelled) return

        setLoading(true)

        const collectionRef = await collection(db, docCollection)

        try {
          let q;

          // tratamento de dados para resgatar do banco (campo de busca)
          if (search) {
            q = await query(collectionRef, where("tagsArray","array-contains", search), orderBy("createdAt","desc"));
          } else if(uid){
            q = await query(collectionRef, where("uid", "==", uid), orderBy("createdAt","desc"));
          } else {
            q = await query(collectionRef, orderBy("createdAt","desc"));
          }


          await onSnapshot(q,(QuerySnapshot)=> {
            setDocuments(
              QuerySnapshot.docs.map((doc)=> ({
                id: doc.id,
                ...doc.data(),
              }))
            )
          })

          setLoading(false);

        } catch (error) {
          console.log(error);
          setError(error);

          setLoading(false);
        }
      }

      loadData();
    }, [docCollection, search, uid, cancelled])

    useEffect(()=> {
      return ()=> setCancelled(true);
    }, []);

  return { documents, loading, error };
};