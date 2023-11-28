import * as d3 from 'd3';
import { ChangeEvent, useEffect, useRef, useState } from 'react';

function DragIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x - 25}, ${y - 25})`}>
      <svg
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='25' cy='25' r='25' fill='#B5ABDF' />
        <circle cx='25' cy='25' r='23.25' stroke='#20193B' strokeWidth='1.5' />
        <path
          d='M22.075 41.5C21.325 41.5 20.625 41.3313 19.975 40.9938C19.325 40.6563 18.7875 40.175 18.3625 39.55L8.80005 25.5625L9.70005 24.7C10.175 24.225 10.7375 23.95 11.3875 23.875C12.0375 23.8 12.625 23.95 13.15 24.325L17.5 27.3625V13C17.5 12.575 17.6438 12.2188 17.9313 11.9313C18.2188 11.6438 18.575 11.5 19 11.5C19.425 11.5 19.7813 11.6438 20.0688 11.9313C20.3563 12.2188 20.5 12.575 20.5 13V33.1375L14.95 29.2375L20.8375 37.825C20.9625 38.025 21.1375 38.1875 21.3625 38.3125C21.5875 38.4375 21.825 38.5 22.075 38.5H32.5C33.325 38.5 34.0313 38.2063 34.6188 37.6188C35.2063 37.0313 35.5 36.325 35.5 35.5V14.5C35.5 14.075 35.6438 13.7188 35.9313 13.4313C36.2188 13.1438 36.575 13 37 13C37.425 13 37.7813 13.1438 38.0688 13.4313C38.3563 13.7188 38.5001 14.075 38.5001 14.5V35.5C38.5001 37.15 37.9126 38.5625 36.7375 39.7375C35.5625 40.9125 34.15 41.5 32.5 41.5H22.075ZM23.5 25V10C23.5 9.575 23.6438 9.21875 23.9313 8.93125C24.2188 8.64375 24.575 8.5 25 8.5C25.425 8.5 25.7813 8.64375 26.0688 8.93125C26.3563 9.21875 26.5 9.575 26.5 10V25H23.5ZM29.5 25V11.5C29.5 11.075 29.6438 10.7188 29.9313 10.4313C30.2188 10.1438 30.575 10 31 10C31.425 10 31.7813 10.1438 32.0688 10.4313C32.3563 10.7188 32.5 11.075 32.5 11.5V25H29.5Z'
          fill='black'
        />
      </svg>
    </g>
  );
}

export default function GradientDescentSVG() {
  const width = 1600;
  const height = 1000;

  const svgRef = useRef<SVGSVGElement>(null);
  const gRef_a = useRef<SVGGElement>(null);
  const gRef_b = useRef<SVGGElement>(null);
  const gRef_c = useRef<SVGGElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);

  const [idx, setIdx] = useState<number>(0);
  const [startIdx, setStartIdx] = useState<number>(700);
  const [stepSize, setStepSize] = useState<number>(0.05);

  const [a, setA] = useState<number>(width / 4);
  const [b, setB] = useState<number>(width / 2);
  const [c, setC] = useState<number>((width * 3) / 4);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);

  const [a_function_value, setA_function_value] = useState<number>(500);
  const [b_function_value, setB_function_value] = useState<number>(200);
  const [c_function_value, setC_function_value] = useState<number>(700);

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
    const changeIdx = setInterval(() => {
      if (!isAutoPlay) return;
      setIdx((e: number) => (e >= 10000 ? 0 : e + 50));
    }, 10);
    return () => clearInterval(changeIdx);
  }, [isAutoPlay]);

  useEffect(() => {
    const arr = [startIdx];
    for (let i = 0; i < 10000; i++) {
      arr.push(
        arr[arr.length - 1] +
          stepSize * get_dfunction_value(arr[arr.length - 1])
      );
    }
    setArr(arr);
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
    while (svg.children.length > 4) {
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
      line.setAttribute('stroke', '#000');
      svg.insertBefore(line, svg.firstChild);
    }
    let line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', (width - 1).toString());
    line.setAttribute('y1', '0');
    line.setAttribute('x2', (width - 1).toString());
    line.setAttribute('y2', height.toString());
    line.setAttribute('stroke', '#000');
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
      line.setAttribute('stroke', '#000');
      svg.insertBefore(line, svg.firstChild);
    }
    line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', '0');
    line.setAttribute('y1', (height - 1).toString());
    line.setAttribute('x2', width.toString());
    line.setAttribute('y2', (height - 1).toString());
    line.setAttribute('stroke', '#000');
    svg.insertBefore(line, svg.firstChild);

    if (isFirst) setIsFirst(false);
    else {
      setIdx(0);
      setIsAutoPlay(false);
    }
  }, [a_function_value, b_function_value, c_function_value, a, b, c]);

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
      <svg ref={svgRef} className='w-full h-full' viewBox='0 0 1600 1000'>
        <g ref={gRef_a}>
          <DragIcon x={a} y={a_function_value} />
        </g>
        <g ref={gRef_b}>
          <DragIcon x={b} y={b_function_value} />
        </g>
        <g ref={gRef_c}>
          <DragIcon x={c} y={c_function_value} />
        </g>
        <circle
          ref={circleRef}
          cx={arr[idx]}
          cy={get_function_real_value(arr[idx], k_ab, h_ab, k_bc, h_bc)}
          r='25'
          fill='#B5ABDF'
        />
      </svg>
      <div className='flex justify-center w-auto gap-8 mt-2 md:gap-16'>
        <div className='flex flex-col items-center gap-1'>
          <div>
            <p>time : {idx}</p>
            <input
              id='idx'
              type='range'
              min={0}
              max={10000}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setIdx(Number(e.target.value));
                setIsAutoPlay(false);
              }}
              value={idx}
            />
          </div>
          <div>
            <p>start position : {startIdx}</p>
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
        <div className='flex flex-col items-center gap-1'>
          <div>
            <p>step size : {stepSize}</p>
            <input
              id='stepSize'
              type='range'
              min={0.01}
              max={0.2}
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
