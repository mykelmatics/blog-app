import React, {useState} from 'react'
import { Link } from "react-router-dom";
import {HiBars3} from 'react-icons/hi2'
import { LiaTimesSolid } from 'react-icons/lia'
import style from './Navbar.module.css'

const Navbar = ({handleOpenCreateModal}) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpenNavbar = ()=> {
    setIsOpen(!isOpen)
  }
  return (
    <div className={style.navbar_container}>
      <header className={style.header_wrapper}>
        <Link to="/" className={style.company_link}>
            <div className={style.company_name}>NEO<span className={style.header_title}>BLOG</span></div>
        </Link>
        <HiBars3 className={style.menu_icon} onClick={handleOpenNavbar}></HiBars3>
        <ul className={style.nav_links}>
          <li>HOME</li>
          <li>CONTACT</li>
          <li>
            <button className={style.post_btn} onClick={handleOpenCreateModal}>
              CREATE POST
            </button>         
          </li>
        </ul>
        {
          isOpen &&       
          <div className={style.mobile_nav_container}>
          <div className={style.mobile_links_wrapper}>
            <LiaTimesSolid className={style.times_icon} onClick={handleOpenNavbar}/>
              <ul className={style.mobile_nav_links}>
                  <li className={style.mobile_links}>HOME</li>
                  <li className={style.mobile_links}>CONTACT</li>
                  <li className={style.mobile_links}>
                    <button className={style.create_btn} onClick={handleOpenCreateModal}>
                      CREATE POST
                    </button>         
                  </li>
                </ul>

          </div>
        </div>  

        }
      </header>
    </div>
  )
}

export default Navbar
