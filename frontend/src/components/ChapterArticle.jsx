import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

const ChapterArticle = ({ markdownContent }) => {
  return (
    <article className="prose prose-lg prose-gray max-w-none markdown-content reading-font">
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
        {markdownContent}
      </ReactMarkdown>
      <style jsx global>{`
        .markdown-content { line-height: 1.7; }
        .markdown-content h1 { color: #1f2937; font-size: 2.5rem; font-weight: 700; margin-bottom: 1rem; margin-top: 2rem; }
        .markdown-content h2 { color: #374151; font-size: 2rem; font-weight: 600; margin-bottom: 0.75rem; margin-top: 2rem; }
        .markdown-content h3 { color: #4b5563; font-size: 1.5rem; font-weight: 600; margin-bottom: 0.5rem; margin-top: 1.5rem; }
        .markdown-content p { margin-bottom: 1.25rem; color: #4b5563; }
        .markdown-content blockquote { border-left: 4px solid #3b82f6; background: #f8fafc; padding: 1rem 1.5rem; margin: 1.5rem 0; border-radius: 0 0.5rem 0.5rem 0; }
        .markdown-content blockquote p { margin: 0; color: #374151; font-style: italic; }
        .markdown-content code:not(pre code) { background: #f1f5f9; padding: 0.25rem 0.5rem; border-radius: 0.25rem; font-size: 0.875rem; color: #e11d48; }
        .markdown-content pre { background: #1e293b; color: #e2e8f0; padding: 1.5rem; border-radius: 0.75rem; overflow-x: auto; margin: 1.5rem 0; }
        .markdown-content pre code { background: transparent; padding: 0; color: inherit; }
        .markdown-content ul, .markdown-content ol { margin-bottom: 1.25rem; padding-left: 1.5rem; }
        .markdown-content li { margin-bottom: 0.5rem; color: #4b5563; }
        .markdown-content hr { border: none; height: 1px; background: linear-gradient(to right, transparent, #e5e7eb, transparent); margin: 2rem 0; }
        .markdown-content strong { color: #1f2937; font-weight: 600; }
        .markdown-content em { color: #6b7280; font-style: italic; }
      `}</style>
    </article>
  );
};

export default ChapterArticle;


