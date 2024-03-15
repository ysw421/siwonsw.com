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
    y: -206,
    link: '/paper/Math',
    edges: ['main'],
    circleSize: 40,
    isFolder: true,
  },
  '프로젝트 계획': {
    value: '프로젝트 계획',
    x: 90,
    y: -250,
    link: '/paper/1person1project-plan',
    edges: ['introduce'],
    circleSize: 30,
    isFolder: false,
  },
  'Pintos 설치 시행 착오': {
    value: 'Pintos 설치 시행 착오',
    x: 50,
    y: -300,
    link: '/paper/pintos-install',
    edges: ['introduce'],
    circleSize: 15,
    isFolder: false,
  },
  '프로젝트 계획.pdf': {
    value: '프로젝트 계획.pdf',
    x: 200,
    y: -210,
    link: '/files/paper/1인1프로젝트-계획서_2024년1학기(IT).pdf',
    edges: ['프로젝트 계획'],
    circleSize: 10,
    isFolder: false,
  },
  Project1: {
    value: 'Project1: Threads',
    x: -195.918,
    y: -63.6575,
    link: '/paper/Math',
    edges: ['main'],
    circleSize: 40,
    isFolder: true,
  },
  Project2: {
    value: 'Project2',
    x: -121.084,
    y: 166.658,
    link: '/paper/Math',
    edges: ['main'],
    circleSize: 40,
    isFolder: true,
  },
  Project3: {
    value: 'Project3',
    x: 121.084,
    y: 166.658,
    link: '/paper/Math',
    edges: ['main'],
    circleSize: 40,
    isFolder: true,
  },
  Project4: {
    value: 'Project4',
    x: 195.918,
    y: -63.6575,
    link: '/paper/Math',
    edges: ['main'],
    circleSize: 40,
    isFolder: true,
  },
};

export default function Math() {
  return <MindMap nodes={nodes} />;
}
