import React from 'react'

const Navbar = () => {
  return (
    <div className="bg-slate-950 h-16 px-16  items-center flex">
    <h1 className="hover:text-teal-400 text-2xl font-bold underline text-white">
      Student-Management
    </h1>
    <div className="space-x-4 ml-auto text-white">
      <a className="hover:text-teal-400" href="/">
        Home
      </a>
      <a className="hover:text-teal-400" href="/">
        Profile
      </a>
      <a className="hover:text-teal-400" href="/">
        LogOut
      </a>
    </div>
  </div>
  )
}

export default Navbar