import styles from './Search.module.css';
import { useQuery } from '../../hooks/useQuery';
import { Link } from 'react-router-dom';

import { useFetchDocument } from '../../hooks/useFetchDocument';

import PostDetails from '../../components/PostDetails';


const Search = ()=> {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts } = useFetchDocument("posts", search);


  return (
    <div className={styles.search_container}>
      <h2>Search</h2>
      <div>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts a partir da sua busca...</p>
            <Link to='/mini_blog/' className='btn btn-dark'>
              Voltar
            </Link>
          </div>
        )}
        {posts && posts.map((post)=> (
          <PostDetails key={post.id} post={post}/>
        ))}
      </div>
    </div>
  )
};

export default Search;