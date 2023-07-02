import { Fragment } from "react";
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useAutentication } from "../hooks/useAutentication";
import { useAuthValue } from "../context/AuthContext";

const Navbar = ()=> {

  const {user} = useAuthValue();
  const {logout} = useAutentication();


  return (
    <nav className={styles.navbar}>
      <NavLink to='/mini_blog/' className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to='/mini_blog/' className={({ isActive }) => (isActive ? styles.active : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/mini_blog/about' className={({ isActive }) => (isActive ? styles.active : "")}>About</NavLink>
        </li>
        {!user && (
          <>
          <li>
            <NavLink to='/mini_blog/login' className={({isActive}) => (isActive ? styles.active : "")}>Login</NavLink>
          </li>
          <li>
            <NavLink to='/mini_blog/register' className={({isActive}) => (isActive ? styles.active : "")} >Register</NavLink>
          </li>
        </>
        )}
        {user && (
          <>
          <li>
            <NavLink to='/mini_blog/dashboard' className={({isActive}) => (isActive ? styles.active : "")}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to='/mini_blog/createpost' className={({isActive})=> (isActive ? styles.active : "")} >Create Post</NavLink>
          </li>
          </>
        )}
        {user && <button onClick={logout}>Sair</button>}
      </ul>
    </nav>
  );
};

export default Navbar;