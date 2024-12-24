import React, { useState } from 'react';

const ChatInterface = ({ botName, botRole }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages([...messages, userMessage]);

    // TODO: Implement AI response logic here
    const botMessage = { role: 'assistant', content: `Hello! I'm ${botName}, your ${botRole} assistant. This is a placeholder response.` };
    setMessages(prev => [...prev, botMessage]);
    
    setInput('');
  };

  return (
    <div className="chat-interface">
      <div className="chat-header">
        <h2>{botName}</h2>
        <p>{botRole}</p>
      </div>
      
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="chat-input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Ask ${botName} something...`}
          className="chat-input"
        />
        <button type="submit" className="chat-submit">Send</button>
      </form>
    </div>
  );
};

export default ChatInterface;
