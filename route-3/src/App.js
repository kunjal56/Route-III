import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home';
import AddPost from './AddPost';
import Editpost from './Editpost';

function App() {

  const [posts, setposts] = useState([])

  function addPost(title, disc, image){
    const newPost = {
      id : new Date().getTime(),
      title : title,
      discription : disc,
      img : image
    }
    setposts([...posts, newPost])
  }

  function deletePost(id){
    setposts(posts.filter((e)=>(
      e.id !== id
    )))
  }

  function editPost(id, title, discription, image){
    let updatedPost = posts.map((e)=>(
      e.id === id ? {...posts , id : id, title : title, discription: discription,img : image} : e
    ))
    setposts(updatedPost)
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home posts={posts} deletePost={deletePost}/>} ></Route>
          <Route path='/addpost' element={<AddPost addPost={addPost} />} ></Route>
          <Route path='/edit/:id' element={<Editpost editPost={editPost} posts={posts} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
