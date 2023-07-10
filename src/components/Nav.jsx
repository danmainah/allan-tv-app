import { NavLink } from "react-router-dom"

export const Nav = () => {
  return (
    <>
     <NavLink to='/'> Home </NavLink>
     <NavLink to='/signup'> Register </NavLink>
     <NavLink to='/login'> Login </NavLink>
    </>
  )
}

