import React, { useEffect, useRef, ReactNode } from "react";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-light.css"; // Replace with the desired highlight.js style

interface CodeHighlighterProps {
  query: string;
  children: ReactNode;
}

const CodeHighlighter: React.FC<CodeHighlighterProps> = ({
  query,
  children,
}) => {
  const codeRef = useRef(null);

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  return (
    <pre>
      <code ref={codeRef}>{children}</code>
    </pre>
  );
};

export default CodeHighlighter;
