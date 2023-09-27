import MindMap from '@/components/MindMap';

import { Nodes } from '@/constant/nodeType';

export const nodes: Nodes = {
  프로그래밍: {
    value: '프로그래밍',
    x: 0,
    y: 0,
    link: '/paper/프로그래밍',
    edges: ['자료-구조', '../'],
    circleSize: 60,
    isFolder: true,
  },
  '자료-구조': {
    value: '자료 구조',
    x: 30,
    y: 100,
    link: '/paper/information-structure',
    edges: ['부동-소수점', '아스키코드,-유니코드', '선형구조', '비선형구조'],
    circleSize: 30,
  },
  '부동-소수점': {
    value: '부동 소수점',
    x: -40,
    y: 150,
    link: '/paper/floating-point',
    edges: [],
    circleSize: 20,
  },
  '아스키코드,-유니코드': {
    value: '아스키코드, 유니코드',
    x: 120,
    y: 50,
    link: '/paper/ascii-code',
    edges: [],
    circleSize: 20,
  },
  선형구조: {
    value: '선형구조',
    x: 120,
    y: 140,
    link: '',
    edges: ['stack'],
    circleSize: 20,
    isFolder: true,
  },
  비선형구조: {
    value: '비선형구조',
    x: 60,
    y: 190,
    link: '',
    edges: [],
    circleSize: 20,
    isFolder: true,
  },
  stack: {
    value: 'stack',
    x: 180,
    y: 100,
    link: '/paper/stack',
    edges: ['오감도 시제 4 해설 pdf'],
    circleSize: 20,
  },
  '오감도 시제 4 해설 pdf': {
    value: '오감도 시제 4 해설 pdf',
    x: 250,
    y: 130,
    link: '/files/paper/stack/오감도-시제-4.pdf',
    edges: [],
    circleSize: 15,
  },
  '../': {
    value: '../',
    x: -30,
    y: -80,
    link: '/mind-map/post',
    edges: [],
    circleSize: 32,
  },
};

export default function Programming() {
  return <MindMap nodes={nodes} />;
}
