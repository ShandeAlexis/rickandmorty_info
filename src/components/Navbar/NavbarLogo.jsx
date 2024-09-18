import React from 'react'

export const NavbarLogo = () => {

    const url_logo= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmRituBykJDfbBMeNym2UaQ9awQ1HgbN-JfQ&s'

  return (
    <a href="#">
    <img
      className="w-auto h-6 sm:h-7"
      src={url_logo}
      alt="Logo"
    />
  </a>
  )
}
