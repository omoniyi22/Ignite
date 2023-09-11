import { RichTextComponents } from '../../../components/RichTextComponents';
import { client } from '@/sanity/lib/client';
import urlFor from '@/sanity/lib/urlFor';
import { PortableText } from '@portabletext/react';
import { groq } from 'next-sanity';
import Image from 'next/image';
import './../../post.scss';

type Props = {
  params: {
    slug: string;
  };
};

async function Post({ params: { slug } }: Props) {
  const query = groq`
    *[_type=='post' && slug.current == $slug ][0]
      { ...,
        author->,
      categories[]->
    }
  `;

  const post: Post = await client.fetch(query, { slug });
  return (
    <article className='px-10 pb-28 single_article rounded mx-auto'>
      <section className='space-y-2 border border-[#32b7a5] text-white'>
        <div className='relative min-h-5 flex flex-col md:flex-row justify-between'>
          <div className='absolute top-0 w-full h-full opacity-10 blur-sm p-40'>
            <Image
              className='object-cover rounded object-center mx-auto'
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
            
          </div>
        </div>
      </section>

      <section className='p-7 bg-[#BFD2E2] w-full rounded post_header'>
        <div className='flex flex-col md:flex-row justify-between gap-y-5'>
          <h3 className='text-3xl font-bold mr-10'>{post.title}</h3>
          <p>
            {new Date(post._createdAt).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </p>
        </div>
        <div className='flex items-center space-x-2'>
          <Image
            className='rounded-full mt-3 image-cap'
            src={urlFor(post.author.image).url()}
            alt={post.author.name}
            height={50}
            width={70}
            
          />

          <div className='w-64  mt-auto mb-2'>
            <div></div>
            <h5 className='text-md font-normal capital'>{post.author.name}</h5>
          </div>
        </div>

        <div>
          <h2 className='italic pt-10 capital'>{post.description}</h2>
          <div className='flex items-center justify-end mt-auto'>
            {post.categories.map((category) => (
              <p
                key={category._id}
                className='capital mr-18 bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4'
              >
                {category.title}
              </p>
            ))}
          </div>
        </div>
      </section>

      <div className='post_image relative w-full '>
        <Image
          className='object-cover rounded object-left lg:object-center blog_img'
          src={urlFor(post.mainImage).url()}
          alt={post.author.name}
          fill={true}
        />
      </div>
      <div className='post_body'>
        <PortableText value={post.body} components={RichTextComponents} />
      </div>
    </article>
  );
}

export default Post;
