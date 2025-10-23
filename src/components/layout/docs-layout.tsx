import { DocsSidebar } from './docs-sidebar'

interface DocsLayoutProps {
  children: React.ReactNode
  className?: string
}

export function DocsLayout({ children, className = "" }: DocsLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex gap-8 lg:gap-12">
        <main className={`flex-1 min-w-0 ${className}`}>
          {children}
        </main>
        <DocsSidebar />
      </div>
    </div>
  )
}
