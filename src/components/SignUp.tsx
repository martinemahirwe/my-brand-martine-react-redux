import { FaBars } from "react-icons/fa";
import Footer from "./Footer";
import { useDispatch, useSelector } from 'react-redux';
import { setConfirmPassword, setEmail, setPassword } from '../slices/contactSlice';
import { RootState } from '../store/store';
import { useEffect, useState } from "react";

const SignUp = () => {
const dispatch = useDispatch();
const {email, password, confirmPassword} = useSelector((state: RootState) => state.contact);
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
    case 'confirmPassword':
      dispatch(setConfirmPassword(value));
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
    console.log("Data to be sent:", { email, password: confirmPassword });

    const response = await fetch(
      "https://my-brand-martine-backendapis.onrender.com/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password: confirmPassword
        }),
      }
    );

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || "Failed to register user");
    }

    console.log("Response:", response);

    displaySuccessMsg("Your registration was successfully!");
    setTimeout(() => {
      window.location.href = "/Login";
    }, 2000);
  } catch (error: unknown) { 
    if (error instanceof Error) {
      console.error("Error adding message:", error.message);
    }
    displayFailMessage("Failed to register. Please try again later.");
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
        <a href="/login">
          <button className="login-btn">Log In</button>
        </a>
      </nav>
      <div className="menu">
        <span>
          <FaBars name='menu' color='black' />
        </span>
      </div>
    </header>
      <main className="main">
        <div className="left-side">
          <h2>Sign Up</h2>
          <form id="signup" onSubmit={ addUser}className="form">
            <div className="form-field">
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" value={email} onChange={handleInputChange} autoComplete="off" required />
              <small></small>
            </div>

            <div className="form-field">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" id="password" value={password}  onChange={handleInputChange} autoComplete="off" required />
              <small></small>
            </div>

            <div className="form-field">
              <label htmlFor="confirm-password">Confirm Password:</label>
              <input type="password" name="confirmPassword" value={confirmPassword} id="confirm-password"  onChange={handleInputChange} autoComplete="off" required />
              <small></small>
            </div>

            <div className="msgSignup" style={{ background: displayedMessage?.bgColor }}>
        {displayedMessage?.visible && (
          <h4 style={{ color: "white" }}>{displayedMessage.message}</h4>
        )}
      </div>
            <button className="log-btn" type="submit">Sign Up</button>
          </form>

          <div className="sign">
            <p className="sign">
              <span><a href="/pages/login.html">Log In</a></span> if you already have an account
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SignUp;
