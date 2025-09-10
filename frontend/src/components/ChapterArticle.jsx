import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import './ChapterArticle.css';

const ChapterArticle = ({ markdownContent }) => {
  return (
    <article className="prose prose-xl prose-gray max-w-none markdown-content reading-font">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {markdownContent}
      </ReactMarkdown>
    </article>
  );
};

export default ChapterArticle;


