import React, { useEffect, useState } from 'react';

const TypewriterText = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (index <= text.length) {
        setDisplayText(text.substring(0, index));
        setIndex(index + 1);
      } else {
        setIndex(0); // Reset to start typing again
      }
    }, 150);

    return () => clearTimeout(timer);
  }, [index, text]);

  return (
    <span className="text-lightGreen">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypewriterText;