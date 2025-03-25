'use client';
import Image from 'next/image';
import posthog from 'posthog-js';
import { useState } from 'react';

export default function Home() {
  const [company, setCompany] = useState('');
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center flex-col gap-8">
      <input
        value={company}
        onChange={({ target }) => setCompany(target.value)}
        className="p-4 border-1 border-white rounded-2xl w-96"
        placeholder="Company name"
      />
      <button
        onClick={() => posthog.capture('chatbot_click', { company })}
        className="bg-cyan-500 text-black p-4 rounded-full text-2xl font-bold active:bg-cyan-600 transition-colors duration-300 cursor-pointer"
      >
        chatbot
      </button>

      <button
        onClick={() => {
          posthog.capture('lead_complete', { company });
          setCompany('');
        }}
        className="bg-green-500 text-black p-4 rounded-full text-2xl font-bold active:bg-green-600 transition-colors duration-300 cursor-pointer"
      >
        Concluir cadastro
      </button>
    </div>
  );
}
