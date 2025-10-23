import { DocsLayout } from '@/components/layout/docs-layout'

export default function APILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DocsLayout>
      {children}
    </DocsLayout>
  )
}
