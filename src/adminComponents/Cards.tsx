import { BiNotepad, BiUserCheck } from "react-icons/bi";
import { BsViewList } from "react-icons/bs";
import { BiLike } from "react-icons/bi";
import { useState } from "react";
import Modal from 'react-modal';



const Cards = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  return (
    <>
    {/* <Modal isOpen={isOpen} onRequestClose={closeModal } contentLabel={""} children={undefined} /> */}
    <div className="cards">
    <div className="card"  onClick={openModal
    }id="element7">
      <p>Total Articles</p>
      <div className="sub-card"><p className="num">0</p><span><BiNotepad type='solid' color="#DF7822" /></span></div>
    </div>
    <div className="card" id="element6">
      <p>Users</p>
      <div className="sub-card"><p className="num">0</p><BiUserCheck type='solid' color='#df7822' /></div>
    </div>
    <div className="card">
      <p>Views</p>
      <div className="sub-card"><p className="num">3</p><BsViewList type='solid' color="#DF7822"name='bullseye' /></div>
    </div>
    <div className="card">
      <p>Likes</p>
      <div className="sub-card"><p className="num">0</p><span><BiLike type='solid' color="#DF7822" /></span></div>
    </div>
  </div>
  <Modal
           
           isOpen={isOpen}
           onRequestClose={closeModal}
           style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)'
            },
            content: {
              color: 'lightsteelblue'
            }
          }}
           contentLabel="Example Modal"
         >
           <h2>Total Articles</h2>
           <button onClick={closeModal}>Close</button>
           <div>Modal Content</div>
         </Modal>
  </>
  )
}

export default Cards