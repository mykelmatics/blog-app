import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Spinner from '../components/Shared/Spinner';

const PostDetails = () => {
const [loading, setLoading] = useState(false)
const [post, setPost] = useState(null)
let { id } = useParams();


const getPost = async() => {
    setLoading(true)
    try {
    const {data}= await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    setPost(data)
    setLoading(false)           
    } catch (error) {
      toast.error(error)
      setLoading(false)                   
    }     
}
useEffect(() => {
    getPost()   
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [])
  return (
    <>
        <Navbar/>
      {loading? <Spinner/>:    
      <div className='post_detail_wrapper'>
        <div className='post_detail_container'>
            <img className='post_detail_img' src="https://preview.colorlib.com/theme/magdesign/images/person_1.jpg.webp" alt="author" />
            <span className='author_name'>Serge Campbell</span>
            <span className='author_date'>JULY 2, 2020</span>
            <h2 className="post-heading">{post?.title}</h2>
            <img src="https://preview.colorlib.com/theme/magdesign/images/img_2.jpg.webp" alt="post" className="post_detail_image"/>
            <p className='content'>
                {post?.body}
            </p>

            </div>
 

         </div>}
        <Footer/>
    </>
  )
}

export default PostDetails