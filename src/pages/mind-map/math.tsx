import MindMap from '@/components/MindMap';
import SetModeBtn from '@/components/SetModeBtn';

export default function Test() {
  return (
    <>
      <div className='text-size-20'>
        <p className='text-5xl'>test</p>
        <SetModeBtn type={2} />
        <MindMap />
      </div>
    </>
  );
}
