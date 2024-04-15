import { PiDotsThreeVerticalDuotone } from "react-icons/pi"


const PeopleCommented = () => {
  const grids = [
   {
    img:<img src="https://source.unsplash.com/random/50x50" alt="Default Image" />,
    names:'JohnDoe',
    email:'doe@gmail.com',
    blog: 'Tower',
    icon:<PiDotsThreeVerticalDuotone color="#DF7822" className="action-btn" />
   },
   {
    img:<img src="https://source.unsplash.com/random/50x50" alt="Default Image" />,
    names:'JohnDoe',
    email:'doe@gmail.com',
    blog: 'Tower',
    icon:<PiDotsThreeVerticalDuotone color="#DF7822" className="action-btn" />
   },
   {
    img:<img src="https://source.unsplash.com/random/50x50" alt="Default Image" />,
    names:'JohnDoe',
    email:'doe@gmail.com',
    blog: 'Tower',
    icon:<PiDotsThreeVerticalDuotone color="#DF7822" className="action-btn" />
   },
   {
    img:<img src="https://source.unsplash.com/random/50x50" alt="Default Image" />,
    names:'JohnDoe',
    email:'doe@gmail.com',
    blog: 'Tower',
    icon:<PiDotsThreeVerticalDuotone color="#DF7822" className="action-btn" />
   },
   

  ]
  return (
    <div className="right">
   <div className="section2">
      <label>People Commented on Blogs</label>
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
      <option value="last 2 weeks">
        <p>View All</p>
      </option>
    </select></div>
<div className="grid">
<div className="cell header">Profile</div>
<div className="cell header">Name</div>
<div className="cell header header1">Email</div>
<div className="cell header">Blog</div>
<div className="cell header">Actions</div>
</div>
{grids.map((grid)=>(<div className="grid">
<div className="cell">{grid.img}</div>
<div className="cell">{grid.names}</div>
 <div className="cell cell1">{grid.email}</div>
<div className="cell">{grid.blog}</div>
<div className="cell dots">{grid.icon}</div>
</div>))}
</div>
  )
}

export default PeopleCommented