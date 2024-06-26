import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

function Home({ posts, deletePost }) {

  function deletePostthis(id) {
    deletePost(id)
  }

  const [search, setsearch] = useState('')
  const filteredPost = posts.filter((e)=>(
    e.title.toLowerCase().includes(search.toLowerCase()) || e.discription.toLowerCase().includes(search.toLowerCase())
  ))

  return (
    <div>
      {
        // posts.length === 0 ?
        <>
          <center>
            <h1>Please, Add Post</h1>
            <Link to={"/addpost"}>Click here to add post</Link><br /><br />
          <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} placeholder='Search Your Post'/><br /><br />
          </center>
        </>
      }
      {
        filteredPost.map((e) => (

          <div className='post' key={e.id}>
            <h1>{e.title}</h1>
            <div className="buttons">
              <Link to={`/edit/${e.id}`}>
              <span style={{color : "green"}}><FaRegEdit /></span>
              </Link>
              <span style={{color : 'red'}} onClick={()=> deletePostthis(e.id)}><MdDeleteOutline /></span>
            </div>
            <img src={URL.createObjectURL(e.img)} alt="" className='postImg' /><br /><br />
            <p>{e.discription}</p>
          </div>

        ))
      }

    </div>
  )
}

export default Home
