export function DragIcon({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x - 25}, ${y - 25})`}>
      <svg
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='25' cy='25' r='25' fill='#B5ABDF' />
        <circle cx='25' cy='25' r='23.25' stroke='#20193B' strokeWidth='1.5' />
        <path
          d='M22.075 41.5C21.325 41.5 20.625 41.3313 19.975 40.9938C19.325 40.6563 18.7875 40.175 18.3625 39.55L8.80005 25.5625L9.70005 24.7C10.175 24.225 10.7375 23.95 11.3875 23.875C12.0375 23.8 12.625 23.95 13.15 24.325L17.5 27.3625V13C17.5 12.575 17.6438 12.2188 17.9313 11.9313C18.2188 11.6438 18.575 11.5 19 11.5C19.425 11.5 19.7813 11.6438 20.0688 11.9313C20.3563 12.2188 20.5 12.575 20.5 13V33.1375L14.95 29.2375L20.8375 37.825C20.9625 38.025 21.1375 38.1875 21.3625 38.3125C21.5875 38.4375 21.825 38.5 22.075 38.5H32.5C33.325 38.5 34.0313 38.2063 34.6188 37.6188C35.2063 37.0313 35.5 36.325 35.5 35.5V14.5C35.5 14.075 35.6438 13.7188 35.9313 13.4313C36.2188 13.1438 36.575 13 37 13C37.425 13 37.7813 13.1438 38.0688 13.4313C38.3563 13.7188 38.5001 14.075 38.5001 14.5V35.5C38.5001 37.15 37.9126 38.5625 36.7375 39.7375C35.5625 40.9125 34.15 41.5 32.5 41.5H22.075ZM23.5 25V10C23.5 9.575 23.6438 9.21875 23.9313 8.93125C24.2188 8.64375 24.575 8.5 25 8.5C25.425 8.5 25.7813 8.64375 26.0688 8.93125C26.3563 9.21875 26.5 9.575 26.5 10V25H23.5ZM29.5 25V11.5C29.5 11.075 29.6438 10.7188 29.9313 10.4313C30.2188 10.1438 30.575 10 31 10C31.425 10 31.7813 10.1438 32.0688 10.4313C32.3563 10.7188 32.5 11.075 32.5 11.5V25H29.5Z'
          fill='black'
        />
      </svg>
    </g>
  );
}

export function PauseIcon({
  x,
  y,
  isDarkMode,
}: {
  x: number;
  y: number;
  isDarkMode: boolean;
}) {
  return (
    <g transform={`translate(${x - 25}, ${y - 25})`}>
      <svg
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {/* <circle cx='25' cy='25' r='25' fill='white' /> */}
        {/* <circle cx='25' cy='25' r='23.25' stroke='#20193B' strokeWidth='1.5' /> */}
        <path
          d='M16 13H20V37H16V13ZM30 13H34V37H30V13Z'
          fill={isDarkMode ? 'white' : 'black'}
          stroke={isDarkMode ? 'white' : 'black'}
          strokeWidth='1.5'
        />
      </svg>
    </g>
  );
}

export function PlayIcon({
  x,
  y,
  isDarkMode,
}: {
  x: number;
  y: number;
  isDarkMode: boolean;
}) {
  return (
    <g transform={`translate(${x - 25}, ${y - 25})`}>
      <svg
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        {/* <circle cx='25' cy='25' r='25' fill='white' /> */}
        {/* <circle cx='25' cy='25' r='23.25' stroke='#20193B' strokeWidth='1.5' /> */}
        <path
          d='M17 13L33 25L17 37V13Z'
          fill={isDarkMode ? 'white' : 'black'}
          stroke={isDarkMode ? 'white' : 'black'}
          strokeWidth='1.5'
        />
      </svg>
    </g>
  );
}
