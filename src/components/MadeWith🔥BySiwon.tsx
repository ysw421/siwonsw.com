import ColorLink from '@/components/ColorLink';

export default function MadeWith() {
  return (
    <div className='text-sm'>
      <span>Made with 🔥 by </span>
      <ColorLink href='https://github.com/ysw421' target='_blink'>
        @siwon
      </ColorLink>
    </div>
  );
}
