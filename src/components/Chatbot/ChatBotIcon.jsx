// ChatbotIcon.jsx
import React from 'react';
import './ChatbotIcon.css'; // Make sure to create the CSS file
import Image from './image.png'
import { useNavigate } from "react-router-dom";
const ChatBotIcon = () => {
    const navigate = useNavigate()
  return (
    <div className="chatbot-icon">
     <button onClick={()=>{navigate("/chatbot")}}>

      <img src={Image} alt="Chatbot" />
     </button>
    </div>
  );
};

export default ChatBotIcon;
