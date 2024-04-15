
interface Props {
  children: string;
  open: boolean; 
  onProceed: () => void;
  onClose: () => void;
}


const Modal2 = ({
  children,
  open,
  onProceed,
  onClose,
}: Props) => {
  return (
    
    <dialog id="modal2" open={open} style={{ zIndex: 9999 }}>
    <div id="conversation">
      <h3>{children}</h3>
      <span style={{ fontSize: '24px' }} className="close-icon3" onClick={onClose}>&#x274C;</span>
       
     </div> 
     <button className="close" onClick={onProceed}>Close Conversations</button>
    </dialog>
  )
}

export default Modal2