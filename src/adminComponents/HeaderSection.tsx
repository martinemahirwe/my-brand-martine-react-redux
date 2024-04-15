
import { IoMdNotifications, IoMdArrowDropdown, IoMdExit } from 'react-icons/io';
import { BsPersonFill } from 'react-icons/bs';
import image from '../assets/myprofile.png'

const HeaderSection = () => {
  return (
    <div className="header">
      {/* <div className="menu1">
        <span><IoMdMenu color="black" /></span>
      </div> */}
      <div className="div6">
        <span className="bell-container">
          <IoMdNotifications color="#DF7822" />
          <div className="not-count">3</div>
        </span>
        <p className="me">Martine Mahirwe</p>
        <div className="profile">
          <img className="img"
            src={image}
            alt="small profile picture"
          />
        </div>
        <div className="drop-btn">
          <IoMdArrowDropdown color="rgba(223,120,34,0.6)" size="20px" className="drop-down" />
          <div className="modal6" id="modal6">
            <button id="cancel6">Cancel</button>
            <div className="change pic">
              <BsPersonFill color="#DF7822" />
              <p>Change Profile Photo</p>
            </div>
            <div className="log-out change">
              <IoMdExit className="logout" color="#DF7822" />
              <p className="logout">Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSection;
