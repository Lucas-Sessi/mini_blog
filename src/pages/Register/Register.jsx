import { useEffect, useState } from 'react';
import styles from './Register.module.css';
import { useAutentication } from '../../hooks/useAutentication';

const Register = ()=> {

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const {createUser, error: authError, loading} = useAutentication();


  const handleSubmit = async (e)=> {
    e.preventDefault();

    setError("");
    
    const user = {
      displayName,
      email,
      password,
      confirmPassword
    }

    if(password !== confirmPassword && password ){
      setError("Senhas Diferentes!")
      return
    }
    if(displayName === ' ' || displayName=== '  ' || displayName==='   ' || displayName.length <= 2){
      setError("nome de usuário inválido!")
      setDisplayName('')
      return
    }

    const res = await createUser(user)

    console.log(user)

  }

  // renderizar o erro de autenticação do form

  useEffect(()=> {
    if(authError){
      setError(authError)
    }
  },[authError])


  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit} >
        <label>
          <span>Name:</span>
          <input
          type="text" 
          name='displayName'
          value={displayName}
          required
          onChange={(e)=> setDisplayName(e.target.value)}
          placeholder='Nome do Usuário'/>
        </label>
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
        <label>
          <span>Confirm Password:</span>
          <input 
          type="password" 
          name='confirmPassword'
          value={confirmPassword}
          required
          onChange={(e)=> setConfirmPassword(e.target.value)}
          placeholder='Confirme a sua senha' />
        </label>
          {!loading  && <button className='btn'>Cadastrar</button>}
          {loading && <button className='btn' disabled>Aguarde...</button>}
          {error && <p className='error'>{error}</p>}
      </form>
    </div>
  );
};

export default Register;