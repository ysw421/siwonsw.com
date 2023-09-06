import { useAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import { useMediaQuery } from 'react-responsive';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

import clsxm from '@/lib/clsxm';
import { isDarkMode_ } from '@/lib/darkMode';

import IconButton from '@/components/buttons/IconButton';
import MindMap from '@/components/MindMap';

import { Nodes } from '@/constant/nodeType';
export default function IframeMindMap({
  nodes,
  className = '',
  initialScale = 1,
}: {
  nodes: Nodes;
  className?: string;
  initialScale?: number;
}) {
  const [isDarkMode] = useAtom(isDarkMode_);
  const [isMd, setIsMd] = useState(false);

  const md = useMediaQuery({
    query: '(min-width : 768px)',
  });

  useEffect(() => {
    setIsMd(md);
  }, [md]);

  const screenRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const [canvasSize, setCanvasSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (screenRef.current !== null) {
      setCanvasSize({
        width: screenRef.current.offsetWidth,
        height: screenRef.current.offsetHeight,
      });
    }
  }, [screenRef]);

  return (
    <div
      className={clsxm('aspect-video w-full overflow-hidden', className)}
      ref={screenRef}
      key={canvasSize.width}
    >
      <TransformWrapper
        limitToBounds={false}
        minScale={0.2}
        initialScale={initialScale}
      >
        {({ resetTransform }) => (
          <div className='relative w-full h-full border rounded-lg'>
            <TransformComponent>
              <div className='w-screen h-screen'>
                <MindMap
                  nodes={nodes}
                  canvasSize_={{
                    width: canvasSize.width / initialScale,
                    height: canvasSize.height / initialScale,
                  }}
                />
              </div>
            </TransformComponent>
            <div className='absolute flex flex-col items-end gap-2 right-2 bottom-2'>
              <div className='flex items-center gap-2'>
                {isMd && (
                  <span className='text-lg font-thin text-white mix-blend-difference'>
                    Reset
                  </span>
                )}
                <IconButton
                  isDarkBg={isDarkMode}
                  icon={AiOutlineHome}
                  className='p-1.5'
                  onClick={() => resetTransform()}
                />
              </div>
            </div>
          </div>
        )}
      </TransformWrapper>
    </div>
  );
}
