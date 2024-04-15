
import {Routes, Route} from "react-router-dom"
import LandingPage from '../components/LandingPage'
import Login from "../components/Login"
import SignUp from "../components/SignUp"
import Admin from "../adminComponents/Admin"

const Index = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/Login" element={<Login />}/>
            <Route path="/SignUp" element={<SignUp />}/>
            <Route path="/Admin" element={<Admin />} />
        </Routes>
    </div>
  )
}

export default Index