import { useState } from "react";
import '../styles/chat.css'


const ChatBox = () => {
    
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
  
    const handleInputChange = (event: any) => {
      setNewMessage(event.target.value);
    };
  
    const handleSendMessage = () => {
      if (newMessage.trim() !== '') {
        // setMessages([...messages, { text: newMessage, sender: 'user' }]);
        setNewMessage('');
  
        // In a real application, you would send the message to a server or another component.
        // For simplicity, we're just updating the local state here.
        // You might want to use a state management library or a global state for better organization.
      }
    };
    
        return (
        <div className='chat-box'>
        <div className="messageBox" style={{  }}>
        {messages.map((message, index) => (
          <div key={index} style={{ marginBottom: '10px', textAlign: message === 'user' ? 'right' : 'left' }}>
            {message}
          </div>
        ))}
      </div>
      <div className="input">
        <input className="Message" type="text" value={newMessage} onChange={handleInputChange} />
        <button className="send" onClick={handleSendMessage}>Send</button>
      </div>
              </div>
          )
      }
      
      export default ChatBox;