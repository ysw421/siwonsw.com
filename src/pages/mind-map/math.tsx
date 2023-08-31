import { Nodes } from '@/lib/nodeType';

import MindMap from '@/components/MindMap';

export default function Test() {
  const nodes: Nodes = {
    Math: {
      value: 'Math',
      x: 0,
      y: 0,
      link: '/paper/Math',
      edges: ['선형 대수학'],
      circleSize: 60,
    },
    '선형 대수학': {
      value: '선형 대수학',
      x: -70,
      y: -50,
      link: '/paper/선형-대수학',
      edges: ['행렬'],
      circleSize: 20,
    },
    행렬: {
      value: '행렬',
      x: -20,
      y: -110,
      link: '/paper/행렬',
      edges: ['가우스 소거법', '행렬식'],
      circleSize: 40,
      isFolder: true,
    },
    '가우스 소거법': {
      value: '가우스 소거법',
      x: -80,
      y: -180,
      link: '/paper/가우스-소거법',
      edges: [],
      circleSize: 30,
    },
    행렬식: {
      value: '행렬식',
      x: 10,
      y: -210,
      link: '/paper/행렬식',
      edges: [],
      circleSize: 28,
    },
  };

  return <MindMap nodes={nodes} />;
}
