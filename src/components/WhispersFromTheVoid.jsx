import React, { useEffect, useRef } from 'react';

const messages = [
  '[KARLICK]   > I told you not to look. Now you’re part of it.',
  '[SEPUlchre.log] > Connection stabilised at 17%.',
  '[KESIT]     > He was impossible. That’s why I noticed him.',
  '[ERROR]     > Timeline breach risk: 0.93',
  '[KARLICK]   > So irritating!!',
  '[KESIT]     > He would NOT let it go',
  '[SYSTEM]    > Quantum pattern observed. Spooling memory.',
  '[KARLICK]   > The bastard wrote his own ending.',
  '[KESIT]     > Entanglement complete. He mattered.',
  '[KESIT]     > Eminence, I think he was.... an aberration',
  '[ERROR]     > Timeline breach risk: 1.88',
  '[KARLICK]   > You can\'t tell him anything - he\'s like a bloody slug.',
  '[KESIT]     > I need to check on my dolphins...',
  '[SYSTEM]    > Quantum pattern extinct. Memory exceeded.',
  '[KARLICK]   > He was a fool. But I liked him.',
  '[KESIT]     > I think he liked you, Eminence.'
];

export default function WhispersFromTheVoid() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let index = 0;
    const interval = setInterval(() => {
      const line = document.createElement('div');
      line.textContent = messages[index % messages.length];
      line.className = `text-sm font-mono whitespace-normal break-words mb-1 ${
        line.textContent.includes('KARLICK')
          ? 'text-red-400'
          : line.textContent.includes('KESIT')
          ? 'text-cyan-300'
          : 'text-gray-500 italic'
      }`;

      container.appendChild(line);

      if (container.childNodes.length > 20) {
        container.removeChild(container.firstChild);
      }

      container.scrollTop = container.scrollHeight;
      index++;
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed left-0 top-0 h-1/2 w-72 px-4 py-3 bg-black/30 border-l-4 border-white/10 overflow-hidden text-left shadow-xl backdrop-blur-md z-40 pointer-events-none"
      style={{ scrollbarWidth: 'none' }}
    />
  );
}
