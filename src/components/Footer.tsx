
import { FaLinkedin, FaInstagram, FaGithub, FaPhone, FaCopyright  } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="cont">
        <p className="left">
          <FaCopyright  color="#ffa800" /> Martine
        </p>
        <div className="center">
          <div className="circle">
            <span>
              <FaLinkedin color="#fffbf3" />
            </span>
          </div>
          <div className="circle">
            <span>
              <FaInstagram color="#fffbf3" />
            </span>
          </div>
          <div className="circle">
            <span>
              <FaGithub color="#fffbf3" />
            </span>
          </div>
        </div>
        <p className="right">
          <span>
            <FaPhone color="#ffa800" />
          </span>
          +250787227509
        </p>
      </div>
    </footer>
  );
}

export default Footer;
