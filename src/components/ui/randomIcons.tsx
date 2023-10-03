import { cn } from '@/lib/utils'
import { LucideIcon, LucideProps, X } from 'lucide-react'

interface RandomIconProps extends LucideProps {
  as?: LucideIcon
}

export const RandomIcon = ({ as: Icon = X, className }: RandomIconProps) => {
  return <Icon className={cn('', className)} />
}
