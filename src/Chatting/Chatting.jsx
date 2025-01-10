import React, { useEffect, useState, useRef } from 'react';
import { io } from 'socket.io-client';
import { jsPDF } from 'jspdf';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EmojiPicker from 'emoji-picker-react';

const socket = io('http://localhost:3000');

function Chatting() {
  const [status, setStatus] = useState('');
  const [match, setMatch] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const chatBoxRef = useRef(null);

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

  useEffect(() => {
    chatBoxRef.current?.scrollTo({
      top: chatBoxRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

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
    socket.emit('disconnect-chat');
    setMatch(null);
    setStatus('You are disconnected. Press "Start Chat" to reconnect.');
  };

  const sendMessage = () => {
    if (message.trim() !== '' && match) {
      socket.emit('message', { text: message });
      setMessages((prev) => [...prev, `You: ${message}`]);
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const downloadChatAsPDF = () => {
    if (messages.length === 0) {
      toast.info('No chat available to download.');
      return;
    }

    const doc = new jsPDF();
    messages.forEach((msg, i) => {
      doc.text(msg, 10, 10 + i * 10);
    });
    doc.save('chat.pdf');
    toast.success('Chat downloaded as PDF.');
  };

  const onEmojiClick = (emojiData) => {
    setMessage((prev) => prev + emojiData.emoji);
    setShowEmojiPicker(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col items-center p-6">
      <ToastContainer />
      <h1 className="text-4xl font-extrabold mb-6 text-yellow-400">Random Anonymous Chat</h1>
      <p className="text-lg mb-4">{status}</p>
      <div
        ref={chatBoxRef}
        className="w-full max-w-2xl h-96 bg-gray-700 rounded-xl p-4 overflow-y-auto shadow-2xl"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-3 p-3 rounded-lg shadow-md transition-transform transform ${
              msg.startsWith('You:') ? 'bg-blue-600 self-end text-right' : 'bg-gray-600'
            }`}
          >
            {msg}
          </div>
        ))}
      </div>
      <div className="flex flex-col w-full max-w-2xl mt-4">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full p-4 rounded-lg bg-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 resize-none shadow-md"
          placeholder="Type your message... (Shift + Enter for new line)"
          rows={2}
          disabled={!match}
        ></textarea>
        <div className="flex justify-between items-center mt-2">
          <button
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className={`px-4 py-2 rounded-lg text-xl transition shadow-md ${
              match ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-500 cursor-not-allowed'
            }`}
            disabled={!match}
          >
            😊
          </button>
          <button
            onClick={sendMessage}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 shadow-lg"
            disabled={!match || message.trim() === ''}
          >
            Send
          </button>
        </div>
        {showEmojiPicker && (
          <div className="mt-2">
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </div>
        )}
      </div>
      <div className="mt-6 flex gap-4">
        {!match ? (
          <button
            onClick={startChat}
            className="px-6 py-3 text-lg font-medium bg-green-500 rounded-md hover:bg-green-600 shadow-lg"
          >
            Start Chat
          </button>
        ) : (
          <>
            <button
              onClick={nextMatch}
              className="px-6 py-3 text-lg font-medium bg-yellow-500 rounded-md hover:bg-yellow-600 shadow-lg"
            >
              Next Match
            </button>
            <button
              onClick={disconnectChat}
              className="px-6 py-3 text-lg font-medium bg-red-500 rounded-md hover:bg-red-600 shadow-lg"
            >
              Disconnect
            </button>
          </>
        )}
      </div>
      <button
        onClick={downloadChatAsPDF}
        className="mt-4 px-6 py-3 text-lg font-medium bg-purple-500 rounded-md hover:bg-purple-600 shadow-lg"
      >
        Download Chat as PDF
      </button>
    </div>
  );
}

export default Chatting;
