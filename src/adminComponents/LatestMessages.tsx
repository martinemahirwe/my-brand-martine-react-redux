import image from '../assets/WhatsApp Image 2024-02-01 at 17.41.01.jpeg'

const LatestMessages = () => {
  return (
    <div className="left">
    <div className="section1">
      <label>Latest messages from contact form</label>
      <select id="select1" value="Last 7 days">
      <option value="Last 7 days">
        <p>last 7 days</p>
      </option>
      <option value="Last 1 week">
        <p>1 hour ago</p>
      </option>
      <option value="last 2 weeks">
        <p>2 hours ago</p>
      </option>
      <option value="last 2 weeks">
        <p>1 day ago</p>
      </option>
    </select></div>
         <div className="person11"><div className="person">
     <img src={image} alt="my sis profile" className="img"/>
   </div>
   <div className="person">
     <div className="name">
      <strong>Dr.Sasharina</strong>
      <big>1 hour ago</big>
    </div>
    <div className="message"><p>congulatulations sis, i couldn't be any prouder &#x1F64C keep doing great things Martine &#x1F478</p>
    <div><span className="green ">reply</span>
    <span className="red read">mark as read</span></div></div></div>
  </div>
  <div className="person11"><div className="person">
  <img src={image} className="img" alt="my sis profile" />
   </div>
   <div className="person">
     <div className="name">
      <strong>Dr.Sasharina</strong>
      <big>1 hour ago</big>
    </div>
    <div className="message"><p>congulatulations sis, i couldn't be any prouder &#x1F64C keep doing great things Martine &#x1F478</p>
    <div><span className="green ">reply</span>
    <span className="red">mark as read</span></div></div></div>
  </div>
 </div>

 

  )
}

export default LatestMessages