import React from 'react';

interface Message {
  role: 'user' | 'system' | 'error';
  content: string;
}

interface ChatHistoryProps {
  chatHistory: Message[];
}

const ChatHistory: React.FC<ChatHistoryProps> = ({ chatHistory }) => {
  const messageStyle = {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '8px',
    maxWidth: '80%',
  };

  return (
    <div className="chat-history" style={{ height: '400px', overflowY: 'auto', marginBottom: '20px', width: '100%' }}>
      {chatHistory.map((msg, index) => (
        <div
          key={index}
          style={{
            ...messageStyle,
            textAlign: msg.role === 'user' ? 'right' : 'left',
            backgroundColor: msg.role === 'user' ? '#e1f5fe' : msg.role === 'error' ? '#ffcccc' : '#f1f1f1',
            color: msg.role === 'error' ? '#d32f2f' : 'black',
            alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
          }}
        >
          {msg.content}
        </div>
      ))}
    </div>
  );
};

export default ChatHistory;
