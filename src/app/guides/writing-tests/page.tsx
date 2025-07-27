import { MDXRemote } from 'next-mdx-remote/rsc'
import { readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { mdxComponents } from '@/components/docs/mdx-components'

export default async function WritingTestsPage() {
  const filePath = join(process.cwd(), 'src/content/guides/writing-tests.mdx')
  const source = readFileSync(filePath, 'utf8')
  const { content } = matter(source)

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="prose prose-slate dark:prose-invert max-w-none">
        <MDXRemote source={content} components={mdxComponents} />
      </div>
    </div>
  )
} 