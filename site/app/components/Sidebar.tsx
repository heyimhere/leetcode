'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import type { Section } from '@/lib/types';

interface Props {
  sections: Section[];
}

const sectionColors: Record<string, string> = {
  easy: 'text-emerald-400',
  medium: 'text-yellow-400',
  hard: 'text-red-400',
  neetcode: 'text-purple-400',
  'article-practice': 'text-sky-400',
};

export function Sidebar({ sections }: Props) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setCollapsed((prev) => ({ ...prev, [key]: !prev[key] }));

  return (
    <aside className="sidebar-scroll flex-shrink-0 w-[240px] bg-zinc-900 border-r border-zinc-800 overflow-y-auto flex flex-col">
      <Link
        href="/"
        className="px-5 py-5 text-xs font-bold tracking-widest text-purple-400 uppercase hover:text-purple-300 transition-colors"
      >
        DSA Practice
      </Link>
      <div className="flex-1 pb-8">
        {sections.map((section) => {
          const sectionKey = section.slug;
          const isSectionCollapsed = collapsed[sectionKey];
          return (
            <div key={section.slug} className="mt-2">
              <button
                onClick={() => toggle(sectionKey)}
                className={`w-full flex items-center justify-between px-5 py-1.5 text-[10px] font-bold tracking-widest uppercase ${sectionColors[section.slug] ?? 'text-zinc-500'} hover:opacity-80 transition-opacity`}
              >
                <span>{section.name}</span>
                <span className="text-zinc-600">
                  {isSectionCollapsed ? '▸' : '▾'}
                </span>
              </button>

              {!isSectionCollapsed &&
                section.topics.map((topic) => {
                  const topicKey = `${sectionKey}/${topic.slug}`;
                  const isTopicCollapsed = collapsed[topicKey];

                  return (
                    <div key={topic.slug}>
                      <button
                        onClick={() => toggle(topicKey)}
                        className="w-full flex items-center justify-between px-5 py-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
                      >
                        <span className="font-medium">{topic.name}</span>
                        <span className="text-zinc-600 text-[10px]">
                          {isTopicCollapsed ? '▸' : '▾'}
                        </span>
                      </button>

                      {!isTopicCollapsed && (
                        <ul className="mb-1">
                          {topic.problems.map((problem) => {
                            const href = `/problems/${section.slug}/${topic.slug}/${problem.slug}`;
                            const isActive = pathname === href;
                            return (
                              <li key={problem.slug}>
                                <Link
                                  href={href}
                                  className={`flex items-center gap-2 pl-8 pr-4 py-1 text-xs transition-colors truncate ${
                                    isActive
                                      ? 'bg-purple-900/40 text-purple-300 font-medium'
                                      : problem.hasContent
                                        ? 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50'
                                        : 'text-zinc-600 hover:text-zinc-400 hover:bg-zinc-800/30'
                                  }`}
                                >
                                  <span className="truncate">{problem.title}</span>
                                  {!problem.hasContent && (
                                    <span className="flex-shrink-0 text-[9px] text-zinc-700">
                                      soon
                                    </span>
                                  )}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    </aside>
  );
}
