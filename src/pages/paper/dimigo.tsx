import ColorLink from '@/components/ColorLink';
import Paper from '@/components/Paper';

export const Dimigo_exp = () => {
  return (
    <div>
      <p className='mt-8 font-bold'>Korea Digital Media High School (KDMHS)</p>
      <p>Ansan, South Korea</p>
      <p>21st: March 2022 ~ January 2025</p>
      <p className='mt-3'>1st year, Grade 10</p>
      <div className='pl-6'>
        <p className='pl-8 -indent-8 sm:pl-28 sm:-indent-28'>
          Default Subject: Korean, Integrated Mathematics, Integrated Science,
          English, Physical Education, Social Studies, Music, Art, Vocational
          Studies
        </p>
        <p className='pl-12 -indent-12'>
          Major: C Programming Language, Internet of Things(IoT), System of
          Computer
        </p>
      </div>
      <p className='mt-3'>2nd year, Grade 11</p>
      <div className='pl-6'>
        <p className='pl-8 -indent-8 sm:pl-28 sm:-indent-28'>
          Default Subject: Koran History, Literature Studies, English, Physical
          Education, Mathematics, Differential and Integral Calculus, Physics,
          Chemistry, Vocational Studies, Chinese
        </p>
        <p className='pl-12 -indent-12'>
          Major: Web Programming, Mathematics for Engineering
        </p>
        <p className='pl-12 -indent-12'>AI Course: Data Structure Theory</p>
      </div>
      <p className='pl-24 mt-3 -indent-24'>
        School Club: 🌿Fregic 12th, artificial intelligence(AI) study club
        <br />
        Turing 1st, artificial intelligence(AI) research lab
      </p>
    </div>
  );
};

export default function Dimigo() {
  return (
    <Paper title='👋 Hello, I am siwon in KDMHS.'>
      {/* My profile */}
      <div className='text-sm text-center'>
        <p className='text-xl'>Siwon Yun</p>
        <p>Korea Digital Media High School 21wp</p>
        <p>Ansan, South Korea</p>
        <p>siwon@siwonsw.com</p>
      </div>

      {/* My school */}
      <Dimigo_exp />

      <p className='mt-14'>
        <ColorLink href='https://www.dimigo.hs.kr/' target='_blink'>
          한국디지털미디어고등학교
        </ColorLink>
        (Korea Digital Media High School, KDMHS) 21기 윤시원입니다 :)
      </p>
      <div className='pl-6'>
        <p>계열: 웹 프로그래밍과</p>
        <p>동아리: 🌿프레직</p>
        <p>선택코스: AI 코스</p>
      </div>
    </Paper>
  );
}
