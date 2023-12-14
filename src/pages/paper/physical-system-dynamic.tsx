import { ChangeEvent, useState } from 'react';

import Paper from '@/components/Paper';
import SystemDynamicSVG from '@/components/paper/physical-system-dynamic/SystemDynamicSVG';
import VisualizationSVG from '@/components/paper/physical-system-dynamic/VisualizationSVG';

export default function PhysicalSystemDynamic() {
  const length = 326.67;
  // const length = 6;
  const [position, setPosition] = useState<number>(length);
  const [update, setUpdate] = useState<boolean>(false);

  return (
    <Paper title='System Dynamic - physcial'>
      <div className='w-4/5 m-auto my-8 aspect-video'>
        <VisualizationSVG position={((length - position) * 500) / length} />
      </div>
      <input
        type='range'
        min={0}
        max={length}
        step={1}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          // setPosition(Number(e.target.value));
          // setUpdate((prev) => !prev);
        }}
        value={position}
      />
      <input
        type='button'
        onClick={() => {
          setUpdate((prev) => !prev);
        }}
        value='reset'
      />
      <div className='w-4/5 m-auto my-8'>
        <SystemDynamicSVG
          length={length}
          weightY={position}
          setWeightY={setPosition}
          update={update}
        />
      </div>
    </Paper>
  );
}
