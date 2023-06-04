'use client';

import * as React from 'react';
import { marked } from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

interface CodeProps {
  markdown: string;
}

export const CodeSnippets: React.FC<CodeProps> = ({ markdown }) => {
  React.useEffect(() => {
    hljs.highlightAll();
  });
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: marked(markdown) }}></div>
    </div>
  );
};
