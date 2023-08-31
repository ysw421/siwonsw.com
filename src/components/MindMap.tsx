import { useAtom } from 'jotai';
import { useEffect, useRef, useState } from 'react';

import styles from './animation.module.scss';

import { isDarkMode_ } from '@/lib/darkMode';
import { Nodes } from '@/lib/nodeType';

export default function MindMap({ nodes }: { nodes: Nodes }) {
  const [isDarkMode] = useAtom(isDarkMode_);
  const screenRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [canvasSize, setCanvasSize] = useState({ width: 1000, height: 800 });

  useEffect(() => {
    if (screenRef.current !== null) {
      setCanvasSize({
        width: screenRef.current.offsetWidth,
        height: screenRef.current.offsetHeight,
      });
    }
  }, [screenRef]);

  return (
    <div className='h-full w-full' ref={screenRef}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='absolute top-0 left-0 z-0 h-full w-full'
      >
        {nodes &&
          Object.keys(nodes).map((key: string) =>
            nodes[key].edges.map((edge, edgeIndex) => {
              return (
                <g key={edgeIndex}>
                  <path
                    d={`M ${nodes[key].x + canvasSize.width / 2} ${
                      nodes[key].y + canvasSize.height / 2
                    } L ${nodes[edge].x + canvasSize.width / 2} ${
                      nodes[edge].y + canvasSize.height / 2
                    }`}
                    stroke='#818181'
                    strokeWidth='1.2'
                    fill='none'
                  ></path>
                </g>
              );
            })
          )}
      </svg>
      <div className='h-full w-full'>
        {nodes &&
          Object.keys(nodes).map((key) => (
            <div
              key={key}
              style={{
                transform: `translate(${
                  nodes[key].x -
                  nodes[key].circleSize / 2 +
                  canvasSize.width / 2
                }px, ${
                  nodes[key].y -
                  (nodes[key].circleSize > 27
                    ? nodes[key].circleSize / 2
                    : 13.5) +
                  canvasSize.height / 2
                }px)`,
              }}
              className='absolute flex h-auto w-auto flex-row items-center justify-center gap-2 text-xl font-extralight'
            >
              <div
                style={{
                  width: `${nodes[key].circleSize}px`,
                  height: `${nodes[key].circleSize}px`,
                }}
                className={`${styles.transition} ${
                  nodes[key].isFolder
                    ? `${styles.transition} rounded-[35%] ${
                        isDarkMode ? 'bg-[#c4ccf3]' : 'bg-[#280d6b]'
                      }`
                    : `rounded-[50%] ${
                        isDarkMode
                          ? 'bg-light hover:bg-[#c4ccf3]'
                          : 'bg-dark hover:bg-[#280d6b]'
                      } rotate-0 hover:rotate-[135deg] hover:cursor-pointer hover:rounded-[35%]`
                }`}
              ></div>
              <span className='whitespace-nowrap'>{nodes[key].value}</span>
            </div>
          ))}
      </div>
    </div>
  );
}
