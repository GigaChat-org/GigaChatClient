import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000');

function ChatApp() {
  const [status, setStatus] = useState('');
  const [match, setMatch] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('matched', (data) => {
      setMatch(data.with);
      setStatus('You are matched! Start chatting.');
    });

    socket.on('waiting', (msg) => {
      setStatus(msg);
    });

    socket.on('disconnected', (msg) => {
      setStatus(msg);
      setMatch(null);
    });

    socket.on('message', (msg) => {
      setMessages((prev) => [...prev, `Stranger: ${msg.text}`]);
    });

    return () => {
      socket.off('matched');
      socket.off('waiting');
      socket.off('disconnected');
      socket.off('message');
    };
  }, []);

  const startChat = () => {
    setMessages([]);
    setStatus('Searching for a match...');
    socket.emit('start-chat');
  };

  const nextMatch = () => {
    setMessages([]);
    setStatus('Searching for the next match...');
    socket.emit('next-match');
  };

  const disconnectChat = () => {
    socket.emit('disconnect-chat'); // Notify the server
    setMatch(null); // Reset the match state to null
    setStatus('You are disconnected. Press "Start Chat" to reconnect.');
  };

  const sendMessage = () => {
    if (message.trim() !== '' && match) {
      socket.emit('message', { text: message });
      setMessages((prev) => [...prev, `You: ${message}`]);
      setMessage('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Random Anonymous Chat</h1>
      <p>{status}</p>
      <div
        style={{
          border: '1px solid #ccc',
          padding: '10px',
          height: '300px',
          overflowY: 'auto',
          marginBottom: '10px',
          backgroundColor: '#f9f9f9',
        }}
      >
        {messages.map((msg, index) => (
          <p key={index} style={{ margin: '5px 0', padding: '5px' }}>
            {msg}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{ width: '80%', padding: '10px', fontSize: '16px' }}
        placeholder="Type your message..."
        disabled={!match}
      />
      <button
        onClick={sendMessage}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          marginLeft: '10px',
          cursor: 'pointer',
        }}
        disabled={!match || message.trim() === ''}
      >
        Send
      </button>
      <div className="mt-4 flex gap-4">
        {!match ? (
          <button
            onClick={startChat}
            className="px-6 py-3 text-lg font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition"
          >
            Start Chat
          </button>
        ) : (
          <>
            <button
              onClick={nextMatch}
              className="px-6 py-3 text-lg font-medium text-white bg-green-500 rounded-md hover:bg-green-600 transition"
            >
              Next Match
            </button>
            <button
              onClick={disconnectChat}
              className="px-6 py-3 text-lg font-medium text-white bg-red-500 rounded-md hover:bg-red-600 transition"
            >
              Disconnect
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default ChatApp;
