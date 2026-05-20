import React from 'react';
import katex from 'katex';

interface MathTextProps {
  text: string;
  onConceptClick?: (conceptId: string) => void;
  className?: string;
}

export const MathText: React.FC<MathTextProps> = ({ text, onConceptClick, className }) => {
  if (!text) return null;

  const regex = /(?:\$\$(.*?)\$\$)|(?:\$(.*?)\$)|(?:\[\[([^|\]]+)\|([^\]]+)\]\])/gs;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index;

    // Push preceding text
    if (matchIndex > lastIndex) {
      elements.push(text.slice(lastIndex, matchIndex));
    }

    const [fullMatch, blockMath, inlineMath, conceptId, conceptName] = match;

    if (blockMath !== undefined) {
      try {
        const html = katex.renderToString(blockMath, { displayMode: true, throwOnError: false });
        elements.push(<span key={matchIndex} dangerouslySetInnerHTML={{ __html: html }} className="math-block-container" />);
      } catch (err) {
        elements.push(<code key={matchIndex}>{fullMatch}</code>);
      }
    } else if (inlineMath !== undefined) {
      try {
        const html = katex.renderToString(inlineMath, { displayMode: false, throwOnError: false });
        elements.push(<span key={matchIndex} dangerouslySetInnerHTML={{ __html: html }} className="math-inline-container" />);
      } catch (err) {
        elements.push(<code key={matchIndex}>{fullMatch}</code>);
      }
    } else if (conceptId !== undefined && conceptName !== undefined) {
      elements.push(
        <button
          key={matchIndex}
          onClick={(e) => {
            e.preventDefault();
            if (onConceptClick) onConceptClick(conceptId);
          }}
          className="inline-concept"
          type="button"
        >
          {conceptName}
        </button>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.slice(lastIndex));
  }

  return <span className={className}>{elements}</span>;
};
