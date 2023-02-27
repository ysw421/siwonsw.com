export const mainNodes = {
  'My Blog': {
    value: 'My Blog',
    x: 0,
    y: 0,
    link: '',
    edges: ['Machine Learning'],
    circleSize: 60,
  },
  'Machine Learning': {
    value: 'Machine Learning',
    x: -80,
    y: -70,
    link: '/mind-map/machine-learning',
    edges: [],
    circleSize: 20,
  },
};

export const mindMapNodes = {
  'machine-learning': {
    'Machine Learning': {
      value: 'Machine Learning',
      x: 0,
      y: 0,
      link: '/paper/Machine-Learning',
      edges: ['b', 'c'],
      circleSize: 60,
    },
    b: {
      value: '한글123English',
      x: -70,
      y: -50,
      link: '/paper/b',
      edges: ['d', 'e'],
      circleSize: 20,
    },
    c: {
      value: '3',
      x: 60,
      y: 100,
      link: '/paper/c',
      edges: [],
      circleSize: 20,
    },
    d: {
      value: '4',
      x: -140,
      y: -70,
      link: '/paper/d',
      edges: [],
      circleSize: 27,
    },
    e: {
      value: '5',
      x: -20,
      y: -120,
      link: '/paper/e',
      edges: [],
      circleSize: 20,
    },
  },
};
