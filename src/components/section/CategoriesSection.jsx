import React, { Suspense } from 'react'
import { Skeleton } from '../atom/Skeleton'
import { media } from '@/lib/api';
import Image from 'next/image';
import { InboxIcon } from 'lucide-react';

function CategoriesSection({ title, id, fetcher }) {
  return (
    <div className="py-8 px-6">
      <h2 id={id} className="text-2xl font-medium mb-6 scroll-m-[100px] ">
        {title}
      </h2>
      <Suspense fallback={<CatergoriesFallback />}>
        <CategoriesContent fetcher={fetcher} />
      </Suspense>
    </div>
  )
}

async function CategoriesContent({fetcher}) {
  const data=await fetcher();
  if(!data||data.length===0){
    return(
      <div className="flex flex-col items-center justify-center w-full h-[300px] py-12">
        <InboxIcon
          className="w-32 h-32 text-slate-400 mb-10"
          strokeWidth={1.2}
        />
        <p className="text-lg text-gray-500">No items found.</p>
      </div>
    );
  }
  return <ul className="flex gap-4 w-full overflow-scroll scrollbar-hide">
      {data?.map((post) => {
        console.log(post);
        return <Image
          src={media(post?.poster_path)}
          alt=""
          width={200}
          height={300}
          className="min-w-[200px] h-[300px] rounded-lg object-cover"
          quality={30}
          key={post.id}
        />
      })}
    </ul>
  
}

function CatergoriesFallback() {
  return (
    <ul className="flex gap-4 w-full overflow-scroll scrollbar-hide">
      {new Array(12).fill(0).map((e, index) => (
        <Skeleton key={index} className="min-w-[200px] h-[300px] bg-[#6c668530]" />
      ))}
    </ul>
  )
}

export default CategoriesSection
