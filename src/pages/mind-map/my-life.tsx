import MindMap from '@/components/MindMap';

import { Nodes } from '@/constant/nodeType';

const nodes: Nodes = {
  '나의 일상': {
    value: '나의 일상',
    x: 0,
    y: 0,
    link: '/paper/나의-일상',
    edges: ['디미고', '../', '문화'],
    circleSize: 60,
    isFolder: true,
  },
  디미고: {
    value: '디미고',
    x: 30,
    y: 100,
    link: '/paper/dimigo',
    edges: ['2학년 1, 2일', 'AI Club 🌿Fregic'],
    circleSize: 30,
  },
  문화: {
    value: '문화',
    x: -70,
    y: -60,
    link: '/paper/나의-일상',
    edges: ['영화', '뮤지컬'],
    circleSize: 30,
    isFolder: true,
  },
  영화: {
    value: '영화',
    x: -110,
    y: -100,
    link: '/paper/movie',
    edges: ['타이타닉'],
    circleSize: 25,
  },
  타이타닉: {
    value: '타이타닉',
    x: -130,
    y: -150,
    link: '/paper/movie-titanic',
    edges: [],
    circleSize: 20,
  },
  뮤지컬: {
    value: '뮤지컬',
    x: 10,
    y: -95,
    link: '/paper/musical',
    edges: [],
    circleSize: 25,
  },
  '2학년 1, 2일': {
    value: '2학년 1, 2일',
    x: 120,
    y: 150,
    link: '/paper/first-day-2-years',
    edges: [],
    circleSize: 20,
  },
  'AI Club 🌿Fregic': {
    value: 'AI Club 🌿Fregic',
    x: 90,
    y: 60,
    link: '/paper/my-first-class-in-fregic',
    edges: ['Linear Regression PDF 자료'],
    circleSize: 20,
  },
  'Linear Regression PDF 자료': {
    value: 'Linear Regression PDF 자료',
    x: 170,
    y: 15,
    link: '/files/paper/my-first-class-in-fregic/LinearRegressionPDF.pdf',
    edges: [],
    circleSize: 15,
  },
  '../': {
    value: '../',
    x: -60,
    y: 50,
    link: '/mind-map/post',
    edges: [],
    circleSize: 32,
  },
  학업: {
    value: '학업',
    x: -70,
    y: 150,
    link: '/paper/나의-일상',
    edges: ['디미고'],
    circleSize: 40,
    isFolder: true,
  },
  '공업일반 1인 1프로젝트': {
    value: '공업일반 1인 1프로젝트: Pintos',
    x: 0,
    y: 230,
    link: '/mind-map/1-person-1-project',
    edges: ['학업'],
    circleSize: 30,
  },
};

export default function MyLife() {
  return <MindMap nodes={nodes} />;
}
