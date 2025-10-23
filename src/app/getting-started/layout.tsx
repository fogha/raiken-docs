import { DocsLayout } from '@/components/layout/docs-layout'

export default function GettingStartedLayout({
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
