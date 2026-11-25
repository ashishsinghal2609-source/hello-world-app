import React from 'react';
import { Smile } from 'lucide-react';

export function HelloWorld() {
  return (
    <section style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Smile size={48} strokeWidth={1.5} color="#4f46e5" aria-hidden="true" />
      <div>
        <h1>Hello, World !</h1>
        <p>Welcome to your modern React app built with Vite and designed for 2026.</p>
      </div>
    </section>
  );
}

export default HelloWorld;
