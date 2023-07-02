import { useEffect, useState } from 'react';
import styles from './Login.module.css';
import { useAutentication } from '../../hooks/useAutentication';


const Login = ()=> {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {login, error: authError, loading} = useAutentication();

  const handleSubmit = async (e)=> {
    e.preventDefault();

    setError("");

    const user = {
      email,
      password,
    };

    const res = await login(user);

  }

  useEffect(()=>{
    if(authError){
      setError(authError);
    }
  },[authError])


  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça o login para postar</p>
      <form onSubmit={handleSubmit} >
        <label>
          <span>E-mail:</span>
          <input 
          type="email" 
          name='email'
          value={email}
          required
          onChange={(e)=> setEmail(e.target.value)}
          placeholder='E-mail do usuário'/>
        </label>
        <label>
          <span>Password:</span>
          <input 
          type="password" 
          name='password'
          value={password}
          required
          onChange={(e)=> setPassword(e.target.value)}
          placeholder='Insira a sua senha' />
        </label>
          {!loading  && <button className='btn'>Entrar</button>}
          {loading && <button className='btn' disabled>Aguarde...</button>}
          {error && <p className='error'>{error}</p>}
      </form>
    </div>
  );
};

export default Login;