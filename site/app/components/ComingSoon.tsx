import type { Problem } from '@/lib/types';

const difficultyLabel: Record<string, { label: string; cls: string }> = {
  easy: { label: 'Easy', cls: 'bg-emerald-900/40 text-emerald-400' },
  medium: { label: 'Medium', cls: 'bg-yellow-900/40 text-yellow-400' },
  hard: { label: 'Hard', cls: 'bg-red-900/40 text-red-400' },
  neetcode: { label: 'NeetCode', cls: 'bg-purple-900/40 text-purple-400' },
  'article-practice': { label: 'Article', cls: 'bg-sky-900/40 text-sky-400' },
};

interface Props {
  problem: Problem;
}

export function ComingSoon({ problem }: Props) {
  const diff = difficultyLabel[problem.difficulty] ?? { label: problem.difficulty, cls: 'bg-zinc-800 text-zinc-400' };

  return (
    <div className="max-w-2xl mx-auto px-8 py-16">
      <div className="flex items-center gap-3 mb-6">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded uppercase tracking-wide ${diff.cls}`}>
          {diff.label}
        </span>
        <span className="text-xs text-zinc-600 bg-zinc-800 px-2.5 py-1 rounded uppercase tracking-wide font-semibold">
          {problem.topic.replace(/-/g, ' ')}
        </span>
        {problem.lcNumber && (
          <span className="text-xs text-zinc-600">LC #{problem.lcNumber}</span>
        )}
      </div>

      <h1 className="text-2xl font-bold text-zinc-100 mb-2">{problem.title}</h1>

      <div className="inline-flex items-center gap-2 mb-10">
        <span className="text-xs text-purple-400 bg-purple-900/20 border border-purple-900/40 px-2.5 py-1 rounded-full">
          {problem.pattern}
        </span>
      </div>

      {/* Big-O even when content is missing */}
      {(problem.timeComplexity !== '—' || problem.spaceComplexity !== '—') && (
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 mb-10">
          <p className="text-[10px] font-bold tracking-widest text-zinc-500 uppercase mb-3">
            Complexity
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-zinc-500 mb-1">Time</p>
              <p className="font-mono text-sm text-zinc-200">{problem.timeComplexity}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 mb-1">Space</p>
              <p className="font-mono text-sm text-zinc-200">{problem.spaceComplexity}</p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-zinc-900/60 border border-zinc-800 border-dashed rounded-xl p-8 text-center">
        <p className="text-3xl mb-4">📝</p>
        <p className="text-zinc-400 text-sm mb-1">Content coming soon</p>
        <p className="text-zinc-600 text-xs">
          Detailed walkthrough, boilerplate, and Big-O breakdown will appear here.
        </p>
      </div>
    </div>
  );
}
