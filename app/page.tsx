'use client';

import React, { useState } from 'react';
import ChatInput from '@/app/components/chat/ChatInput';
import ChatHistory from '@/app/components/chat/ChatHistory'; // ChatHistory 컴포넌트 임포트

interface Message {
  role: 'user' | 'system' | 'error';
  content: string;
}

export default function Home() {
  const [chatHistory, setChatHistory] = useState<Message[]>([]);

  const addMessageToHistory = (message: Message) => {
    setChatHistory((prev) => [...prev, message]);
  };

  return (
    <>
      <h1>ChatGPT-like App</h1>
      <ChatHistory chatHistory={chatHistory} />
      <ChatInput onSend={(message) => handleSend(message, addMessageToHistory)} />
    </>
  );
}

async function handleSend(
  message: string,
  addMessageToHistory: (message: Message) => void
) {
  addMessageToHistory({ role: 'user', content: message });

  try {
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    if (!response.ok) throw new Error(data.error || 'Unknown error');

    addMessageToHistory({ role: 'system', content: data.reply });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An error occurred while fetching response';
    console.error('Error:', error);
    addMessageToHistory({ role: 'error', content: errorMessage });
  }
}

