import { DocsLayout } from '@/components/layout/docs-layout'

export default function GuidesLayout({
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
