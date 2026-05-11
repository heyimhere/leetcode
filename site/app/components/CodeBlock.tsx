import { codeToHtml } from 'shiki';
import React from 'react';

interface PreProps {
  children?: React.ReactNode;
}

export async function CodeBlock({ children }: PreProps) {
  const codeEl = children as React.ReactElement<{
    children?: string;
    className?: string;
  }>;

  const raw = codeEl?.props?.children ?? '';
  const code = typeof raw === 'string' ? raw.trimEnd() : '';
  const className = codeEl?.props?.className ?? '';
  const lang = className.replace('language-', '') || 'text';

  const html = await codeToHtml(code, {
    lang,
    theme: 'github-dark',
  });

  return (
    <div
      className="my-4 rounded-lg overflow-hidden text-sm font-mono"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
