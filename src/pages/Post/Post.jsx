import styles from './Post.module.css';

import { useParams } from 'react-router-dom';
import { useFetchDocumentSingle } from '../../hooks/useFetchDocumentSingle';

const Post = () => {
  const { id } = useParams();
  const {document: post, loading} = useFetchDocumentSingle("posts", id);

  return (
    <div className={styles.post_container}>
      {loading && <p>carregando...</p>}
      {post && (
        <div>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.image} />
          <p style={{maxWidth:'950px', margin:'0 auto', marginTop: '30px'}}>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          <div className={styles.tags}>
            {post.tagsArray.map((tag)=> (
              <p key={tag}>
                <span>#</span>
                {tag}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;