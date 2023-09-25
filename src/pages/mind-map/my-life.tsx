import MindMap from '@/components/MindMap';

import { Nodes } from '@/constant/nodeType';

const nodes: Nodes = {
  '나의 일상': {
    value: '나의 일상',
    x: 0,
    y: 0,
    link: '/paper/나의-일상',
    edges: ['디미고', '영화', '../'],
    circleSize: 60,
    isFolder: true,
  },
  디미고: {
    value: '디미고',
    x: 30,
    y: 100,
    link: '/paper/dimigo',
    edges: ['2학년 1, 2일', '프레직-수업-진행'],
    circleSize: 30,
  },
  영화: {
    value: '영화',
    x: -70,
    y: -60,
    link: '/paper/movie',
    edges: ['타이타닉'],
    circleSize: 25,
  },
  타이타닉: {
    value: '타이타닉',
    x: -20,
    y: -120,
    link: '/paper/movie-titanic',
    edges: [],
    circleSize: 20,
  },
  '2학년 1, 2일': {
    value: '2학년 1, 2일',
    x: -10,
    y: 160,
    link: '/paper/first-day-2-years',
    edges: [],
    circleSize: 20,
  },
  '프레직-수업-진행': {
    value: '프레직 수업 진행',
    x: 90,
    y: 60,
    link: '/paper/my-first-class-in-fregic',
    edges: [],
    circleSize: 20,
  },
  '../': {
    value: '../',
    x: -60,
    y: 40,
    link: '/mind-map/post',
    edges: [],
    circleSize: 32,
  },
};

export default function MyLife() {
  return <MindMap nodes={nodes} />;
}
