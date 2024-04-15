import { FaBars } from "react-icons/fa";
import Footer from "./Footer";
import { useDispatch, useSelector } from 'react-redux';
import { setEmail, setPassword } from '../slices/contactSlice';
import { RootState } from '../store/store';
import { useEffect, useState } from "react";

const Login = () => {
  const dispatch = useDispatch();
const {email, password} = useSelector((state: RootState) => state.contact);
const [displayedMessage, setDisplayedMessage] = useState<{ message: string; bgColor: string; visible: boolean } | null>(null);

const handleInputChange = (e : React.ChangeEvent<HTMLInputElement>) => {

   const {name,value} = e.target;
   switch(name){
    case 'email':
      dispatch(setEmail(value));
      break;
    case 'password':
      dispatch(setPassword(value));
      break;
   }
}
useEffect(() => {
  const loggedId = localStorage.getItem("token");
  const loggedAdmin = localStorage.getItem("tokenAdmin");

  if (loggedId !== null || loggedAdmin !== null) {
    window.location.href = '/'
  }
}, []);

const addUser = async function (e: React.FormEvent<HTMLFormElement>) {
  e.preventDefault();
  try {
    console.log("Data to be sent:", { email, password});

    const response = await fetch(
      "https://my-brand-martine-backendapis.onrender.com/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password: password
        }),
      }
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || "Failed to register user");
    }

    const responseData = await response.json();
    console.log(responseData);
  

      if (responseData.user.userRole === "admin") {
        localStorage.setItem("tokenAdmin",responseData.token);
         window.location.href = "/Blogs";
      } else {
        localStorage.setItem("token",responseData.token);
       window.location.href = "/";
      }
    

    displaySuccessMsg("login successfully!");
    setTimeout(() => {
      window.location.href = "/Login";
    }, 2000);
  } catch (error: unknown) { 
    if (error instanceof Error) {
      console.error("Error adding message:", error.message);
    }
    displayFailMessage("Failed to Login. Please try again later.");
  }

};

const displaySuccessMsg = (message: string) => {
  setDisplayedMessage({ message, bgColor: "#4cb54cb5", visible: true });
  setTimeout(() => {
    setDisplayedMessage(null);
  }, 2000);
};

const displayFailMessage = (message: string) => {
  setDisplayedMessage({ message, bgColor: "#770a0afc", visible: true });
  setTimeout(() => {
    setDisplayedMessage(null);
  }, 2000);
};
  return (
    <>
     <header>
      <div className="logo">
        <h2><a href="/index.html">Mchance</a></h2>
        <div className="line"></div>
        <h4><a href="/">Home</a></h4>
      </div>
      <nav>
        <a href="#skills">Skills</a>
        <a href="#about">About Me</a>
        <a href="/Blogs">Blog</a>
        <a href="#contact">Contact</a>
        <a href="/SignUp">
          <button className="login-btn">Sign Up</button>
        </a>
      </nav>
      <div className="menu">
        <span>
          <FaBars name='menu' color='black' />
        </span>
      </div>
    </header>
      <main className="main">
        <div className="left-side login-page">
          <h2>Log In</h2>
          <form id="signup" onSubmit={ addUser} className="form">
            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <input
                placeholder="email"
                type="text"
                name="email"
                value={email} onChange={handleInputChange}
                id="email"
                autoComplete="off"
                required
              />
              <small></small>
            </div>

            <div className="form-field">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={password} onChange={handleInputChange}
                id="password"
                autoComplete="off"
                required
              />
              <small></small>
            </div>

            <div className="forget">
              <p>forget password?</p>
            </div>
            <div className="msgSignup" style={{ background: displayedMessage?.bgColor }}>
        {displayedMessage?.visible && (
          <h4 style={{ color: "white" }}>{displayedMessage.message}</h4>
        )}
      </div>
            <button className="log-btn" type="submit">Log In</button>
          </form>

          <div className="sign">
            <p className="sign">
              <span><a href="/pages/signup.html">Sign Up</a></span>
              if you don't have an account
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Login;
