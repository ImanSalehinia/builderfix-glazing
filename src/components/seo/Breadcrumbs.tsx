import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'
import { BreadcrumbItem } from '@/types'

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-3 border-b border-slate-100">
      <div className="container-custom">
        <ol className="flex items-center flex-wrap gap-1 text-sm text-slate-500">
          <li>
            <Link href="/" className="flex items-center gap-1 hover:text-orange-600 transition-colors">
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-1">
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              {index === items.length - 1 ? (
                <span className="text-slate-800 font-medium" aria-current="page">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-orange-600 transition-colors">{item.name}</Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
