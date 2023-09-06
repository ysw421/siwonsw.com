import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

import ColorLink from '@/components/ColorLink';
import IframeMindMap from '@/components/iframeMindMap';
import MadeWith from '@/components/MadeWith🔥BySiwon';

import { nodes } from '@/pages/mind-map/post';

const Dimigo = () => {
  return (
    <Link
      href='https://dimigo.hs.kr'
      target='_blink'
      className='flex items-center gap-3'
    >
      <FaGraduationCap className='text-3xl' />
      <div>
        <p className='text-md'>Korea Digital Media High School 21st</p>
        <p className='text-sm'>2022Y March ~</p>
      </div>
    </Link>
  );
};

const Emali = () => {
  return (
    <Link href='mailto:siwon@siwonsw.com' className='flex items-center gap-1'>
      <MdEmail className='text-lg' />
      <p className='text-md'>siwon@siwonsw.com</p>
    </Link>
  );
};

const Github = () => {
  return (
    <Link
      href='https://github.com/ysw421'
      target='_blink'
      className='flex items-center gap-1'
    >
      <AiOutlineGithub className='text-lg' />
      <p className='text-md'>ysw421</p>
    </Link>
  );
};

const IntroduceMySelf = () => {
  return (
    <>
      <div className='w-full h-6 sm:h-12' />
      <p className='text-3xl'>🖐️ Hello, I am siwon. </p>
      <div className='w-full h-2' />
      <div className='indent-6'>
        <p>
          I'm a student in{' '}
          <ColorLink href='https://www.dimigo.hs.kr/' target='_blink'>
            Korea Digital Media High School(KDMHS)
          </ColorLink>{' '}
          21st. I'm interested in Artificial Intelligence(AI) espally Machine
          Learning, Web Programming, Programming Langaege, and Quantum.
        </p>
        <p>
          I will write the posts that includes objects that can be controlled by
          the user on my website. For example, I plan to create an object that
          visualizes multi-dimensional concepts in linear algebra using a
          two-dimensional representation. I have faith in the power of geometric
          visualization. Probably, I will write the posts in Korean.
        </p>
      </div>
      <div className='w-full h-8 sm:h-16' />
      <div className='flex flex-col items-start justify-center w-full gap-2 sm:flex-row sm:items-center sm:gap-16'>
        <div>
          <Emali />
          <Github />
        </div>
        <Dimigo />
      </div>
    </>
  );
};

export default function Main() {
  const [isMd, setIsMd] = useState(false);

  const md = useMediaQuery({
    query: '(min-width : 768px)',
  });

  useEffect(() => {
    setIsMd(md);
  }, [md]);

  return (
    <div className='w-full h-full'>
      <div className='mx-auto w-full max-w-[1000px] overflow-auto px-6'>
        <IntroduceMySelf />
        <div className='w-full h-16 sm:h-32' />
        <Link href='/mind-map/post'>
          <p className='text-3xl'>Post</p>
        </Link>
        <IframeMindMap nodes={nodes} initialScale={isMd ? 1 : 0.7} />
        <div className='flex items-center justify-center w-full h-16 sm:h-32'>
          <MadeWith />
        </div>
      </div>
    </div>
  );
}
