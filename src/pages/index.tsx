import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { FaGraduationCap, FaLinkedin } from 'react-icons/fa';
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
        <p className='text-sm'>March 2022 ~ January 2025</p>
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

const LinkedIn = () => {
  return (
    <Link
      href='https://www.linkedin.com/in/i-love-you'
      target='_blink'
      className='flex items-center gap-1'
    >
      <FaLinkedin className='text-lg' />
      <p className='text-md'>siwon yun</p>
    </Link>
  );
};

const IntroduceMySelf = () => {
  return (
    <>
      <div className='w-full h-6 sm:h-12' />
      <h1 className='mb-4'>🖐️ Hello, I am siwon. </h1>
      <div className='flex items-center mb-2 text-yellow-400 dark:text-yellow-200'>
        <IoLocation size={15} />
        <p>Ansan, South Korea</p>
      </div>
      <div className='indent-6'>
        <p>
          I am a student at{' '}
          <ColorLink href='https://www.dimigo.hs.kr/' target='_blink'>
            Korea Digital Media High School(KDMHS)
          </ColorLink>
          . Recently, I've been interested in Machine Learning of Artificial
          Intelligence(AI) part, Mathematics, Programming Language, Web
          Programming, and Quantum Computing. My huge goal is to simulate this
          world. I believe my interests are a step toward achieving my goal.
        </p>
        <p>
          I will write posts on this website to record my memories and share my
          experiences and thoughts. It will include objects that interact with
          users on my website. For example, I plan to create an object that
          visualizes multi-dimensional concepts in linear algebra using a
          two-dimensional representation. I have faith in the power of geometric
          visualization. Almost all posts will be in Korean. I recommend you
          study Korean to read my posts 😁
        </p>
        <p>
          I hope you guys have a good day, and thank you for reading my
          introduction :)
        </p>
      </div>
      <div className='w-full h-8 sm:h-16' />
      <div className='flex flex-col items-start justify-center w-full gap-0 sm:flex-row sm:items-center sm:gap-8'>
        <h3>Contact</h3>
        <div>
          <Emali />
          <Github />
          <LinkedIn />
        </div>
      </div>
      <div className='w-full h-8 sm:h-16' />
      <div>
        <h3>Technical Skills</h3>
        <p>Computer Languages: C, Python, JavaScript, TypeScript, Julia</p>
        <p>OS: Window, GNU/Linux (Ubuntu)</p>
        <p>Code Editor: NeoVim, Visual Studio Code</p>
        <p>Document Editor: LaTeX, MS Word, and MS Power Point</p>
      </div>
      <div className='w-full h-8 sm:h-16' />
      <div>
        <h3>Another Intersest or What I Like</h3>
        <p>Watching movies, Visiting a museum, Hugging my cat</p>
      </div>
      <div className='w-full h-8 sm:h-16' />
      <div className='flex flex-col items-start justify-center w-full gap-0 sm:flex-row sm:items-center sm:gap-8'>
        <h3>Education</h3>
        <Dimigo />
      </div>
      <Dimigo_exp />
      <div className='w-full h-8 sm:h-16' />
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
