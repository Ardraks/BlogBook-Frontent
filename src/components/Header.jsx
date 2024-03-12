import React from 'react'
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className='headerTitlesLg' style={{color:'#FFFFFF'}}>
             "You can make anything by writing"</span>
            <span className='headerTitlesLg' style={{marginTop:'80px',marginRight:'-400px',fontSize:'24px', color:'#FFFFFF'}} >
             C.S.Lewis </span>
        <span className="headerTitleLg"></span>
      </div>
      <img
        className="headerImg"
        src="https://static.vecteezy.com/system/resources/thumbnails/021/946/817/small/empty-green-studio-room-wall-background-abstract-wallpaper-design-with-copy-space-to-display-your-products-vector.jpg"
        alt=""
        style={{marginTop:'-500px'}}
      />
      </div>
  )
}

export default Header