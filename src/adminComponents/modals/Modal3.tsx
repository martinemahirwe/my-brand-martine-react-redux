type Props = {
  title: string;
  open: boolean; 
  onProceed: () => void;
  onClose: () => void;
  
};

const Modal3 = ({
  title,
  open,
  onProceed,
  onClose,
}: Props) => {
  return (
    <dialog id="modal3" open={open} style={{ zIndex: 9999 }}>
      <div className="heading">
        <h3>{title}</h3>
        <span style={{ fontSize: '24px' }} className="close-icon3" onClick={onClose}>&#x274C;</span>
      </div>
      <div className="add-article">
      <p>
        Title:
      </p>
      <input type="text" placeholder="Title" className="input11" />
      <p>
        Author:
      </p>
      <input type="text" placeholder="Author" className="input11" />
      <p>
        Description:
      </p>
      <textarea cols={30}
        rows={10} placeholder="Textarea"> Article Description</textarea>
      <p>
        Date: </p>
      <input type="date" id="date2" className="input11" />
      <p>
        Choose image: </p><input type="text" className="input11" id="image2" required />
      </div>
    <div><button className="art-button1" onClick={onProceed}>Edit Article</button></div>
  </dialog>
  )
}

export default Modal3