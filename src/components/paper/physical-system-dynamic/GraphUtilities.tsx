export function Node({
  x,
  y,
  text,
  value,
}: {
  x: number;
  y: number;
  text: string;
  value: number;
}) {
  const radius = 40;

  return (
    <g transform={`translate(${x - radius}, ${y - radius})`}>
      <svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx={radius} cy={radius} r={radius} fill='#2a2c33' />
        <circle
          cx={radius}
          cy={radius}
          r={radius - 2}
          stroke='#527dff'
          strokeWidth='1.5'
        />
      </svg>
      <text
        x={radius}
        y={radius * 2 + 30}
        fontSize='30'
        textAnchor='middle'
        fill='#47ae24'
      >
        {text}
      </text>
      <text
        x={radius}
        y={radius + 10}
        fontSize='20'
        textAnchor='middle'
        fill='#25e9f8'
      >
        {value.toFixed(2)}
      </text>
    </g>
  );
}

export function Parameter({
  x,
  y,
  text,
  value,
}: {
  x: number;
  y: number;
  text: string;
  value: number;
}) {
  const radius = 40;
  const largeArcFlag = 0;
  const sweepFlag = 1;
  const angle = 60 * (Math.PI / 180);

  const cx = radius + radius * Math.cos(angle);
  const cy = radius + radius * Math.sin(angle);

  return (
    <g transform={`translate(${x - radius}, ${y - radius})`}>
      <svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx={radius} cy={radius} r={radius} fill='#2a2c33' />
        <circle
          cx={radius}
          cy={radius}
          r={radius - 2}
          stroke='#527dff'
          strokeWidth='1.5'
        />
        <path
          d={`M ${radius},${radius} L ${radius},${
            radius * 2
          } A ${radius},${radius} 0 ${largeArcFlag},${sweepFlag} ${cx},${cy} z`}
          fill='#527dff'
          stroke='#527dff'
          strokeWidth='1.5'
        />
      </svg>
      <text
        x={radius}
        y={radius * 2 + 30}
        fontSize='30'
        textAnchor='middle'
        fill='#47ae24'
      >
        {text}
      </text>
      <text
        x={radius}
        y={radius + 10}
        fontSize='20'
        textAnchor='middle'
        fill='#25e9f8'
      >
        {value.toFixed(2)}
      </text>
    </g>
  );
}

export function Arrow({
  x1,
  y1,
  x2,
  y2,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const angle = Math.atan2(dy, dx);

  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke='#527dff'
        strokeWidth='1.5'
      />
      <polygon
        points='-10,-5 0,0 -10,5'
        fill='#527dff'
        transform={`translate(${x2}, ${y2}) rotate(${(angle * 180) / Math.PI})`}
      />
    </g>
  );
}

export function BezierArrow({
  x1,
  y1,
  x2,
  y2,
  sweepFlag = 0,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  sweepFlag?: number;
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dr = Math.sqrt(dx * dx + dy * dy);
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const angle = Math.atan2(dy, dx);

  return (
    <g>
      <path
        d={`M${x1},${y1}A${dr},${dr} 0 ${sweepFlag},1 ${x2},${y2}`}
        fill='none'
        stroke='#527dff'
        strokeWidth='1.5'
      />
      <polygon
        points='-10,-5 0,0 -10,5'
        fill='#527dff'
        transform={`translate(${
          mx + (Math.cos(angle - Math.PI / 2) * dr) / 7.5
        }, ${my + (Math.sin(angle - Math.PI / 2) * dr) / 7.5}) rotate(${
          (angle * 180) / Math.PI
        }) scale(${dr / 200 < 2 ? 2 : dr / 200})`}
      />
    </g>
  );
}

export function DelayBezierArrow({
  x1,
  y1,
  x2,
  y2,
  sweepFlag = 0,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  sweepFlag?: number;
}) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dr = Math.sqrt(dx * dx + dy * dy);
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const angle = Math.atan2(dy, dx);

  return (
    <g>
      <path
        d={`M${x1},${y1}A${dr},${dr} 0 ${sweepFlag},1 ${x2},${y2}`}
        fill='none'
        stroke='#527dff'
        strokeWidth='1.5'
      />
      <g
        transform={`translate(${
          mx + (Math.cos(angle - Math.PI / 2) * dr) / 7.5
        }, ${my + (Math.sin(angle - Math.PI / 2) * dr) / 7.5}) rotate(${
          (angle * 180) / Math.PI
        }) scale(${dr / 200 < 2 ? 2 : dr / 200})`}
      >
        <polygon points='-10,-5 0,0 -10,5' fill='#527dff' />
        <rect x='-13' y='-5' width='1' height='10' fill='#527dff' />
        <rect x='-15' y='-5' width='1' height='10' fill='#527dff' />
      </g>
    </g>
  );
}

export function Flow({
  x,
  y,
  text,
  value,
  rate = 0,
}: {
  x: number;
  y: number;
  text: string;
  value: number;
  rate?: number;
}) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      <defs>
        <radialGradient
          id='grad1'
          cx='100%'
          cy='100%'
          r='50%'
          fx='100%'
          fy='100%'
        >
          <stop offset='0%' style={{ stopColor: '#9099d6', stopOpacity: 1 }} />
          <stop
            offset='100%'
            style={{ stopColor: '#527dff', stopOpacity: 1 }}
          />
        </radialGradient>
      </defs>
      <rect
        x='-30'
        y='-150'
        width='60'
        height='150'
        fill='none'
        strokeWidth={1}
        stroke='#527dff'
      />
      <rect
        x='-30'
        y={-150 * rate}
        width='60'
        height={150 * rate}
        fill='url(#grad1)'
      />
      <text x={0} y={30} fontSize='30' textAnchor='middle' fill='#aeaa24'>
        {text}
      </text>
      <text x={0} y={-10} fontSize='20' textAnchor='middle' fill='#25e9f8'>
        {value.toFixed(2)}
      </text>
    </g>
  );
}

export function MainFlow() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={1009}
      height={155}
      fill='none'
      x={370}
      y={1400}
    >
      <g transform='scale(0.85)'>
        <path fill='#527DFF' d='M0 28h960.505v6H0zM0 47h960.505v6H0z' />
        <path
          fill='#527DFF'
          d='m1009 40-82.128 30.31V9.69L1009 40ZM479.471 35l30.482 33.75h-60.964L479.471 35Z'
        />
        <path
          fill='#527DFF'
          d='m479.471 45-30.483-33.75h60.965L479.471 45ZM1009 127H48.495v-6H1009zM1009 108H48.495v-6H1009z'
        />
        <path
          fill='#527DFF'
          d='m0 115 82.128-30.31v60.621L0 115ZM529.529 120l-30.482-33.75h60.964L529.529 120Z'
        />
        <path
          fill='#527DFF'
          d='m529.529 110 30.483 33.75h-60.965L529.529 110Z'
        />
      </g>
    </svg>
  );
}
