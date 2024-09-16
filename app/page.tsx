'use client';

import React, { useState } from 'react';
import ChatInput from '@/app/components/chat/ChatInput'; // ChatInput 컴포넌트 임포트

interface Message {
  role: 'user' | 'system' | 'error';
  content: string;
}

export default function Home() {
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  const handleSend = async (message: string) => {
    setChatHistory((prev) => [...prev, { role: 'user', content: message }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unknown error');
      }

      setChatHistory((prev) => [...prev, { role: 'system', content: data.reply }]);
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An error occurred while fetching response';
      console.error('Error:', error);

      setChatHistory((prev) => [...prev, { role: 'error', content: errorMessage }]);
    }
  };

  return (
    <>
      <h1>ChatGPT-like App</h1>

      {/* 채팅 내역 표시 */}
      <div className="chat-history" style={{ height: '400px', overflowY: 'auto', marginBottom: '20px', width: '100%' }}>
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            style={{
              textAlign: msg.role === 'user' ? 'right' : 'left',
              padding: '10px',
              margin: '10px 0',
              backgroundColor: msg.role === 'user' ? '#e1f5fe' : msg.role === 'error' ? '#ffcccc' : '#f1f1f1',
              borderRadius: '8px',
              maxWidth: '80%',
              alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
              color: msg.role === 'error' ? '#d32f2f' : 'black', // 에러 메시지는 빨간색으로 표시
            }}
          >
            {msg.content}
          </div>
        ))}
      </div>

      <ChatInput onSend={handleSend} />
    </>
  );
}
