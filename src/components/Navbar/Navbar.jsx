import { NavLink } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/state'>useState</NavLink>
        <NavLink to='/effect'>useEffect</NavLink>
        <NavLink to='/memo'>useMemo</NavLink>
    </nav>
  )
}

export default Navbar