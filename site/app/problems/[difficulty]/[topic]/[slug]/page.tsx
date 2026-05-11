import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getAllProblemParams, getProblemBySlug } from '@/lib/manifest';
import { getProblemContent } from '@/lib/content';
import { ProblemPage } from '@/app/components/ProblemPage';
import { ComingSoon } from '@/app/components/ComingSoon';

interface Params {
  difficulty: string;
  topic: string;
  slug: string;
}

export function generateStaticParams() {
  return getAllProblemParams();
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { difficulty, topic, slug } = await params;
  const problem = getProblemBySlug(difficulty, topic, slug);
  if (!problem) return { title: 'Not Found' };
  return {
    title: `${problem.title} — DSA Practice`,
    description: `${problem.pattern} pattern. Time: ${problem.timeComplexity}, Space: ${problem.spaceComplexity}`,
  };
}

export default async function ProblemDetailPage({ params }: { params: Promise<Params> }) {
  const { difficulty, topic, slug } = await params;
  const problem = getProblemBySlug(difficulty, topic, slug);
  if (!problem) notFound();

  const content = getProblemContent(difficulty, topic, slug);

  if (!content) {
    return <ComingSoon problem={problem} />;
  }

  return <ProblemPage problem={problem} source={content.source} />;
}
