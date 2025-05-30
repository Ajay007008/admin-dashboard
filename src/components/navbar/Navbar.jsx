import React from 'react'
import "../navbar/navbar.scss"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenOutlinedIcon from '@mui/icons-material/FullscreenOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';

import loginImage from "../navbar/NavBarloginImage.jpg"





const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className='search'>
          <input type="text" placeholder='Search...'/>
          <SearchOutlinedIcon/>
        </div>

         <div className='items'>
           <div className='item'>
             <LanguageOutlinedIcon className='icon'/>      
               English
             </div>


             <div className='item'>
             <DarkModeOutlinedIcon className='icon'/>      
             </div>

             <div className='item'>
             <FullscreenOutlinedIcon className='icon'/>      
             </div>

             <div className='item'>
             <NotificationsNoneOutlinedIcon className='icon'/>
             <div className='counter'>1</div>      
             </div>


             <div className='item'>
             <ChatBubbleOutlineOutlinedIcon className='icon'/>
             <div className='counter'>2</div>       
             </div>


             <div className='item'>
             <ListOutlinedIcon className='icon'/>      
             </div>



             <div className='item'>
             <img 
                 src={loginImage} 
                 className="avatar"
             />     
             </div>



         </div>


      </div>
    </div>
     
  )
}

export default Navbar