import React, { useState} from 'react';

const ChatComponent = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [error, setError] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() === '') {
      setError('Please enter a message.');
      return;
    }

    setMessages(prevMessages => [...prevMessages, newMessage]);
    setNewMessage('');
    setError('');
  };

  return (
    <div className="chat-component">
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className="message">{message}</div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default ChatComponent;
