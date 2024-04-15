
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Skills from './Skills';
import image from '../assets/myprofile.png'



const LandingPage = () => {
    return (
        <>
        <Header />
          <main id="main">
            <div className="hero" id="hero">
              <div className="left">
                <h1>Hello, I'm Martine NYIRAMAHIRWE</h1>
                <p>
                  A passionate Web Developer with a flair for creativity and a knack
                  for problem-solving. I bring innovation to every project, ensuring
                  user-centric and that reflect my love for coding
                  and continuous learning. My expertise is in Reactjs,Redux,Javascript,Typescript and NodeJs.
                </p>
                <a href="/pages/portifolio.html">
                  <button>My Portifolio</button>
                </a>
              </div>
              <div className="right">
                <div className="back">
                  <div className="background">
                  <img src={image} alt="profile pic" className="profile"/>
                  </div>
                </div>
              </div>
            </div>
            <div id="about">
              <h2>About</h2>
              <div className="about-content">
                <div className="left">
                  <p>
                    I've recently made the exciting shift to web development. Formerly
                    in electronics and telecommunications, I realized my heart
                    belonged to coding. yes, there are moments when debugging feels
                    like deciphering an ancient code, and blockers make me question my
                    chosen path. Despite occasional doubts, the joy of solving
                    real-world problems through development fuels my dedication.
                  </p>
                  <p>
                    I'm not just comfortable with code; I'm obsessed with it. The
                    satisfaction of seeing projects come to life outweighs any
                    challenge. Ready to invest my time, effort, and passion into this
                    journey by making a meaningful impact in the digital realm. 💻✨
                  </p>
                </div>
                <div className="right">
                <img
              src="https://source.unsplash.com/YkibINt3MXo"
              alt="A photo of a woman hacker, hands on keyboard "
              className="coding"
            />
                </div>
              </div>
            </div>
            <div id="skills">
              <h2>Skills</h2>
              <div className="skills-content">
                <Skills />
              </div>
            </div>
            <div id="contact">
              <h2>Contact Me</h2>
              <div className="contact-content">
                <div className="address">
                  <h5>I would like to here from you <span>&#x1F481;</span></h5>
                  <p>
                    Your thoughts, questions, and ideas are valuable, and I'm eager to
                    connect with you. Whether you have a project in mind, need
                    assistance, or simply want to say hello, I welcome the opportunity
                    to hear from you
                  </p>
                  <p>
                    The contact form is your gateway to initiating a conversation, and
                    I'm here to provide information, support, or collaborate on
                    exciting endeavors. Don't hesitate to reach out.I look forward to
                    the prospect of connecting with you and exploring how we can work
                    together to achieve your goals
                  </p>
                  <p className="address1">
                    <FaEnvelope color="#ffa800" />martinemahirwe@gmail.com
                  </p>
                  <p className="address1">
                    <FaMapMarkerAlt color="#ffa800" />Kigali-Rwanda
                  </p>
                  <p className="address1">
                    <FaPhone color="#ffa800" />0787227509
                  </p>
                </div>
                <div className="cont-form">
                  <label htmlFor="form">Leave a message here:</label>
                  <Contact />
                    </div>
              </div>
            </div>
          </main>
          <Footer />
        </>
      );
}

export default LandingPage