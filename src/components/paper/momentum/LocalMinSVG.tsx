import * as d3 from 'd3';
import { useEffect, useRef, useState } from 'react';

import { DragIcon } from '@/components/paper/momentum/Icons';

export default function LocalMinSVG() {
  const width = 1600;
  const height = 1000;

  const svgRef = useRef<SVGSVGElement>(null);
  const gRef_a = useRef<SVGGElement>(null);
  const gRef_b = useRef<SVGGElement>(null);
  const gRef_c = useRef<SVGGElement>(null);
  // SVGSVGElement

  const [a, setA] = useState<number>(width / 4);
  const [b, setB] = useState<number>(width / 2);
  const [c, setC] = useState<number>((width * 3) / 4);
  const [a_function_value, setA_function_value] = useState<number>(500);
  const [b_function_value, setB_function_value] = useState<number>(200);
  const [c_function_value, setC_function_value] = useState<number>(700);

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
    // const a = width / 4;
    // const b = width / 2;
    // const c = (width * 3) / 4;

    // setA(a);
    // setB(b);
    // setC(c);

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
        (-((x - c) ** 2) * c_function_value) / (width - c) ** 2 +
        c_function_value
      );
    }
    const k_ab = (a_function_value - b_function_value) / (g_ab(a) - g_ab(b));
    const h_ab = a_function_value - k_ab * g_ab(a);
    const k_bc = (b_function_value - c_function_value) / (g_bc(b) - g_bc(c));
    const h_bc = b_function_value - k_bc * g_bc(b);
    for (let x = 0; x <= width; x++) {
      let y;
      if (x < a) y = g_a(x);
      else if (x >= a && x <= b) {
        y = k_ab * g_ab(x) + h_ab;
      } else if (x >= b && x <= c) {
        y = k_bc * g_bc(x) + h_bc;
      } else y = g_c(x);
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
  }, [a_function_value, b_function_value, c_function_value, a, b, c]);

  useEffect(() => {
    // const svg = d3.select(svgRef.current);
    // const g_a = d3.select(gRef_a.current);
    // const g_b = d3.select(gRef_b.current);
    // const g_c = d3.select(gRef_c.current);
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

    // if (g_a.empty() || g_b.empty() || g_c.empty()) return;

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
  }, []);

  // <text
  //   x='30'
  //   y='90'
  //   fill='#ED6E46'
  //   font-size='100'
  //   font-family="'Leckerli One', cursive"
  //   text-anchor='middle'
  // >
  //   evening
  // </text>;
  return (
    <svg ref={svgRef} className='w-full h-full' viewBox='0 0 1600 1000'>
      <g ref={gRef_a}>
        <DragIcon x={a} y={a_function_value} />
        {a_function_value > b_function_value && (
          <text
            x={a}
            y={a_function_value + 60}
            fontSize='40'
            textAnchor='middle'
          >
            {a_function_value > c_function_value
              ? 'global minimum'
              : 'local minimum'}
          </text>
        )}
      </g>
      <g ref={gRef_b}>
        <DragIcon x={b} y={b_function_value} />
        {b_function_value > a_function_value &&
          b_function_value > c_function_value && (
            <>
              <text
                x={b}
                y={b_function_value + 60}
                fontSize='40'
                textAnchor='middle'
              >
                global minimum
              </text>
            </>
          )}
      </g>
      <g ref={gRef_c}>
        <DragIcon x={c} y={c_function_value} />
        {c_function_value > b_function_value && (
          <text
            x={c}
            y={c_function_value + 60}
            fontSize='40'
            textAnchor='middle'
          >
            {c_function_value > a_function_value
              ? 'global minimum'
              : 'local minimum'}
          </text>
        )}
      </g>
    </svg>
  );
}
