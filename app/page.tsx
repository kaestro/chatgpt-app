// app/page.tsx
'use client';

import { useEffect, useState } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <textarea className="input-area" placeholder="Enter prompt"></textarea>
      <button className="submit-button">Enter Prompt</button>
    </>
  );
}
