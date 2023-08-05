import { useEffect } from "react";
import Prism from "prismjs";

type CodeBlockProps = {
  children: string;
  language: string;
};

const CodeBlock = ({ children, language }: CodeBlockProps) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <pre>
      <code className={`language-${language}`}>{children}</code>
    </pre>
  );
};

export default CodeBlock;
