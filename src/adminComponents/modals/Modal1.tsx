
import { ReactNode } from 'react';

type Props = {
  title: string;
  open: boolean; 
  onProceed: () => void;
  onClose: () => void;
  children: ReactNode;
};

const Modal1 = ({
  title,
  open,
  onProceed,
  onClose,
}: Props) => {
  return (
    <dialog id="modal1" open={open} style={{ zIndex: 9999 }}>
      <div className="heading">
        <h3>{title}</h3>
        <span style={{ fontSize: '24px' }} className="close-icon3" onClick={onClose}>&#x274C;</span>
      </div>
      <div className="add-article">
        <p>
          Title: 
        </p>
        <input type="text" placeholder="Article Title" className="input11" required/>
        <p>
          Author: 
        </p>
        <input type="text" placeholder="Article Author" className="input11" required/>
        <p>
          Description:
        </p>
        <textarea placeholder="Article Description"
        cols={30}
        rows={10} required></textarea> 
        <p>
          Date: </p>
          <input type="date" className="input11"id="date2"required/>
          <p>
            Choose image: </p> <input type="text"className="input11" id="image2"required/>
         </div>
      <div>
        <button className="art-button" onClick={onProceed}>Add Article</button>
      </div>
    </dialog>
  );
}

export default Modal1;
