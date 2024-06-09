import MindMap from '@/components/MindMap';

import { Nodes } from '@/constant/nodeType';

const nodes: Nodes = {
  main: {
    value: '공업일반 1인 1프로젝트: Pintos',
    x: 0,
    y: 0,
    link: '/paper/Math',
    edges: ['../'],
    circleSize: 60,
    isFolder: true,
  },
  '../': {
    value: '../',
    x: -100,
    y: 20,
    link: '/mind-map/my-life',
    edges: [],
    circleSize: 32,
  },
  introduce: {
    value: '프로젝트 시작',
    x: 0,
    y: -156,
    link: '/paper/socp-1',
    edges: ['main'],
    circleSize: 40,
  },
  step2: {
    value: '분석',
    x: 0,
    y: 156,
    link: '/paper/socp-2',
    edges: ['main'],
    circleSize: 40,
  },
  step3: {
    value: '결과',
    x: -70,
    y: 106,
    link: '/paper/socp-3',
    edges: ['main'],
    circleSize: 40,
  },
  '보고서.pdf': {
    value: '보고서.pdf',
    x: 100,
    y: -110,
    link: '/files/paper/1인1프로젝트-계획서&결과보고서_2024년1학기(IT).pdf',
    edges: ['main'],
    circleSize: 40,
    isFolder: false,
  },
  code: {
    value: 'code',
    x: 100,
    y: 110,
    link: '/files/paper/SOCP-solver.py',
    edges: ['main'],
    circleSize: 40,
    isFolder: false,
  },
};

export default function Math() {
  return <MindMap nodes={nodes} />;
}
