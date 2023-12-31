import Image from 'next/image';
import Link from 'next/link';
import urlFor from '../../sanity/lib/urlFor';

export const RichTextComponents = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className='relative w-full h-96 h-10 mx-auto'>
          <Image
            className='object-contain'
            src={urlFor(value).url()}
            alt='Blog Post Image'
            fill
          />
        </div>
      );
    },
  },

  list: {
    bullet: ({ children }: any) => (
      <ul className='ml-10 py-5 list-disc space-y-5'>{children}</ul>
    ),
    number: ({ children }: any) => (
      <ul className='mt-lg list-decimal'>{children}</ul>
    ),
  },
  block: {
    p: ({ children }: any) => (
      <h1 className='text-5xl py-10 font-bold my-1'>{children}</h1>
    ),
    h1: ({ children }: any) => (
      <h1 className='text-5xl py-10 font-bold mb-2'>{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className='text-4xl py-10 font-bold mb-2'>{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className='text-3xl py-10 font-bold mb-2'>{children}</h3>
    ),

    h4: ({ children }: any) => (
      <h4 className='text-2xl py-10 font-bold mb-2'>{children}</h4>
    ),

    blockquote: ({ children }: any) => (
      <blockquote className='border-l-[#F7AB0A] border-l-4 py-5 my-5'>
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startWith('/')
        ? 'noreferrer noopener'
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className='underline decoration-[#F7AB0A] hover:decoration-black'
        >
          {children}
        </Link>
      );
    },
  },
};
