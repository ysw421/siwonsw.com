import { ChangeEvent, useEffect, useRef, useState } from 'react';

export default function GradientDescentSVG() {
  const width = 1600;
  const height = 1000;

  const svgRef = useRef<SVGSVGElement>(null);

  const [idx, setIdx] = useState<number>(0);
  const [startIdx, setStartIdx] = useState<number>(700);
  const [stepSize, setStepSize] = useState<number>(0.1);

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

  function get_function_value(x: number) {
    let y;
    if (x < a) y = g_a(x);
    else if (x >= a && x <= b) {
      y = k_ab * g_ab(x) + h_ab;
    } else if (x >= b && x <= c) {
      y = k_bc * g_bc(x) + h_bc;
    } else y = g_c(x);
    return y;
  }
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
  }, [stepSize, startIdx]);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    while (svg.children.length > 3) {
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
      const y = get_function_value(x);
      // let y;
      // if (x < a) y = g_a(x);
      // else if (x >= a && x <= b) {
      //   y = k_ab * g_ab(x) + h_ab;
      // } else if (x >= b && x <= c) {
      //   y = k_bc * g_bc(x) + h_bc;
      // } else y = g_c(x);
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
  }, [a_function_value, b_function_value, c_function_value]);

  return (
    <>
      <svg ref={svgRef} className='w-full h-full' viewBox='0 0 1600 1000'>
        <circle
          cx={arr[idx]}
          cy={get_function_value(arr[idx])}
          r='25'
          fill='#B5ABDF'
        />
      </svg>
      <div className='flex gap-2 mt-2'>
        <label htmlFor='idx'>time :</label>
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
        <label htmlFor='startIdx'>start position :</label>
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
        <label htmlFor='stepSize'>step size :</label>
        <input
          id='stepSize'
          type='range'
          min={0.01}
          max={0.1}
          step={0.001}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setStepSize(Number(e.target.value));
            setIdx(0);
            setIsAutoPlay(false);
          }}
          value={stepSize}
        />
        <label htmlFor='isAutoPlay'>auto play :</label>
        <input
          id='isAutoPlay'
          type='checkbox'
          checked={isAutoPlay}
          onChange={({ target: { checked } }) => {
            setIsAutoPlay(checked);
            console.log(checked);
          }}
        />
      </div>
    </>
  );
}
