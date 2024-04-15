import { FaBars } from 'react-icons/fa';
import { setLogged } from '../slices/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useEffect } from 'react';


const Header = () => {
  const dispatch = useDispatch();
  const {isLogged} = useSelector((state: RootState) => state.login);

  useEffect(() => {
    const loggedId = localStorage.getItem("token");
    const loggedAdmin = localStorage.getItem("tokenAdmin");

    if (loggedId !== null || loggedAdmin !== null) {
      dispatch(setLogged(true));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("tokenAdmin");
    localStorage.removeItem("token");
    window.location.href = "/";
    
  };

  return (
    <header>
      <div className="logo">
        <h2><a href="/">Mchance</a></h2>
        <div className="line"></div>
        <h4><a href="/">Home</a></h4>
      </div>
      <nav>
        <a href="#skills">Skills</a>
        <a href="#about">About Me</a>
        <a href="/Blogs">Blog</a>
        <a href="#contact">Contact</a>
        {isLogged ? (
          <button className="logout-btn" onClick={handleLogout}>Log Out</button>
        ) : (
          <a href="/login">
            <button className="login-btn">Log In</button>
          </a>
        )}
      </nav>
      <div className="menu">
        <span>
          <FaBars name='menu' color='black' />
        </span>
      </div>
    </header>
  );
}

export default Header;
