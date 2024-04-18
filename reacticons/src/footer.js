import React from 'react';
import './footer.css';
import { FaGithub,FaInstagram , FaTwitter } from "react-icons/fa";

export default function footer() {
    return (
      
        <div className="container">
          <div className="social">
            <div className="soci"><FaInstagram /></div>
             <div className="soci"><FaTwitter /></div>  
             <div className="soci"><FaGithub /></div>  
          </div>
          <div className="copyright">Copyright &copy; 2022. AkinFeev</div>
        </div>
     
    );
  }