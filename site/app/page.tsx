import Link from 'next/link';
import { manifest } from '@/lib/manifest';

const seedProblems = [
  { difficulty: 'easy', topic: 'arrays', slug: 'two-sum', label: 'Two Sum — Hash Map pattern' },
  { difficulty: 'easy', topic: 'arrays', slug: 'best-time-to-buy-and-sell-stock', label: 'Best Time to Buy & Sell Stock — Greedy / Sliding Window' },
  { difficulty: 'easy', topic: 'hashmaps', slug: 'valid-anagram', label: 'Valid Anagram — Frequency Count' },
  { difficulty: 'easy', topic: 'strings', slug: 'valid-palindrome', label: 'Valid Palindrome — Two Pointers' },
  { difficulty: 'medium', topic: 'arrays', slug: 'group-anagrams', label: 'Group Anagrams — HashMap + Sort' },
  { difficulty: 'hard', topic: 'arrays', slug: 'trapping-rain-water', label: 'Trapping Rain Water — Two Pointers (advanced)' },
];

const totalProblems = manifest.reduce(
  (acc, s) => acc + s.topics.reduce((a, t) => a + t.problems.length, 0),
  0
);

export default function HomePage() {
  return (
    <div className="max-w-2xl mx-auto px-8 py-16">
      <div className="mb-10">
        <p className="text-xs font-semibold tracking-widest text-purple-400 uppercase mb-3">
          DSA Practice
        </p>
        <h1 className="text-3xl font-bold text-zinc-100 mb-4">
          Algorithm Study Site
        </h1>
        <p className="text-zinc-400 leading-relaxed">
          {totalProblems} problems organized by difficulty and pattern. Each problem
          page covers the intuition, a boilerplate to work from, and a Big-O breakdown —
          no spoilers, just the right nudge.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-10">
        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">
          How to use
        </p>
        <ul className="space-y-2 text-sm text-zinc-400">
          <li>
            <span className="text-zinc-200">Pick a problem</span> from the sidebar — browse by difficulty then topic.
          </li>
          <li>
            <span className="text-zinc-200">Read the approach</span> and think through it before opening the solution file.
          </li>
          <li>
            <span className="text-zinc-200">Code it up</span> using the boilerplate, then run{' '}
            <code className="text-purple-400 bg-zinc-800 px-1.5 py-0.5 rounded text-xs font-mono">
              node easy/arrays/two-sum.js
            </code>{' '}
            from the repo root.
          </li>
          <li>
            <span className="text-zinc-200">Come back cold</span> — redo problems without looking to lock in the patterns.
          </li>
        </ul>
      </div>

      <div>
        <p className="text-xs font-semibold tracking-widest text-zinc-500 uppercase mb-4">
          Start here
        </p>
        <div className="space-y-2">
          {seedProblems.map((p) => (
            <Link
              key={p.slug}
              href={`/problems/${p.difficulty}/${p.topic}/${p.slug}`}
              className="flex items-center gap-3 p-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-purple-800 hover:bg-zinc-800 transition-colors group"
            >
              <span className={`text-xs font-semibold px-2 py-0.5 rounded uppercase tracking-wide flex-shrink-0 ${
                p.difficulty === 'easy' ? 'bg-emerald-900/50 text-emerald-400' :
                p.difficulty === 'medium' ? 'bg-yellow-900/50 text-yellow-400' :
                'bg-red-900/50 text-red-400'
              }`}>
                {p.difficulty}
              </span>
              <span className="text-sm text-zinc-300 group-hover:text-zinc-100 transition-colors">
                {p.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
