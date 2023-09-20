import React from "react";
import { BsYoutube } from "react-icons/bs";
import { BiLogoLinkedin, BiLogoTwitter, BiLogoFacebook } from "react-icons/bi";
import style from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.newsletter_wrapper}>
        <div className={style.newsletter_text}>Subscribe to newsletter</div>
        <div>
        <form action="">
          <div className={style.input_wrapper}>
              <div className={style.email_container}>
                <input
                  type="email"
                  className={style.email}
                  placeholder="Enter your email"
                />
              </div>
              <div className={style.submit_container}>
                <input className={style.submit} type="submit" value="SUBSCRIBE" />
              </div>
          </div>         
        </form>
        </div>

      </div>
      <div className={style.site_footer}>
        <div className={style.social_icons_wrapper}>
          <div className={style.social_icons}>
            <div>
              <BiLogoFacebook className={style.icon}/>          
            </div>
            <div>
              <BiLogoTwitter className={style.icon}/>
            </div>
            <div>
              <BiLogoLinkedin  className={style.icon}/>
            </div>
            <div>
              <BsYoutube className={style.icon}/>
            </div>
          </div>
        </div>
        <div className={style.copyright}>Copyright ©2023 All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;