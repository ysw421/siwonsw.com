import MindMap from '@/components/MindMap';

import { Nodes } from '@/constant/nodeType';

export const nodes: Nodes = {
  Post: {
    value: 'Post',
    x: 0,
    y: 0,
    link: '',
    edges: ['Math', 'My life', 'Programming', 'Quantum Cumputing'],
    circleSize: 60,
    isFolder: true,
  },
  Math: {
    value: 'Math',
    x: 120,
    y: 30,
    link: '/mind-map/math',
    edges: [],
    circleSize: 25,
  },
  'My life': {
    value: 'My life',
    x: -70,
    y: 80,
    link: '/mind-map/my-life',
    edges: [],
    circleSize: 20,
  },
  Programming: {
    value: 'Programming',
    x: 100,
    y: -80,
    link: '/mind-map/programming',
    edges: [],
    circleSize: 20,
  },
  'Quantum Cumputing': {
    value: 'Quantum Computing',
    x: -110,
    y: -60,
    link: '/mind-map/quantum-computing',
    edges: [],
    circleSize: 20,
  },
};

export default function Post() {
  return <MindMap nodes={nodes} />;
}
