import { useState, useEffect, useRef } from 'react';

export default function TypeWriter({ text }) {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef();

    useEffect(() => {
        if (isTyping) {
            if (index < text.length) {
                timeoutRef.current = setTimeout(() => {
                    setDisplayedText((prev) => prev + text[index]);
                    setIndex((prev) => prev + 1);
                }, 100); // velocidad de escritura
            } else {
                // Pausa cuando termina de escribir
                timeoutRef.current = setTimeout(() => {
                    setIsTyping(false);
                }, 2000); // espera 2 segundos antes de borrar
            }
        } else {
            if (index > 0) {
                timeoutRef.current = setTimeout(() => {
                    setDisplayedText((prev) => prev.slice(0, -1));
                    setIndex((prev) => prev - 1);
                }, 40); // velocidad de borrado
            } else {
                // Pausa cuando termina de borrar
                timeoutRef.current = setTimeout(() => {
                    setIsTyping(true);
                }, 500); // espera antes de volver a escribir
            }
        }
        return () => clearTimeout(timeoutRef.current);
    }, [isTyping, index, text]);

    return (
        <div className="typewriter ">
            {displayedText}
            <span className="typewriter-cursor">|</span>
        </div>
    );
}

  