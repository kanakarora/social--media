import SideBar from '../components/sidebar';
import Header from "../components/header"
import Footer from '../components/footer';
import '../styles/App.css';

import { useState, useEffect,useContext } from 'react';


import PostListProvider, { PostListOperations } from '../components/store/post-list-store';
import Userprovider from '../components/store/user-list-store';
import { useLoaderData } from 'react-router-dom';

function App() {
const  {addInitialPosts} = useContext(PostListOperations);

  const [toggler,setToggler] = useState(false);
  const changeToggler =() =>{
    setToggler(!toggler)
  }
  const [selectedTab,setSelectedTab] = useState("home")

  const posts = useLoaderData();

  try{ useEffect(() => {
    addInitialPosts(posts)
  }, []);}
  catch(error){
    console.log(error);
  }
  return (
    
      <Userprovider>
          <div className="App">
      <div className='my-app'>

      <SideBar toggler={toggler} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <Header changeToggler={changeToggler} selectedTab={selectedTab}/>
      </div>
      
      <div>
      <Footer/>
      </div>
    </div>
    </Userprovider>
   
   
  );
}

export default App;
export const PostListLoader = async () => {


  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  const posts = data.posts;
  return posts;



}
