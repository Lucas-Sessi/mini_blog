import styles from './Dashboard.module.css';

import { Link } from 'react-router-dom';

import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';

const Dashboard = ()=> {
  const { user } = useAuthValue();
  const uid = user.uid;

  //
  const { documents: posts, loading } = useFetchDocument("posts", null, uid);

  const { deleteDocument } = useDeleteDocument("posts");


  if (loading) {
    return <p>carregando...</p>
  }

  return(
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to='/mini_blog/createpost' className='btn'>Criar primeiro post</Link>
        </div>
      ) : (
        <div className={styles.post_header}>
          <span>Título</span>
          <span>Ações</span>
        </div>
      )}

      {posts && posts.map((post)=> (
        <div key={post.id} className={styles.post_row}>
          <p>{post.title}</p>
          <div>
            <Link to={`/mini_blog/posts/${post.id}`} className='btn btn-outline'>Ver</Link>
            <Link to={`/mini_blog/posts/edit/${post.id}`} className='btn btn-outline'>Editar</Link>
            {!loading && (<button onClick={()=> deleteDocument(post.id)} className='btn btn-outline btn-danger'>Excluir</button>)}
            {loading && (<button className='btn btn-outline btn-danger' disabled>Excluindo...</button>)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;