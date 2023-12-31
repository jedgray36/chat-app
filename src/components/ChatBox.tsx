import { useEffect, useState } from "react";
import '../styles/chat.css'
import io from 'socket.io-client';
import { Message } from "../types/message";

const socket = io('http://localhost:3001');

const ChatBox = () => {
    
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState('');
  
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };
  
    useEffect(() => {
      socket.on('chat message', (msg) => {
        setMessages((prevMessages) => [...prevMessages, msg]);
        console.log(msg);
      });
  
      // Clean up when the component unmounts
      return () => {
        socket.disconnect();
      };
    }, []);

    const sendMessage = () => {
      if (message.trim() !== '') {
        const newMessage: Message = {
          id: messages.length + 1,
          text: message,
        };
  
        // Emit a 'chat message' event with the message
        socket.emit('chat message', newMessage);
  
        // Clear the input field
        setMessage('');
      }
    };


        return (
        <div className='chat-box'>
        <div className="messageBox">
        {messages.map((message) => (
          <div key={message.id}>
            <li>{message.text}</li> 
          </div>
        ))}
      </div>
      <div className="input">
        <input className="Message" type="text" value={message} onChange={handleInputChange} />
        <button className="send" onClick={sendMessage}>Send</button>
      </div>
              </div>
          )
      }
      
      export default ChatBox;