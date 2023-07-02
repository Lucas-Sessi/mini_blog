import { useState } from 'react';
import styles from './CreatePost.module.css';
import { useAuthValue } from '../../context/AuthContext'
import { userInsertDocument } from '../../hooks/useInsertDocument';
import { useNavigate } from "react-router-dom";



const CreatePost = ()=> {

  const Navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [formError, setFormError] = useState("");

  const {insertDocument, response} = userInsertDocument("posts");

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

    // caso tenho algum erro ele não prossiga para a inserção dos dados

    if(formError) return;

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createBy: user.displayName
    })
    // console.log({
    //   title,
    //   image,
    //   body,
    //   tagsArray,
    //   uid: user.uid,
    //   createBy: user.displayName
    // })

    //redirect HomePage

    Navigate('/mini_blog/');


  }


  return (
    <div className={styles.createPost}>
      <h2>Criar Post</h2>
      <p>Escreva o que quiser e compartilhe o seu conhecimento!</p>
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
        {!response.loading && <button className='btn'>Publicar</button>}
        {response.loading && <button className='btn' disabled>Aguarde...</button>}
        {response.error || formError && <p className='error'>{response.error || formError}</p>}
      </form>
    </div>    
  );
};


export default CreatePost;