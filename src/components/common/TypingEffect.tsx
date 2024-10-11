import React, { useState, useEffect, useRef } from 'react';

interface TypingEffectProps {
  words: string[];
  speed?: number; 
  deleteSpeed?: number; 
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  words,
  speed = 200,
  deleteSpeed = 100,
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingRef = useRef(null);

  useEffect(() => {
    if (typingRef.current) {
      clearInterval(typingRef.current);
    }

    const currentWord = words[currentWordIndex];
    const isLastWord = currentWordIndex === words.length - 1;

    typingRef.current = setInterval(() => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return prev.slice(0, -1);
        } else {
          return currentWord.slice(0, prev.length + 1);
        }
      });

      if (!isDeleting && displayText === currentWord) {
        setIsDeleting(true);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (isLastWord ? 0 : prev + 1));
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => {
      if (typingRef.current) {
        clearInterval(typingRef.current);
      }
    };
  }, [displayText, isDeleting, currentWordIndex, words, speed, deleteSpeed]);

  return (
    <div className="typing-effect">
      &lt; {displayText}
      <span className="cursor">/&gt;_</span>
    </div>
  );
};

export default TypingEffect;
