import React, {useState} from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import { toast } from 'react-toastify';
import axios from 'axios';
import style from './CreatePost.module.css'
import Spinner from '../../Shared/Spinner';

const CreatePost = ({handleClick}) => {
    const [post, setPost] = useState({
        title: '',
        body: '',
        userId:Math.floor(Math.random() * 10) + 1
    })
    const [ isSubmitting, setIsSubmitting] = useState(false)
    const handleChange = (event)=> {
        const { value, name } = event.target
        setPost({...post, [name]: value})
    }
    const handleSubmit = async(event) => {
        event.preventDefault()
        setIsSubmitting(true)
        const {title, body} = post
        if(!title || !body){
          setIsSubmitting(false)
         toast.error("Title or body cannot be empty")
         return;
        }
        try {
         const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post)
        toast.success("Post Created Successfully")
        setIsSubmitting(false)
        handleClick()            
        } catch (error) {
            setIsSubmitting(false)
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
                    <input name='title' type="text" className={style.title_input} onChange={handleChange} />
                </div>
                <div>
                    <div className={style.title}>Body</div>
                    <textarea name='body' className={style.post_body} rows="9" cols="52" onChange={handleChange} ></textarea>
                </div>
                <button type='submit' className={style.submit_btn} disabled={isSubmitting}>
                    {isSubmitting? <Spinner size={30} color='#fff'/>: 'Submit'}
                </button>

            </form>
        </div>
    </div>
  )
}

export default CreatePost