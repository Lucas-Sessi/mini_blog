import { useEffect, useState } from 'react';
import styles from './EditPost.module.css';
import { useAuthValue } from '../../context/AuthContext'
import { useNavigate, useParams } from "react-router-dom";
import { useFetchDocumentSingle } from '../../hooks/useFetchDocumentSingle';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';



const EditPost = ()=> {
  const { id } = useParams();
  const { document: post } = useFetchDocumentSingle("posts", id);

  const Navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [formError, setFormError] = useState("");

  useEffect(()=> {

    if(post){
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);
      
      const textTags = post.tagsArray.join(", ");

      setTags(textTags);
    }

  }, [post])

  const {updateDocument, response} = useUpdateDocument("posts");

  const {user} = useAuthValue();


  const handleSubmit = (e)=> {
    e.preventDefault();
    setFormError("");

    //validar URL da imagem

    try {
      new URL(image)
    } catch (error) {
      setFormError('URL Inválida!');
    }

    //criar o array de tags

    const tagsArray = tags.split(",").map((tag)=> tag.trim().toLowerCase());

    // checar e validar todos os valores

    if( !title || !image || !body || !tagsArray ){
      setFormError("Preencha todos os campos!");
      return
    } else if(title === " " || title.length <= 1 || image === " " || body === " " || body.length <= 1 || tagsArray === " "){
      setFormError("Preencha corretamente os campos!");
      setTitle("");
      setBody("");
      return
    }


    const data = {
      title,
      image,
      body,
      tags: tagsArray,
    }

    
    updateDocument(id, data);


    //redirect HomePage

    Navigate('/mini_blog/dashboard');


  }


  return (
    <div className={styles.edit_post}>
      {post && (
        <>
          <h2>Editando o post: "{post.title}"</h2>
          <p>Altere os dados do post como desejar</p>
          <form onSubmit={handleSubmit} style={{marginTop: '40px'}}>
            <label>
              <span>Título:</span>
              <input
              type="text"
              name='title'
              required
              placeholder='Pense em um bom título...'
              onChange={(e)=> setTitle(e.target.value)}
              value={title}
              />
            </label>
            <label>
              <span>URL da imagem:</span>
              <input
              type='text'
              name='image'
              required
              placeholder='Insira uma imagem'
              onChange={(e)=> setImage(e.target.value)}
              value={image}
              />
            </label>
            <p className={styles.preview_title}>Preview da imagem atual:</p>
            <img className={styles.image_preview} src={post.image} alt={post.title}/>
            <label>
              <span>Conteúdo: </span>
              <textarea
              name="body"
              id="body"
              required
              placeholder='Insira o conteúdo do post'
              onChange={(e) => setBody(e.target.value)}
              value={body}
              ></textarea>
            </label>
            <label>
              <span>Tags:</span>
              <input
              type='text'
              name='tags'
              required
              placeholder='Insira as Tags separadas por vírgula'
              onChange={(e)=> setTags(e.target.value)}
              value={tags}
              />
            </label>
            {!response.loading && <button className='btn'>Editar</button>}
            {response.loading && <button className='btn' disabled>Editando...</button>}
            {response.error || formError && <p className='error'>{response.error || formError}</p>}
          </form>
        </>
      )}
    </div>    
  );
};


export default EditPost;