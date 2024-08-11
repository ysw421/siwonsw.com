import * as d3 from 'd3';
import { useAtom } from 'jotai';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

import { isDarkMode_ } from '@/lib/darkMode';

import {
  DragIcon,
  PauseIcon,
  PlayIcon,
} from '@/components/paper/momentum/Icons';

export default function GradientDescentSVG({
  a_function_value,
  b_function_value,
  c_function_value,
  setA_function_value,
  setB_function_value,
  setC_function_value,
  a,
  b,
  c,
  setA,
  setB,
  setC,
  startIdx,
  setStartIdx,
  stepSize,
  setStepSize,
}: {
  a_function_value: number;
  b_function_value: number;
  c_function_value: number;
  setA_function_value: (e: number) => void;
  setB_function_value: (e: number) => void;
  setC_function_value: (e: number) => void;
  a: number;
  b: number;
  c: number;
  setA: (e: number) => void;
  setB: (e: number) => void;
  setC: (e: number) => void;
  startIdx: number;
  setStartIdx: (e: number) => void;
  stepSize: number;
  setStepSize: (e: number) => void;
}) {
  const [isDarkMode] = useAtom(isDarkMode_);
  const width = 1600;
  const height = 1000;

  const svgRef = useRef<SVGSVGElement>(null);
  const gRef_a = useRef<SVGGElement>(null);
  const gRef_b = useRef<SVGGElement>(null);
  const gRef_c = useRef<SVGGElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);

  const [idx, setIdx] = useState<number>(0);
  // const [startIdx, setStartIdx] = useState<number>(700);
  // const [stepSize, setStepSize] = useState<number>(0.05);

  // const [a, setA] = useState<number>(width / 4);
  // const [b, setB] = useState<number>(width / 2);
  // const [c, setC] = useState<number>((width * 3) / 4);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  // const [a_function_value, setA_function_value] = useState<number>(500);
  // const [b_function_value, setB_function_value] = useState<number>(200);
  // const [c_function_value, setC_function_value] = useState<number>(700);

  const [k_ab, setK_ab] = useState<number>(
    (a_function_value - b_function_value) / (g_ab(a) - g_ab(b))
  );
  const [h_ab, setH_ab] = useState<number>(a_function_value - k_ab * g_ab(a));
  const [k_bc, setK_bc] = useState<number>(
    (b_function_value - c_function_value) / (g_bc(b) - g_bc(c))
  );
  const [h_bc, setH_bc] = useState<number>(b_function_value - k_bc * g_bc(b));

  // const [idx, setIdx] = useState<number>(700);
  const [arr, setArr] = useState<number[]>([700]);

  const [isFirst, setIsFirst] = useState<boolean>(true);

  function g_a(x: number) {
    return (-((x - a) ** 2) * a_function_value) / a ** 2 + a_function_value;
  }
  function g_ab(x: number) {
    return x ** 3 / 3 - ((a + b) / 2) * x ** 2 + a * b * x;
  }
  function g_bc(x: number) {
    return x ** 3 / 3 - ((b + c) / 2) * x ** 2 + b * c * x;
  }
  function g_c(x: number) {
    return (
      (-((x - c) ** 2) * c_function_value) / (width - c) ** 2 + c_function_value
    );
  }
  function dg_a() {
    return ((2 * a_function_value) / a) * (-1 / a + 1);
  }
  function dg_ab(x: number) {
    return x ** 2 - (a + b) * x + a * b;
  }
  function dg_bc(x: number) {
    return x ** 2 - (b + c) * x + b * c;
  }
  function dg_c() {
    return -((2 * c_function_value) / (width - c)) * (-1 / (width - c) + 1);
  }

  // function get_function_value(x: number) {
  //   let y;
  //   if (x < a) y = g_a(x);
  //   else if (x >= a && x <= b) {
  //     y = k_ab * g_ab(x) + h_ab;
  //   } else if (x >= b && x <= c) {
  //     y = k_bc * g_bc(x) + h_bc;
  //   } else y = g_c(x);
  //   return y;
  // }
  function get_dfunction_value(x: number) {
    let y;
    if (x < a) y = dg_a();
    else if (x >= a && x <= b) {
      y = k_ab * dg_ab(x);
    } else if (x >= b && x <= c) {
      y = k_bc * dg_bc(x);
    } else y = dg_c();
    return y;
  }

  function get_function_real_value(
    x: number,
    k_ab: number,
    h_ab: number,
    k_bc: number,
    h_bc: number
  ) {
    let y;
    if (x < a) y = g_a(x);
    else if (x >= a && x <= b) {
      y = k_ab * g_ab(x) + h_ab;
    } else if (x >= b && x <= c) {
      y = k_bc * g_bc(x) + h_bc;
    } else y = g_c(x);
    return y;
  }

  useEffect(() => {
    if (isAutoPlay) {
      const arr = [startIdx];
      for (let i = 0; i < 10000; i++) {
        arr.push(
          arr[arr.length - 1] +
            stepSize * get_dfunction_value(arr[arr.length - 1])
        );
      }
      setArr(arr);
    }

    if (!isAutoPlay) return;

    const changeIdx = setInterval(
      () => {
        if (!isAutoPlay) return;
        setIdx((e: number) =>
          stepSize === 40
            ? e >= 2
              ? 0
              : e + 1
            : stepSize === 85
            ? e >= 30
              ? 0
              : e + 1
            : e >= 10000
            ? 0
            : e + 50
        );
      },
      stepSize === 40 ? 500 : stepSize === 85 ? 100 : 10
    );
    // const changeIdx = setInterval(() => {
    //   if (!isAutoPlay) return;
    //   setIdx((e: number) => (e >= 10000 ? 0 : e + 50));
    // }, 10);
    return () => clearInterval(changeIdx);
  }, [isAutoPlay]);

  // useEffect(() => {
  //   const arr = [startIdx];
  //   for (let i = 0; i < 10000; i++) {
  //     arr.push(
  //       arr[arr.length - 1] +
  //         stepSize * get_dfunction_value(arr[arr.length - 1])
  //     );
  //   }
  //   setArr(arr);
  // }, [idx]);

  useEffect(() => {
    const arr = [startIdx];
    arr.push(
      arr[arr.length - 1] + stepSize * get_dfunction_value(arr[arr.length - 1])
    );
    setArr(arr);
    setIdx(0);
  }, [
    stepSize,
    startIdx,
    a_function_value,
    b_function_value,
    c_function_value,
    a,
    b,
    c,
  ]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    while (svg.children.length > 5) {
      if (!svg.firstChild) return;
      svg.firstChild.remove();
    }
    const gridGap = 150;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const d = [];

    const k_ab = (a_function_value - b_function_value) / (g_ab(a) - g_ab(b));
    const h_ab = a_function_value - k_ab * g_ab(a);
    const k_bc = (b_function_value - c_function_value) / (g_bc(b) - g_bc(c));
    const h_bc = b_function_value - k_bc * g_bc(b);

    setK_ab(k_ab);
    setH_ab(h_ab);
    setK_bc(k_bc);
    setH_bc(h_bc);

    for (let x = 0; x <= width; x++) {
      const y = get_function_real_value(x, k_ab, h_ab, k_bc, h_bc);
      d.push(`${x === 0 ? 'M' : 'L'} ${x},${y}`);
    }
    path.setAttribute('d', d.join(' '));
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', '#f00');
    path.setAttribute('stroke-width', '5');
    svg.insertBefore(path, svg.firstChild);

    for (let x = 0; x < width; x += gridGap) {
      const line = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'line'
      );
      line.setAttribute('x1', x.toString());
      line.setAttribute('y1', '0');
      line.setAttribute('x2', x.toString());
      line.setAttribute('y2', height.toString());
      line.setAttribute('stroke', isDarkMode ? '#fff' : '#000');
      svg.insertBefore(line, svg.firstChild);
    }
    let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', (width - 1).toString());
    line.setAttribute('y1', '0');
    line.setAttribute('x2', (width - 1).toString());
    line.setAttribute('y2', height.toString());
    line.setAttribute('stroke', isDarkMode ? '#fff' : '#000');
    svg.insertBefore(line, svg.firstChild);

    for (let y = 0; y < height; y += gridGap) {
      const line = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'line'
      );
      line.setAttribute('x1', '0');
      line.setAttribute('y1', y.toString());
      line.setAttribute('x2', width.toString());
      line.setAttribute('y2', y.toString());
      line.setAttribute('stroke', isDarkMode ? '#fff' : '#000');
      svg.insertBefore(line, svg.firstChild);
    }
    line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', '0');
    line.setAttribute('y1', (height - 1).toString());
    line.setAttribute('x2', width.toString());
    line.setAttribute('y2', (height - 1).toString());
    line.setAttribute('stroke', isDarkMode ? '#fff' : '#000');
    svg.insertBefore(line, svg.firstChild);

    if (isFirst) {
      const arr = [startIdx];
      for (let i = 0; i < 10000; i++) {
        arr.push(
          arr[arr.length - 1] +
            stepSize * get_dfunction_value(arr[arr.length - 1])
        );
      }
      setArr(arr);
      setIsFirst(false);
    } else {
      setIdx(0);
      setIsAutoPlay(false);
    }
  }, [
    a_function_value,
    b_function_value,
    c_function_value,
    a,
    b,
    c,
    isDarkMode,
  ]);

  useEffect(() => {
    if (isFirst) setIsFirst(false);
    else {
      setIdx(0);
      setIsAutoPlay(false);
    }
  }, [startIdx]);

  useEffect(() => {
    const g_a = d3.select(gRef_a.current) as d3.Selection<
      SVGGElement,
      unknown,
      null,
      undefined
    >;
    const g_b = d3.select(gRef_b.current) as d3.Selection<
      SVGGElement,
      unknown,
      null,
      undefined
    >;
    const g_c = d3.select(gRef_c.current) as d3.Selection<
      SVGGElement,
      unknown,
      null,
      undefined
    >;
    const circle = d3.select(circleRef.current) as d3.Selection<
      SVGCircleElement,
      unknown,
      null,
      undefined
    >;

    const drag_a = (
      d3.drag() as d3.DragBehavior<SVGGElement, unknown, unknown>
    ).on('drag', function (e: { y: number; x: number }) {
      if (e.y >= 0 && e.y <= height) {
        setA_function_value(e.y);
      } else if (e.y < 0) {
        setA_function_value(0);
      } else if (e.y > height) {
        setA_function_value(height);
      }
      if (e.x >= 50 && e.x <= width / 3) {
        setA(e.x);
      } else if (e.x < 50) {
        setA(50);
      } else if (e.x > width / 3) {
        setA(width / 3);
      }
    });
    g_a.call(drag_a);
    const drag_b = (
      d3.drag() as d3.DragBehavior<SVGGElement, unknown, unknown>
    ).on('drag', function (e: { y: number; x: number }) {
      if (e.y >= 0 && e.y <= height) {
        setB_function_value(e.y);
      } else if (e.y < 0) {
        setB_function_value(0);
      } else if (e.y > height) {
        setB_function_value(height);
      }
      if (e.x >= width / 3 + 50 && e.x <= (width * 2) / 3 - 50) {
        setB(e.x);
      } else if (e.x < width / 3 + 50) {
        setB(width / 3 + 50);
      } else if (e.x > (width * 2) / 3 - 50) {
        setB((width * 2) / 3 - 50);
      }
    });
    g_b.call(drag_b);
    const drag_c = (
      d3.drag() as d3.DragBehavior<SVGGElement, unknown, unknown>
    ).on('drag', function (e: { y: number; x: number }) {
      if (e.y >= 0 && e.y <= height) {
        setC_function_value(e.y);
      } else if (e.y < 0) {
        setC_function_value(0);
      } else if (e.y > height) {
        setC_function_value(height);
      }
      if (e.x >= (width * 2) / 3 && e.x <= width - 50) {
        setC(e.x);
      } else if (e.x < (width * 2) / 3) {
        setC((width * 2) / 3);
      } else if (e.x > width - 50) {
        setC(width - 50);
      }
    });
    g_c.call(drag_c);
    const drag_circle = (
      d3.drag() as d3.DragBehavior<SVGCircleElement, unknown, unknown>
    ).on('drag', function (e: { x: number }) {
      if (e.x >= 0 && e.x <= width) {
        setStartIdx(parseInt(String(e.x)));
      } else if (e.x < 0) {
        setStartIdx(0);
      } else if (e.x > width) {
        setStartIdx(width);
      }
    });
    circle.call(drag_circle);
  }, []);

  return (
    <>
      <svg
        ref={svgRef}
        className='w-full h-full'
        viewBox='0 0 1600 1000'
        onClick={() => setIsAutoPlay((e) => !e)}
      >
        <g ref={gRef_a} cursor='grap'>
          <DragIcon x={a} y={a_function_value} />
        </g>
        <g ref={gRef_b} cursor='grap'>
          <DragIcon x={b} y={b_function_value} />
        </g>
        <g ref={gRef_c} cursor='grap'>
          <DragIcon x={c} y={c_function_value} />
        </g>
        <circle
          cursor='grap'
          ref={circleRef}
          cx={arr[idx]}
          cy={get_function_real_value(arr[idx], k_ab, h_ab, k_bc, h_bc)}
          r='25'
          fill='#B5ABDF'
        />
        {isAutoPlay ? (
          <PauseIcon x={50} y={950} isDarkMode={isDarkMode} />
        ) : (
          <PlayIcon x={50} y={950} isDarkMode={isDarkMode} />
        )}
      </svg>
      <div className='flex justify-center w-auto gap-8 mt-2 md:gap-16'>
        <div className='flex flex-col items-center w-40 gap-1'>
          <div className='flex flex-col w-full'>
            <p>time : {idx}</p>
            <input
              id='idx'
              type='range'
              min={0}
              max={stepSize === 40 ? 2 : stepSize === 85 ? 30 : 10000}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setIdx(Number(e.target.value));
                setIsAutoPlay(false);
              }}
              value={idx}
            />
          </div>
          <div className='flex flex-col w-full'>
            <p>start pos : {startIdx}</p>
            <input
              id='startIdx'
              type='range'
              min={0}
              max={1600}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setStartIdx(Number(e.target.value));
                setIdx(0);
                setIsAutoPlay(false);
              }}
              value={startIdx}
            />
          </div>
        </div>
        <div className='flex flex-col items-center w-40 gap-1'>
          <div className='flex flex-col w-full'>
            <p>step size : {stepSize}</p>
            <input
              id='stepSize'
              type='range'
              min={0.01}
              max={0.2}
              // max={200}
              step={0.001}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setStepSize(Number(e.target.value));
                setIdx(0);
                setIsAutoPlay(false);
              }}
              value={stepSize}
            />
          </div>
          <div className='flex items-center h-full gap-2'>
            <label htmlFor='isAutoPlay'>auto play :</label>
            <input
              id='isAutoPlay'
              type='checkbox'
              checked={isAutoPlay}
              onChange={({ target: { checked } }) => setIsAutoPlay(checked)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
