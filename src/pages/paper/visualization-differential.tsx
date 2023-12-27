import { useEffect, useRef, useState } from 'react';

import Paper from '@/components/Paper';

export default function VisualizationDifferential() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedXCordinate, setSelectedXCordinate] = useState<number>(10);

  useEffect(() => {
    function poly1(x: number) {
      return x ** 2 - 20;
    }
    function poly2(x: number) {
      return x ** 2 + 30 * x + 30;
    }

    const svg = svgRef.current;
    if (!svg) return;
    const width = 1600;
    const height = 1000;
    const gridGap = 100;
    const isDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;

    // Grid
    for (let x = 0; x <= width; x += gridGap) {
      const line = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'line'
      );
      line.setAttribute('x1', x.toString());
      line.setAttribute('y1', '0');
      line.setAttribute('x2', x.toString());
      line.setAttribute('y2', height.toString());
      line.setAttribute('stroke', isDarkMode ? '#fff5' : '#000');
      svg.insertBefore(line, svg.firstChild);
    }

    for (let y = 0; y <= height; y += gridGap) {
      const line = document.createElementNS(
        'http://www.w3.org/2000/svg',
        'line'
      );
      line.setAttribute('x1', '0');
      line.setAttribute('y1', y.toString());
      line.setAttribute('x2', width.toString());
      line.setAttribute('y2', y.toString());
      line.setAttribute('stroke', isDarkMode ? '#fff5' : '#000');
      svg.insertBefore(line, svg.firstChild);
    }
    // Grid --------------------------------------------------------------------

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const d = [];
    for (let x = 0; x <= width; x++) {
      const y = -poly1((x - width / 2) / 10) + height / 2;
      d.push(`${x === 0 ? 'M' : 'L'} ${x},${y}`);
    }
    path.setAttribute('d', d.join(' '));
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', '#f00');
    path.setAttribute('stroke-width', '2');
    svg.insertBefore(path, svg.firstChild);

    const path2 = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'path'
    );
    const d2 = [];
    for (let x = 0; x <= width; x++) {
      const y = -poly2((x - width / 2) / 10) + height / 2;
      d2.push(`${x === 0 ? 'M' : 'L'} ${x},${y}`);
    }
    path2.setAttribute('d', d2.join(' '));
    path2.setAttribute('fill', 'none');
    path2.setAttribute('stroke', '#0f0');
    path2.setAttribute('stroke-width', '2');
    svg.insertBefore(path2, svg.firstChild);

    const path3 = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'circle'
    );
    path3.setAttribute('cx', `${selectedXCordinate * 10 + width / 2}`);
    path3.setAttribute('cy', `${-poly2(selectedXCordinate) + height / 2}`);
    path3.setAttribute('r', '10');
    path3.setAttribute('fill', '#00f');
    svg.insertBefore(path3, svg.firstChild);
  }, []);

  return (
    <Paper title='Visualization - differential'>
      <div className='w-4/5 m-auto my-8 aspect-video'>
        <svg
          ref={svgRef}
          className='w-full h-full'
          viewBox='0 0 1600 1000'
        ></svg>
      </div>
      <p>y = 빨(초(x))</p>
    </Paper>
  );
}
