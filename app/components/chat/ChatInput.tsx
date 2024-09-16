import { useState } from 'react';

interface ChatInputProps {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: ChatInputProps) {
  const [message, setMessage] = useState('');

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      clearMessage();
    }
  };

  const clearMessage = () => {
    setMessage('');
  };

  return (
    <div>
      <textarea
        className="input-area"
        value={message}
        onChange={handleMessageChange}
        placeholder="Enter your message"
        rows={3}
        style={{ padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
      />
      <button
        className="submit-button"
        onClick={handleSend}
        style={{ padding: '10px', borderRadius: '8px', background: '#0070f3', color: '#fff' }}
      >
        Send
      </button>
    </div>
  );
}
