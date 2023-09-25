import { useAtom } from 'jotai';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import styles from './animation.module.scss';

import { isDarkMode_ } from '@/lib/darkMode';

import { Nodes } from '@/constant/nodeType';

export default function MindMap({
  nodes,
  canvasSize_ = null,
}: {
  nodes: Nodes;
  canvasSize_?: null | { width: number; height: number };
}) {
  const [isDarkMode] = useAtom(isDarkMode_);
  const screenRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [canvasSize, setCanvasSize] = useState({
    width: canvasSize_ == null ? 1000 : canvasSize_.width,
    height: canvasSize_ == null ? 800 : canvasSize_.height,
  });

  useEffect(() => {
    if (!canvasSize_ && screenRef.current !== null) {
      setCanvasSize({
        width: screenRef.current.offsetWidth,
        height: screenRef.current.offsetHeight,
      });
    }
  }, [screenRef]);

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (!canvasSize_ && screenRef.current !== null) {
        setCanvasSize({
          width: screenRef.current.offsetWidth,
          height: screenRef.current.offsetHeight,
        });
      }
    });
    return () => {
      window.removeEventListener('resize', () => {
        if (!canvasSize_ && screenRef.current !== null) {
          setCanvasSize({
            width: screenRef.current.offsetWidth,
            height: screenRef.current.offsetHeight,
          });
        }
      });
    };
  }, []);

  const MainComponents = ({
    canvasSize,
  }: {
    canvasSize: { width: number; height: number };
  }) => {
    return (
      <>
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
            Object.keys(nodes).map((key) =>
              nodes[key].isFolder ? (
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
                    className={`${styles.transition} rounded-[35%] ${
                      isDarkMode ? 'bg-[#c4ccf3]' : 'bg-[#280d6b]'
                    }`}
                  />
                  <span className='whitespace-nowrap font-fontMain'>
                    {nodes[key].value}
                  </span>
                </div>
              ) : (
                <Link
                  href={{ pathname: nodes[key].link }}
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
                    className={`${styles.transition} rounded-[50%] ${
                      isDarkMode
                        ? 'bg-light hover:bg-[#c4ccf3]'
                        : 'bg-dark hover:bg-[#280d6b]'
                    } rotate-0 hover:rotate-[135deg] hover:cursor-pointer hover:rounded-[35%]`}
                  />
                  <span className='whitespace-nowrap font-fontMain'>
                    {nodes[key].value}
                  </span>
                </Link>
              )
            )}
        </div>
      </>
    );
  };

  return canvasSize_ == null ? (
    <div className='h-full w-full' ref={screenRef}>
      <MainComponents canvasSize={canvasSize} />
    </div>
  ) : (
    <div className='h-full w-full'>
      <MainComponents canvasSize={canvasSize} />
    </div>
  );
}
