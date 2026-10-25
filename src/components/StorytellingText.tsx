import React from 'react';

interface StorytellingHeadingProps {
  lines: string[];
  className?: string;
  tag?: 'h1' | 'h2' | 'h3';
}

export function StorytellingHeading({ lines, className = 'editorial-h2', tag: Tag = 'h2' }: StorytellingHeadingProps) {
  return (
    <Tag className={className}>
      {lines.map((line, idx) => (
        <span key={idx} className="line-mask">
          <span className="line-reveal">{line}</span>
        </span>
      ))}
    </Tag>
  );
}

interface StorytellingWordsProps {
  text: string;
  className?: string;
  accentWords?: string[];
}

export function StorytellingWords({ text, className = 'editorial-lead', accentWords = [] }: StorytellingWordsProps) {
  const words = text.split(' ');

  return (
    <p className={className}>
      {words.map((word, idx) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '');
        const isAccented = accentWords.some((aw) => cleanWord.toLowerCase() === aw.toLowerCase());

        return (
          <span
            key={idx}
            className={`word-reveal ${isAccented ? 'text-terracotta' : ''}`}
            style={{ fontWeight: isAccented ? 600 : undefined }}
          >
            {word}
          </span>
        );
      })}
    </p>
  );
}
