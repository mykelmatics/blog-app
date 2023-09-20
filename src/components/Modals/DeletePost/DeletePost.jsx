import React from 'react'
import { toast } from 'react-toastify';
import axios from 'axios';
import style from './DeletePost.module.css';

const DeletePost = ({handleClick, post}) => {
    const { id, title } = post;
    const handleDelete = async(event) => {
        event.preventDefault()
        
        try {
         const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        toast.success("Post Deleted Successfully")
        handleClick()            
        } catch (error) {
            toast.error(error)        
        }

    }
  
  return (
    <div className={style.modal_wrapper} onClick={handleClick}>
        <div className={style.modal_container}>
            <p className={style.delete_text}>Are you sure you want to delete post with title <span className={style.title}>{title}</span>?</p> 
            <button className={style.yes_btn} onClick={handleDelete}>Yes</button> 
            <button className={style.no_btn} onClick={handleClick}>No</button>     
        </div>
    </div>
  )
}

export default DeletePost