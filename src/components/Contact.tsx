import React from 'react';
import { BiWinkSmile } from 'react-icons/bi';
import { setUsername, setEmail, setMessage } from '../slices/contactSlice';
import { useAppDispatch,useAppSelector } from '../slices/Hooks';
import { setMessageEl,setBgColor,setVisibillity } from '../slices/messageSlice';

const Contact = () => {
  const dispatch = useAppDispatch();
  const { username, email, message } = useAppSelector((state) => state.contact);
  const {messageEl,bgColor,visible} = useAppSelector(state => state.message);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        dispatch(setUsername(value));
        break;
      case 'email':
        dispatch(setEmail(value));
        break;
      case 'message':
        dispatch(setMessage(value));
        break;
      default:
        break;
    }
  };

  const validateForm = () => {
    let valid = true;

    if (!username.trim()) {
      valid = false;
      displayFailMessage("Username cannot be blank.");
    }

    if (!email.trim()) {
      valid = false;
      displayFailMessage("Email cannot be blank.");
    } else if (!isEmailValid(email)) {
      valid = false;
      displayFailMessage("Email is not valid.");
    }

    if (!message.trim()) {
      valid = false;
      displayFailMessage("Message cannot be blank.");
    }

    return valid;
  };

  const isEmailValid = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const displaySuccessMsg = (message: string) => {
    dispatch(setMessageEl(message));
    dispatch(setBgColor("#4cb54cb5"));
    dispatch(setVisibillity(true));
    setTimeout(() => {
      dispatch(setMessageEl(''));
      dispatch(setBgColor(''));
      dispatch(setVisibillity(false));
    }, 2000);
  };

  const displayFailMessage = (message: string) => {
    dispatch(setMessageEl(message));
    dispatch(setBgColor("#770a0afc"));
    dispatch(setVisibillity(true));
    setTimeout(() => {
      dispatch(setMessageEl(''));
      dispatch(setBgColor(''));
      dispatch(setVisibillity(false));
    }, 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      try {
        const response = await fetch(
          "https://my-brand-martine-backendapis.onrender.com/messages/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: username,
              email,
              message,
            }),
          }
        );
        if (!response.ok) {
          throw new Error("Failed to add message");
        }
        displaySuccessMsg("Your message was delivered successfully!");
        setTimeout(() => {
          location.reload();
        }, 2000);
      } catch (error: unknown) { 
        if (error instanceof Error) {
          console.error("Error adding message:", error.message);
        }
        displayFailMessage("Failed to Login. Please try again later.");
      }
      
    }
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="firstForm">
      <div className="form-field">
        <input type="text" name="username" value={username} onChange={handleInputChange} placeholder="Full Names" autoComplete="off" required />
        <small></small>
      </div>
      <div className="form-field">
        <input type="email" placeholder="Email" name="email" value={email} onChange={handleInputChange} autoComplete="off" required />
        <small></small>
      </div>
      <div className="form-field">
        <textarea
          name="message"
          value={message}
          onChange={handleInputChange}
          className="textarea1"
          id="message"
          cols={30}
          rows={10}
          placeholder="Type your message here"
        ></textarea>
        <small></small>
      </div>
      <div className="msgContact" style={{ background: bgColor }}>
        {visible && (
          <h4 style={{ color: "white" }}>{messageEl}</h4>
        )}
      </div>
    </form>
    <div className="send">
    <span>
      <BiWinkSmile className="wink1" color="#ffa800" />
    </span>
    <button  onClick={handleSubmit} className="send-message" type="submit">
      Send Message
    </button>
  </div>
  </>
  );
};

export default Contact;
