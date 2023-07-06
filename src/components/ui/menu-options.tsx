'use client'
import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode } from 'react'

interface MenuOptionsProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode
	layout?: 'default' | 'full' | 'centered'
}

const MenuOptions: FC<MenuOptionsProps> = ({
	children,
	className,
	layout = 'default',
	...props
}) => {
	return (
		<div
			className={cn(
				'',
				layout === 'default' && '',
				layout === 'full' && 'h-full w-full',
				layout === 'centered' &&
					'flex h-full w-full flex-col items-center justify-center',
				className,
			)}
			{...props}
		>
			{children}
		</div>
	)
}

export { MenuOptions }
