import React from 'react';
import { useState } from 'react';

interface ChatInputProps {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Enter 누를 때 줄바꿈 방지
      if (message.trim()) {
        onSend(message);
        clearMessage();
      }
    }
  };

  const clearMessage = () => {
    setMessage('');
  };

  return (
    <textarea
      className="input-area"
      value={message}
      onChange={handleMessageChange}
      onKeyDown={handleKeyPress}
      placeholder="Enter your message"
      rows={3}
      style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc', width: '100%' }}
    />
  );
}
