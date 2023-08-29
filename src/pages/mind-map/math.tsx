export default function Test() {
  type Node = {
    value: string;
    x: number;
    y: number;
    link: string;
    edges: string[];
    circleSize: number;
    isFolder?: boolean;
  };

  const nodes: Record<string, Node> = {
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

  const canvasSize = { width: 1000, height: 800 };

  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='absolute top-0 left-0 h-full w-full'
      >
        {nodes &&
          Object.keys(nodes).map((key: string) =>
            nodes[key].edges.map((edge, edgeIndex) => {
              return (
                <g key={edgeIndex}>
                  <path
                    d={`M ${nodes[key].x + canvasSize.width / 2} ${
                      nodes[key].y + canvasSize.height / 2
                    } L ${nodes[edge].x + canvasSize.width / 2} ${
                      nodes[edge].y + canvasSize.height / 2
                    }`}
                    stroke='#818181'
                    strokeWidth='1.2'
                    fill='none'
                    style={{ transition: 'all 0.5s ease-in-out' }}
                  ></path>
                </g>
              );
            })
          )}
      </svg>
      <div className='h-full w-full'>
        {nodes &&
          Object.keys(nodes).map((key) => (
            <div
              key={key}
              style={{
                transform: `translate(${
                  nodes[key].x -
                  nodes[key].circleSize / 2 +
                  canvasSize.width / 2
                }px, ${
                  nodes[key].y -
                  (nodes[key].circleSize > 27
                    ? nodes[key].circleSize / 2
                    : 13.5) +
                  canvasSize.height / 2
                }px)`,
              }}
              className='absolute flex h-auto w-auto flex-row items-center justify-center gap-2 text-xl font-extralight'
            >
              <div
                style={{
                  width: `${nodes[key].circleSize}px`,
                  height: `${nodes[key].circleSize}px`,
                }}
                className='rounded-full bg-dark transition-all hover:rounded-[40%] dark:bg-light'
              ></div>
              <span className='whitespace-nowrap'>{nodes[key].value}</span>
            </div>
          ))}
      </div>
    </>
  );
}
