import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './Routs/App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Routes,Route} from 'react-router-dom';

import CreatePost from './Routs/createPost';
import PostList from './Routs/postList';
import { PostListLoader } from './Routs/App.js';
import ErrorPage from './Routs/Error';
import SignUp from './Routs/signup';
import LogIn from './Routs/login';
import UserList from './Routs/usersList';
import UserInfo from './Routs/userInfo'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider} from 'react-router-dom';
import PostListProvider from './components/store/post-list-store.jsx';


const router = createBrowserRouter(createRoutesFromElements(
  
  <Route exact path="/" element={<App/>} loader = {PostListLoader} errorElement={<ErrorPage/>}>
  <Route path="/" element={<PostList/>} />
  <Route path="/createPost" element={<CreatePost/>} />
  <Route path="/login" element={<LogIn/>} />
  <Route path="/signup" element={<SignUp/>} />
  <Route   path="/usersList"  element={<UserList/>} />
  <Route   path="/usersList/:userId"  element={<UserInfo/>} />
    </Route>
 
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  
      <PostListProvider>
      <RouterProvider router={router}/>
      </PostListProvider>
   
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
