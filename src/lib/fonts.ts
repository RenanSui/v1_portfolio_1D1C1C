import localFont from 'next/font/local'

export const Concielian = localFont({
	src: '../../public/fonts/concielianjetexpand.ttf',
})

export const RodinPro = localFont({
	src: [
		{
			path: '../../public/fonts/FOT-Rodin Pro L.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../../public/fonts/FOT-Rodin Pro M.otf',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../../public/fonts/FOT-Rodin Pro DB.otf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../public/fonts/FOT-Rodin Pro B.otf',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../../public/fonts/FOT-Rodin Pro UB.otf',
			weight: '800',
			style: 'normal',
		},
	],
})
