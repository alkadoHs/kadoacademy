import React, { useEffect, useRef, ReactNode } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark-reasonable.css"; // Replace with the desired highlight.js style

interface CodeHighlighterProps {
  query: string;
  children: ReactNode;
}

const CodeHighlighter: React.FC<CodeHighlighterProps> = ({ children }) => {
  const codeRef = useRef(null);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code ref={codeRef} className="rounded-lg">
        {children}
      </code>
    </pre>
  );
};

export default CodeHighlighter;
