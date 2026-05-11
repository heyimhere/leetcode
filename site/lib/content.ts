import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = path.join(process.cwd(), 'content');

export interface ProblemContent {
  frontmatter: Record<string, unknown>;
  source: string;
}

export function getProblemContent(
  difficulty: string,
  topic: string,
  slug: string
): ProblemContent | null {
  const filePath = path.join(contentDir, difficulty, topic, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data: frontmatter, content: source } = matter(raw);
  return { frontmatter, source };
}
