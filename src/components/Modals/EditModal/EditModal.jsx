import React , {useState} from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import { toast } from 'react-toastify';
import axios from 'axios';
import style from '../CreatePost/CreatePost.module.css'
import Spinner from '../../Shared/Spinner';

const EditModal = ({handleClick, post}) => {
    const [updatedPost, setUpdatedPost] = useState({
        title: post.title,
        body: post.body,
        userId: post.userId,
        id: post.id
    })
    const [ isSubmitting, setIsSubmitting] = useState(false)
    const handleChange = (event)=> {
        const { value, name } = event.target
        setUpdatedPost({...updatedPost, [name]: value})
    }
    const handleSubmit = async(event) => {
        event.preventDefault()
        setIsSubmitting(true)
        const {title, body,id} = updatedPost
        if(!title || !body){
         setIsSubmitting(false)
         toast.error("Title or body cannot be empty")
         return;
        }
        try {
         const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, updatedPost)   
        toast.success("Post Updated Successfully")
        setIsSubmitting(false)
        handleClick()            
        } catch (error) {
            toast.error(error)           
        }

    }
  return (
    <div className={style.modal_wrapper} >
    <div className={style.modal_container}>
    <LiaTimesSolid className={style.times_icon} onClick={handleClick} />
        <form onSubmit={handleSubmit}>
            <div className={style.title_container}>
                <div className={style.title}>Title</div>
                <input name='title' onChange={handleChange} type="text" className={style.title_input} value={updatedPost.title}/>
            </div>
            <div>
                <div className={style.title}>Body</div>
                <textarea name='body' onChange={handleChange} className={style.post_body} rows="9" cols="52" value={updatedPost.body}></textarea>
            </div>
            <button type='submit' className={style.submit_btn} disabled={isSubmitting}>
              {isSubmitting? <Spinner size={30} color='#fff'/>: 'Submit'}
            </button>

        </form>
    </div>
</div>
  )
}

export default EditModal