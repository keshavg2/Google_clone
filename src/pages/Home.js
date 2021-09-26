import React from 'react';
import {Link } from 'react-router-dom';
import './Home.css';
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
import Search from './Search';
import { auth, provider } from '../firebase.js';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

function Home(){

    const[{user},dispatch]=useStateValue();

    const Signin = ()=>{
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        
            console.log(result);
        }).catch((error) => {
            alert(error.message);
        });
    }
 return(
     <div className="home">
         <div className="home_header">
             <div className="home_headerLeft">
              <Link to="/about">About</Link>
              <Link to="/store">Store</Link>
             </div>
             <div className="home_headerRight">
              <Link to="/gmail">Gmail</Link>
              <Link to="/images">Images</Link>
              <AppsIcon/>
              <Avatar src={user?.photoURL}onClick={Signin}/>
             </div>
             
         </div>
         <div className="home_body">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png" alt=""/> 
         </div>
         <div className="home_inputContainer">
              <Search />
         </div>
     </div>
 );
}

export default Home;