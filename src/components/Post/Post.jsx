import React from 'react'
import { FiEdit } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import { useNavigate } from "react-router-dom";
import style from './Post.module.css'


const Post = ({handleEdit, handleDelete, title, id, body}) => {
    const navigate = useNavigate();
  return (
    <div className={style.post_wrapper} onClick={()=> navigate(`/post/${id}`)}>
        <div className={style.post_img_wrapper}>
           <img src="https://shorturl.at/jNW09" alt="post" className={style.post}/>
        </div>
        <div>
            <div className={style.post_type}>
                Business ,Travel -
                <span className={style.date}>July 2, 2020</span>
            </div>
            <h2 className={style.post_title}>
              {title}
            </h2>
            <p className={`${style.date} ${style.post_content}`}>{body.substring(0,100)}...</p>
        </div>
        <div className={style.post_details_wrapper}>
            <div className={style.author_container}>
                <div className={style.author_pic_wrapper}>
                < img src="https://shorturl.at/twEVY" alt="blog" className={style.author_pic}/>
                </div>
                <div className={style.author_info}>
                    <strong>Sergy Campbell</strong>
                    <span>CEO and Founder</span> 
                </div>
            </div> 
            <div className={style.icon_wrapper}>
                <div className={style.edit_container}>
                   <FiEdit className={style.edit_icon} onClick={handleEdit} />
                   <p className={`${style.remove_edit} ${style.edit_tooltip}`}>Edit</p>
                </div>
                <div className={style.delete_container}>
                   <AiOutlineDelete className={style.delete_icon} onClick={handleDelete}></AiOutlineDelete>
                   <p className={`${style.remove_delete} ${style.delete_tooltip}`}>Delete </p>
                </div>
            </div>  
        </div>
    
    </div>
  )
}

export default Post