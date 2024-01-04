import { useEffect, useState } from "react";
import '../styles/chat.css'
import { Socket } from 'socket.io-client';
import { Message } from "../types/message";

interface ChatBoxProps {
  socket: Socket;
}

const ChatBox: React.FC<ChatBoxProps> = ({ socket }) => {
    
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
      return () => {
        socket.off('chat message');
      };
    }, [socket]);

    const sendMessage = () => {
      if (message.trim() !== '') {
        const newMessage: Message = {
          id: messages.length + 1,
          text: message,
        };
  
        socket.emit('chat message', newMessage);

        setMessage('');
      }
    };


    const handleKeyPress = (event: any) => {
      if (event.key === 'Enter') {
        sendMessage();
      }
    };


        return (
        <div className='chat-box'>
        <div className="messageBox">
        {messages.map((message) => (
          <div key={message.id}>
            <li className="chat-message">{message.text}</li> 
          </div>
        ))}
      </div>
      <div className="input">
        <input onKeyDown={handleKeyPress} className="Message" placeholder="Type your message here..." type="text" value={message} onChange={handleInputChange} />
        <button className="send" onClick={sendMessage}>Send</button>
      </div>
      </div>
          )
      }
      
      export default ChatBox;