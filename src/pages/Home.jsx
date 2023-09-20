import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import Footer from '../components/Footer/Footer'
import HeroSection from '../components/HeroSection/HeroSection'
import CreatePost from '../components/Modals/CreatePost/CreatePost'
import DeletePost from '../components/Modals/DeletePost/DeletePost'
import EditModal from '../components/Modals/EditModal/EditModal'
import Navbar from '../components/Navbar/Navbar'
import Post from '../components/Post/Post'
import Spinner from '../components/Shared/Spinner';

const Home = () => {
    const [createModal, setCreateModal] = useState(false)
    const [post, setPost] = useState({
        title:'',
        body:'',
        id: '', 
        userId: ''
    })
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)
    const [posts, setPosts]  = useState([])
    const [editModal, setEditModal] =useState(false)
    const [deleteModal, setDeleteModal] =useState(false)
    const handleCloseCreateModal = () => {
        setCreateModal(false)
    }
    const handleOpenCreateModal = () => {
        setCreateModal(true)
    }
    const handleCloseEditModal = () =>  setEditModal(false)

    const handleOpenEditModal = () =>  setEditModal(true)
    const handleCloseDeleteModal = () =>  setDeleteModal(false)

    const handleOpenDeleteModal = () =>  setDeleteModal(true)

    const getPosts = async() => {
        setLoading(true)
        try {
        const {data}= await axios.get('https://jsonplaceholder.typicode.com/posts')
        setPosts(data)
        setLoading(false)           
        } catch (error) {
          toast.error(error)
          setLoading(false)                   
        }     
    }
    const handlePagination = ()=> {
        setPage(page + 1)
    }
    useEffect(() => {
        getPosts()   
    }, [])
    

  return (
    <>
        <Navbar handleOpenCreateModal={handleOpenCreateModal}/>
        <HeroSection/>
        {loading ? 
        <Spinner/>:
        <div className='all_post_wrapper'>
        {posts.map((post)=> {
         const currentpost = post.userId <= page
         if (currentpost) {
            return(
                <div className='post-container' key={post.id}>
                <Post handleEdit={()=>{
                    setPost(post)
                    handleOpenEditModal()
                }} handleDelete={()=>{
                    setPost(post)
                    handleOpenDeleteModal()
                }} title={post.title} body={post.body} id={post.id}/> 
               </div>
            )                                 
         }
         return <></>
        }
        )
    }
     
    </div>  
        } 
        {page !== 10 &&
              <div className='more_post_wrapper'>
              <button className='more_post' onClick={handlePagination}>
                  More Posts           
              </button> 
          </div>
        }    
      
        {deleteModal && <DeletePost handleClick={handleCloseDeleteModal} post={post}/>}
        {editModal && <EditModal handleClick={handleCloseEditModal} post={post}/>}
        {createModal && <CreatePost handleClick={handleCloseCreateModal}/>}

        <Footer/>

    </>

  )
}

export default Home