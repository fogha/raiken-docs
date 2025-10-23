'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { detailedNavigation, quickLinks, isActiveLink, findActiveSection } from '@/lib/navigation'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export function DocsSidebar() {
  const pathname = usePathname()
  const [collapsedSections, setCollapsedSections] = useState<string[]>([])

  const toggleSection = (sectionTitle: string) => {
    setCollapsedSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    )
  }

  const isInActiveSection = (section: any) => {
    return section.items.some((item: any) => isActiveLink(item.href, pathname))
  }

  return (
    <aside className="hidden lg:block w-72 flex-shrink-0">
      <div className="sticky top-8 h-[calc(100vh-4rem)] overflow-y-auto">
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Documentation
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Complete guide to Raiken
            </p>
          </div>
          
          <nav className="p-4 space-y-2">
            {detailedNavigation.map((section) => {
              const isCollapsed = collapsedSections.includes(section.title)
              const hasActiveItem = isInActiveSection(section)
              
              return (
                <div key={section.title}>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className={cn(
                      "w-full flex items-center justify-between p-2 rounded-md text-sm font-medium transition-colors",
                      hasActiveItem
                        ? "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                    )}
                  >
                    <div className="flex items-center gap-2">
                      <section.icon className="w-4 h-4" />
                      {section.title}
                    </div>
                    {isCollapsed ? (
                      <ChevronRight className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                  
                  {!isCollapsed && (
                    <div className="ml-6 mt-1 space-y-1">
                      {section.items.map((item) => {
                        const itemIsActive = isActiveLink(item.href, pathname)
                        return (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              "flex items-center gap-2 p-2 rounded-md text-sm transition-all duration-200 group",
                              itemIsActive
                                ? "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-l-2 border-blue-500"
                                : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                            )}
                          >
                            {item.icon && (
                              <item.icon className={cn(
                                "w-4 h-4",
                                itemIsActive ? "text-blue-600 dark:text-blue-400" : "text-gray-400"
                              )} />
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2">
                                <span className="font-medium truncate">
                                  {item.name}
                                </span>
                                {item.badge && (
                                  <span className="px-1.5 py-0.5 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded">
                                    {item.badge}
                                  </span>
                                )}
                              </div>
                              <div className="text-xs text-gray-500 dark:text-gray-500 truncate">
                                {item.description}
                              </div>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>
          
          {/* Quick Links */}
          <div className="p-4 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.filter(link => ['Live Demo', 'Get Started'].includes(link.name)).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 p-2 rounded-md text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {link.icon && <link.icon className="w-4 h-4" />}
                  {link.name === 'Get Started' ? 'Quick Start' : link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
