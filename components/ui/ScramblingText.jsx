import { useEffect, useRef } from 'react';

// ── Utility ──────────────────────────────────────────────────────────────────
const chars = '!<>-_\\/[]{}—=+*^?#________';
const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

function createQueue(oldText, newText) {
  const length = Math.max(oldText.length, newText.length);
  return Array.from({ length }, (_, i) => ({
    from: oldText[i] || '',
    to:   newText[i] || '',
    start: Math.floor(Math.random() * 40),
    end:   Math.floor(Math.random() * 40) + Math.floor(Math.random() * 40),
  }));
}

// ── Hook ─────────────────────────────────────────────────────────────────────
function useTextScrambler(data, delay) {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const shuffledData = [...data].sort(() => Math.random() - 0.5);
    let frame = 0;
    let frameRequest = 0;
    let queue = [];
    let resolveScramble = () => {};
    let timeoutID = null;
    let currentIndex = 0;

    const animate = () => {
      let output = '';
      let complete = 0;

      for (const item of queue) {
        const { from, to, start, end, char } = item;
        if (frame >= end) {
          complete++;
          output += to;
        } else if (frame >= start) {
          if (!char || Math.random() < 0.28) item.char = randomChar();
          output += `<span class="scramble-dud">${item.char}</span>`;
        } else {
          output += from;
        }
      }

      el.innerHTML = output;

      if (complete === queue.length) {
        resolveScramble();
      } else {
        frame++;
        frameRequest = requestAnimationFrame(animate);
      }
    };

    const scrambleText = (newText) => {
      const oldText = el.innerText;
      queue = createQueue(oldText, newText);
      frame = 0;
      cancelAnimationFrame(frameRequest);
      return new Promise((res) => { resolveScramble = res; animate(); });
    };

    const scheduleNext = () => {
      scrambleText(shuffledData[currentIndex]).then(() => {
        timeoutID = setTimeout(scheduleNext, delay);
      });
      currentIndex = (currentIndex + 1) % shuffledData.length;
    };

    scheduleNext();

    return () => {
      if (timeoutID) clearTimeout(timeoutID);
      cancelAnimationFrame(frameRequest);
    };
  }, [data, delay]);

  return elementRef;
}

// ── Component ─────────────────────────────────────────────────────────────────
const ScramblingText = ({ data, delay = 1500, className = '' }) => {
  const ref = useTextScrambler(data, delay);
  return (
    <span className={`scramble-text ${className}`}>
      {/* Hidden for screen readers */}
      <span style={{ position:'absolute', width:1, height:1, overflow:'hidden', clip:'rect(0,0,0,0)', whiteSpace:'nowrap' }}>
        {data.join(', ')}
      </span>
      <span ref={ref} aria-live="polite" />
    </span>
  );
};

export default ScramblingText;
