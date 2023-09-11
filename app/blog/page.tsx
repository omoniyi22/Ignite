'use client';
import Container from '../components/Container';
import BlogHeader from '../components/BlogHeader';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import Image from 'next/image';
import urlFor from './../../sanity/lib/urlFor';
import ClientSideRoute from '../components/ClientSideRoute';


async function getData() {
  const query = `*[_type == "post"]`;
  const data = await client.fetch(query);
  return data;
}

async function page() {
  const data = (await getData()) as Post[];
  return (
    <div>
      <BlogHeader />
      <Container>
        <section className='py-12  bg-coolGray-50'>
          <div className='blog-preface container mx-auto px-4'>
            <div className='flex flex-wrap -mx-1'>
              <div className='w-full lg:w-3/12 xl:w-3/12 px-0 mb-16 lg:mb-0 '>
                <div className='max-w-xs mb-4'>
                  <h1 className='header_font font-heading text-2xl  tracking-tighter mb-5'>
                    Updates
                  </h1>
                  <p className='text-base text-gray-600 mb-10'>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <a
                    className='group inline-flex items-center leading-none font-medium pb-2 border-b-2 border-black mb-1'
                    href='#'
                  >
                    <span className='mr-4'>See our blog</span>
                    <span className='group-hover:rotate-45 transform transition duration-100'>
                      <svg
                        width={11}
                        height={11}
                        viewBox='0 0 11 11'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M9.5 1.5L1.5 9.5'
                          stroke='black'
                          strokeWidth='1.3'
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M9.5 8.83571V1.5H2.16429'
                          stroke='black'
                          strokeWidth='1.3'
                          strokeMiterlimit={10}
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className=' flex flex-wrap w-full lg:w-9/12 xl:w-9/12 px-4'>
                {data.map((post) => (
                  <div
                    key={post._id}
                    className=' group col-pointer
                    flex flex-wrap -mx-1 lg:w-6/12 xl:w-6/12 px-4 lg:mb-0'
                  >
                    <div
                      className='w-full  px-4 mb-10 sm:mb-0
                    relative w-full drop-shadow-xl
                    group-hover:scale-105 transition-transform duration-200
                    ease-out
                    '
                    >
                      <Link
                        href={`/post/${post.slug.current}`}
                        prefetch
                        className='group block mb-12'
                      >
                        <div className='relative mb-6 blog_img rounded-3xl overflow-hidden'>
                          <div className='relative w-full h-60'>
                            <Image
                              className='object-cover object-left lg:object-center blog_img'
                              src={urlFor(post.mainImage).url()}
                              alt={post.author.name}
                              fill={true}
                            />
                          </div>
                          <div className='absolute left-0 top-0 h-full w-full group-hover:bg-opacity-10 group-hover:bg-black transition duration-200' />
                        </div>
                        <div className='max-w-lg'>
                          <div className='mb-3 flex justify-between'>
                            <span className='inline-block mr-6 py-2 px-3 text-sm text-black group-hover:text-white leading-none border border-black group-hover:bg-black rounded-full transition duration-200'>
                              {/* {post.categories} */}
                              Science{' '}
                            </span>
                            <span className='inline-block text-sm text-gray-600 font-medium'></span>
                          </div>
                          <h4 className='capital max-w-xs md:max-w-md text-xl line-clamp tracking-tight mb-3'>
                            {post.title}
                          </h4>
                          <p className='line-clamp-2 text-base text-gray-500'>
                            {post.description}
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
export default page;
