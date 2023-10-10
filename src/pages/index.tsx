import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaGraduationCap } from 'react-icons/fa';
import { IoLocation } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { useMediaQuery } from 'react-responsive';

import ColorLink from '@/components/ColorLink';
import IframeMindMap from '@/components/iframeMindMap';
import MadeWith from '@/components/MadeWith🔥BySiwon';

import { nodes } from '@/pages/mind-map/post';
import { Dimigo_exp } from '@/pages/paper/dimigo';

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
        <p className='text-sm'>March 2022 ~</p>
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
      <div className='h-6 w-full sm:h-12' />
      <h1 className='mb-4'>🖐️ Hello, I am siwon. </h1>
      <div className='mb-2 flex items-center text-yellow-400 dark:text-yellow-200'>
        <IoLocation size={15} />
        <p>Ansan, South Korea</p>
      </div>
      <div className='indent-6'>
        <p>
          I'm a student in{' '}
          <ColorLink href='https://www.dimigo.hs.kr/' target='_blink'>
            Korea Digital Media High School(KDMHS)
          </ColorLink>{' '}
          21st. I'm interested in Artificial Intelligence(AI) espally Machine
          Learning, Web Programming, Programming Langaege, and Quantum
          Computing.
        </p>
        <p>
          I will write the posts that includes objects that can be controlled by
          the user on my website. For example, I plan to create an object that
          visualizes multi-dimensional concepts in linear algebra using a
          two-dimensional representation. I have faith in the power of geometric
          visualization. Probably, I will write the posts in Korean.
        </p>
      </div>
      <div className='h-8 w-full sm:h-16' />
      <div className='flex w-full flex-col items-start justify-center gap-0 sm:flex-row sm:items-center sm:gap-8'>
        <h3>Education</h3>
        <Dimigo />
      </div>
      <Dimigo_exp />
      <div className='h-8 w-full sm:h-16' />
      <div className='flex w-full flex-col items-start justify-center gap-0 sm:flex-row sm:items-center sm:gap-8'>
        <h3>Contact</h3>
        <div>
          <Emali />
          <Github />
        </div>
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
    <div className='h-full w-full'>
      <div className='mx-auto w-full max-w-[1000px] overflow-auto px-6'>
        <IntroduceMySelf />
        <div className='h-16 w-full sm:h-32' />
        <Link href='/mind-map/post'>
          <p className='text-3xl'>Post</p>
        </Link>
        <IframeMindMap nodes={nodes} initialScale={isMd ? 1 : 0.7} />
        <div className='flex h-16 w-full items-center justify-center sm:h-32'>
          <MadeWith />
        </div>
      </div>
    </div>
  );
}
