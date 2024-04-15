

const Modal5 = () => {
  return (
    <dialog id="modal5">
        <div className="reply">
          <p>
            Message via: 
          </p>
          <input type="number"value="0787227509"/>
          <p>
            Email: 
          </p>
          <input type="text" value="martinemahirwe@gmail.com"/>
          <p>
            Reply:
          </p>
          <textarea placeholder="Type message" cols={30}
        rows={10}></textarea> 
          <div className="rep-btn"><button className="reply-btn">Send Reply</button></div>
          </div>
       </dialog>
  )
}

export default Modal5