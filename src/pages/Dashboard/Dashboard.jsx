import styles from './Dashboard.module.css';

import { Link } from 'react-router-dom';

import { useAuthValue } from '../../context/AuthContext';
import { useFetchDocument } from '../../hooks/useFetchDocument';

const Dashboard = ()=> {
  const { user } = useAuthValue();
  const uid = user.uid;

  //
  const { documents: posts, loading } = useFetchDocument("posts", null, uid);

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
        <div>
          <p>tem posts!</p>
        </div>
      )}

      {posts && posts.map((post)=> (
        <h2>{post.title}</h2>
      ))}
    </div>
  );
};

export default Dashboard;