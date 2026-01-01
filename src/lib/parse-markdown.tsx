import React from 'react';

/**
 * Simple markdown parser that converts **text** to <strong>text</strong>
 */
export const parseMarkdown = (text: string): (string | JSX.Element)[] => {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
};
