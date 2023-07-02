import { Fragment, useState } from "react"
import { useNavigate, Link } from 'react-router-dom';
import styles from './Home.module.css';

import { useFetchDocument } from '../../hooks/useFetchDocument';
import PostDetails from "../../components/PostDetails";



const Home = () => {

  const Navigate = useNavigate();
  
  const [query, setQuery] = useState("");
  const {documents: posts, loading} = useFetchDocument("posts");

  const handleSubmit = (e)=> {
    e.preventDefault();

    if(query){
      return Navigate(`/mini_blog/search?q=${query}`);
    }

  }



  return(
    <div className={styles.home}>
      <h1>Veja os posts mais recentes</h1>
      <form onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="ou busque por tags..."
        onChange={(e)=> setQuery(e.target.value)}
        value={query}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        <h1>Posts...</h1>
      {loading && <p>Carregando...</p>}
      {posts && posts.map((post)=> (
        <PostDetails key={post.id} post={post} />
      ))}
      {posts && posts.length === 0 && (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/createpost" className="btn">Criar primeiro post</Link>
        </div>
      )}
      </div>
    </div>
  );
};

export default Home;