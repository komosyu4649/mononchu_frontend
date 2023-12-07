import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const guides = [
    {
      description:
        '所有しているモノ・欲しいモノを管理して、 \n好きなものにだけ囲まれた生活を目指そう！',
      url: '/stuff',
      linkText: 'モノを見る',
      linkColor: 'text-white bg-black',
    },
    {
      description: '所有しているモノにどのくらい使えてる？\n欲しいモノをどのくらい我慢できてる？',
      url: '/asset',
      linkText: '資産を見る',
      linkColor: 'text-black bg-white border border-line',
    },
  ]
  return (
    <main className='w-defaultWidth m-auto mt-16'>
      <h1 className='text-defaultTitle text-center mb-10'>マイページ</h1>
      <div className='flex flex-col gap-6'>
        {guides.map((guide) => (
          <div
            key={guide.linkText}
            className='inline-flex flex-col items-center p-10 bg-gray border border-line rounded-lg'
          >
            <p className='block mb-6 text-defaultText text-center whitespace-break-spaces'>
              {guide.description}
            </p>
            <Link
              href={guide.url}
              className={`inline-block w-fit px-10 py-4 text-[1.4rem] font-bold rounded-full ${guide.linkColor}`}
            >
              {guide.linkText}
            </Link>
          </div>
        ))}
      </div>
    </main>
  )
}
