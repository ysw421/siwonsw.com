import { useEffect, useState } from 'react';

import {
  BezierArrow,
  DelayBezierArrow,
  Flow,
  Node,
  Parameter,
} from '@/components/paper/physical-system-dynamic/GraphUtilities';

export default function SystemDynamicSVG({
  length,
  weightY,
  setWeightY,
}: {
  length: number;
  weightY: number;
  setWeightY: React.Dispatch<React.SetStateAction<number>>;
}) {
  // const [cartX, setCartX] = useState<number>(0);
  // const [weightY, setWeightY] = useState<number>(length);
  const [cartSpeed, setCartSpeed] = useState<number>(0);

  interface Node {
    name: string;
    x: number;
    y: number;
    value: number;
    isFlow?: boolean;
    rate?: number;
    parameter?: boolean;
  }

  interface Link {
    source: string;
    target: string;
    isDelay?: boolean;
  }

  const nodes: { [key: string]: Node } = {};
  nodes['수레 질량'] = {
    name: 'C: 질량',
    x: 120,
    y: 755,
    value: 1,
    parameter: true,
  };
  nodes['추 질량'] = {
    name: 'C: 질량',
    x: 1480,
    y: 755,
    value: 2,
    parameter: true,
  };
  nodes['전체 질량'] = {
    name: 'C: 전체 질량',
    x: 600,
    y: 1150,
    value: nodes['수레 질량'].value + nodes['추 질량'].value,
    parameter: true,
  };
  nodes['중력 가속도'] = {
    name: 'C: 중력 가속도',
    x: 1050,
    y: 1250,
    value: 9.8,
    parameter: true,
    // value: 10,
  };
  nodes['중력'] = {
    name: '중력',
    x: 1300,
    y: 1150,
    value: nodes['추 질량'].value * nodes['중력 가속도'].value,
  };
  nodes['가속도'] = {
    name: '가속도',
    x: 1000,
    y: 950,
    value:
      nodes['중력'].value / (nodes['추 질량'].value + nodes['수레 질량'].value),
  };
  nodes['속도'] = {
    name: '속도',
    x: 750,
    y: 1020,
    value: cartSpeed,
    isFlow: true,
    rate: 0.25,
  };
  nodes['장력'] = {
    name: '장력',
    x: 300,
    y: 1000,
    value: nodes['수레 질량'].value * nodes['가속도'].value,
  };
  // nodes['수레 x좌표'] = {
  //   name: '좌표(x)',
  //   x: 120,
  //   y: 280,
  //   value: cartX,
  //   isFlow: true,
  //   rate: cartX / length,
  // };
  nodes['수레 x좌표'] = {
    name: '좌표(x)',
    x: 120,
    y: 280,
    value: weightY,
    isFlow: true,
    rate: weightY / length,
  };
  const [deltaWeightY, setDeltaWeightY] = useState<number>(
    nodes['가속도'].value / 2
  );
  nodes['수레 x좌표 변화량'] = {
    name: 'FLOW',
    x: 300,
    y: 170,
    value: deltaWeightY,
  };
  nodes['추 Y좌표'] = {
    name: '좌표(Y)',
    x: 900,
    y: 280,
    value: weightY,
    isFlow: true,
    rate: weightY / length,
  };
  nodes['추 Y좌표 변화량'] = {
    name: 'FLOW',
    x: 1080,
    y: 170,
    value: deltaWeightY,
  };
  nodes['추 운동 에너지'] = {
    name: '운동 에너지',
    x: 1000,
    y: 600,
    value: (nodes['추 질량'].value * nodes['속도'].value ** 2) / 2,
    isFlow: true,
    rate:
      (nodes['추 질량'].value * nodes['속도'].value ** 2) /
      (2 * length * nodes['중력 가속도'].value * nodes['추 질량'].value),
  };
  nodes['추 위치 에너지'] = {
    name: '위치 에너지',
    x: 1400,
    y: 600,
    value:
      nodes['추 질량'].value *
      nodes['중력 가속도'].value *
      nodes['추 Y좌표'].value,
    isFlow: true,
    rate:
      (nodes['추 질량'].value *
        nodes['중력 가속도'].value *
        nodes['추 Y좌표'].value) /
      (length * nodes['중력 가속도'].value * nodes['추 질량'].value),
  };
  nodes['수레 운동 에너지'] = {
    name: '운동 에너지',
    x: 200,
    y: 600,
    value: (nodes['수레 질량'].value * nodes['속도'].value ** 2) / 2,
    isFlow: true,
    rate:
      (nodes['수레 질량'].value * nodes['속도'].value ** 2) /
      (2 * length * nodes['중력 가속도'].value * nodes['추 질량'].value),
  };
  nodes['수레 위치 에너지'] = {
    name: '위치 에너지',
    x: 600,
    y: 600,
    value: 0,
    isFlow: true,
    rate: 0,
  };
  // const [nodes, setnodes] = useState<{ [key: string]: Node }>(nodes);

  const links: Link[] = [
    { source: '수레 질량', target: '전체 질량' },
    { source: '추 질량', target: '전체 질량' },
    { source: '추 질량', target: '중력' },
    { source: '중력 가속도', target: '중력' },
    { source: '중력', target: '가속도' },
    { source: '수레 질량', target: '가속도' },
    { source: '가속도', target: '장력' },
    { source: '전체 질량', target: '장력' },
    { source: '가속도', target: '속도', isDelay: true },
    { source: '수레 x좌표 변화량', target: '수레 x좌표', isDelay: true },
    { source: '가속도', target: '수레 x좌표 변화량', isDelay: true },
    { source: '추 Y좌표 변화량', target: '추 Y좌표', isDelay: true },
    { source: '가속도', target: '추 Y좌표 변화량', isDelay: true },
    { source: '속도', target: '추 운동 에너지' },
    { source: '추 질량', target: '추 운동 에너지' },
    { source: '추 Y좌표', target: '추 위치 에너지' },
    { source: '추 질량', target: '추 위치 에너지' },
    { source: '중력 가속도', target: '추 위치 에너지' },
    { source: '중력 가속도', target: '수레 위치 에너지' },
    { source: '수레 질량', target: '수레 위치 에너지' },
    { source: '수레 질량', target: '수레 운동 에너지' },
    { source: '속도', target: '수레 운동 에너지' },
  ];

  const frame = 0.05; // num per second

  useEffect(() => {
    if (weightY < 1) return;
    const changeIdx = setInterval(() => {
      const newSpeed = cartSpeed + nodes['가속도'].value * frame;
      setCartSpeed((prev) => prev + nodes['가속도'].value * frame);
      const newDeltaWeightY = deltaWeightY + nodes['가속도'].value * frame;
      setDeltaWeightY((prev) => prev + nodes['가속도'].value * frame);
      const newWeightY = weightY - nodes['추 Y좌표 변화량'].value * frame;
      setWeightY((prev) => prev - nodes['추 Y좌표 변화량'].value * frame);
      // const newCartX = cartX + nodes['속도'].value;
      // setCartX((prev) => prev + nodes['속도'].value);
      nodes['속도'].value = newSpeed;
      // nodes['수레 x좌표'].value = newCartX;
      nodes['수레 x좌표 변화량'].value = newDeltaWeightY;
      nodes['추 Y좌표'].value = newWeightY;
      return;
    }, 100 * frame);
    return () => clearInterval(changeIdx);
  }, [nodes]);

  return (
    <svg className='w-full h-full' viewBox='0 0 1600 1600'>
      <g>
        <rect x='50' y='50' width='725' height='55' fill='#7b7b7b' />
        <rect
          x='50'
          y='50'
          width='725'
          height='800'
          fill='none'
          strokeWidth={1}
          stroke='#dddddd'
          strokeDasharray='30,30'
        />
        <text x={60} y={90} fontSize='40' textAnchor='left' fill='#dddddd'>
          수레
        </text>
      </g>
      <g>
        <rect x='825' y='50' width='725' height='55' fill='#7b7b7b' />
        <rect
          x='825'
          y='50'
          width='725'
          height='800'
          fill='none'
          strokeWidth={1}
          stroke='#dddddd'
          strokeDasharray='30,30'
        />
        <text x={835} y={90} fontSize='40' textAnchor='left' fill='#dddddd'>
          추
        </text>
      </g>

      {links.map((link) =>
        link.isDelay ? (
          <DelayBezierArrow
            key={`${link.source}-${link.target}`}
            x1={nodes[link.source].x}
            y1={
              nodes[link.source].isFlow
                ? nodes[link.source].y - 150 * (nodes[link.source].rate || 0)
                : nodes[link.source].y
            }
            x2={nodes[link.target].x}
            y2={
              nodes[link.target].isFlow
                ? nodes[link.target].y - 150 * (nodes[link.target].rate || 0)
                : nodes[link.target].y
            }
          ></DelayBezierArrow>
        ) : (
          <BezierArrow
            key={`${link.source}-${link.target}`}
            x1={nodes[link.source].x}
            y1={
              nodes[link.source].isFlow
                ? nodes[link.source].y - 150 * (nodes[link.source].rate || 0)
                : nodes[link.source].y
            }
            x2={nodes[link.target].x}
            y2={
              nodes[link.target].isFlow
                ? nodes[link.target].y - 150 * (nodes[link.target].rate || 0)
                : nodes[link.target].y
            }
          />
        )
      )}

      {Object.keys(nodes).map((key) =>
        nodes[key].isFlow ? (
          <Flow
            key={key}
            x={nodes[key].x}
            y={nodes[key].y}
            text={nodes[key].name}
            value={nodes[key].value}
            rate={nodes[key].rate}
          />
        ) : nodes[key].parameter ? (
          <Parameter
            key={key}
            x={nodes[key].x}
            y={nodes[key].y}
            text={nodes[key].name}
            value={nodes[key].value}
          />
        ) : (
          <Node
            key={key}
            x={nodes[key].x}
            y={nodes[key].y}
            text={nodes[key].name}
            value={nodes[key].value}
          />
        )
      )}
    </svg>
  );
}
