import { ChangeEvent, useEffect, useState } from 'react';
import { BlockMath, InlineMath } from 'react-katex';

import 'katex/dist/katex.min.css';
import scrollBar from '@/lib/scrollBar.module.scss';

import Paper from '@/components/Paper';
import { SubTitle } from '@/components/utilities';
export default function FloatingPoint() {
  const [number, setNumber] = useState<number>(-314.25);
  const [showNumber, setShowNumber] = useState<number | null>(-314.25);
  const [binaryNumber, setBinaryNumber] = useState<string>('100111010.01');
  const [exp, setExp] = useState<number>(0);
  const [sig, setSig] = useState<number>(0);

  const [showExp, setShowExp] = useState<string>('');
  const [showSig, setShowSig] = useState<string>('');

  useEffect(() => {
    setShowExp(String(toBinary(exp)).padStart(7, '0'));
  }, [exp]);

  useEffect(() => {
    setShowSig(String(sig).slice(2).padEnd(23, '0'));
  }, [sig]);

  useEffect(() => {
    function toBits(n: number, bitCount: number) {
      let x = n;
      const bs = [];
      for (let b = 0; b < bitCount; b++) {
        x = n >> b;
        bs.push(x & 0x01);
      }
      return bs.reverse();
    }

    const numberInEffect = number >= 0 ? number : -number;
    function toBinaryStr(bits: any) {
      let suffix = bits.slice(1).join('').replace(/0+$/, '');
      suffix = suffix.length == 0 ? '0' : suffix;
      return bits[0] + '.' + suffix;
    }

    const buffer = new ArrayBuffer(4);
    new DataView(buffer).setFloat32(0, numberInEffect);
    const bitsInEffect: Uint8Array = new Uint8Array(buffer);

    if (bitsInEffect) {
      const exp = (bitsInEffect[0] << 1) | (bitsInEffect[1] >> 7);
      const sig =
        (((bitsInEffect[1] & 0x7f) | 0x80) << 16) |
        (bitsInEffect[2] << 8) |
        bitsInEffect[3];
      setExp(exp);
      setSig(parseFloat(toBinaryStr(toBits(sig, 24))));
      setBinaryNumber(
        String(
          Number(
            (
              parseFloat(toBinaryStr(toBits(sig, 24))) *
              10 ** (exp - 127)
            ).toFixed(12)
          )
        )
      );
    }
  }, [number]);

  useEffect(() => {
    if (showNumber) {
      if (isNaN(showNumber)) setNumber(0);
      setNumber(Number(showNumber));
    } else setNumber(0);
  }, [showNumber]);

  const onNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = !Number.isNaN(e.target.valueAsNumber)
      ? e.target.valueAsNumber
      : null;

    setShowNumber(value);
  };

  function toBinary(number: number): string {
    const result = [];
    let quotient = number;
    let remainder;

    while (quotient > 0) {
      remainder = quotient % 2;
      result.unshift(remainder);
      quotient = Math.floor(quotient / 2);
    }

    return result.join('');
  }

  return (
    <Paper title='소수를 나타내다, 부동 소수점'>
      <div className='flex flex-col'>
        <p>
          컴퓨터는 자료를 저장할 때, 2진수를 사용합니다. 소수 부분이 있는 숫자,
          즉 실수 또한 2진수를 사용하여 나타내며 부동 소수점 데이터 형식을
          사용합니다. 부동 소수점 데이터 형식에 대하여 알아봅시다. (IEEE 754
          표준을 기준으로 설명합니다.)
        </p>
        <SubTitle subTitle='구조' />
        <div>
          <p>
            원하는 실수 크기에 따라, 실수 1개를 표현하기 위해 32비트를 사용할
            수도 있으며, 64비트를 사용할 수도 있습니다. 해당 글에서는 32비트를
            활용하여 예시를 들겠습니다.
          </p>
          <p>
            32비트는 부호 비트 1개와 지수부 비트 8개, 그리고 가수부 비트 23개로
            구성됩니다.
          </p>
        </div>
        <div className='my-12 flex flex-col gap-2'>
          <div className='flex flex-wrap justify-center gap-0 text-xl md:gap-2'>
            <span>SEEE EEEE EMMM MMMM</span>
            <span>MMMM MMMM MMMM MMMM</span>
          </div>
          <p className='text-center'>S: 부호 비트, E: 지수부, M: 가수부</p>
        </div>
        <p className='mt-6'>
          해당 글에서는 특별한 상호작용 시스템을 적용하였습니다. 10진수 소수를
          부동 소수점 자료형을 활용하여 나타내는 방법을 알아보며, 사용하는
          예시를 지정할 수 있습니다. 즉, 자신이 원하는 숫자에 대한 변환 과정을
          확인해 볼 수 있습니다. 아래에 원하는 수를 입력하여 예시를 설정하세요.
        </p>
        <div className='mt-4 flex w-full justify-center'>
          <input
            className='max-w-md rounded-lg bg-transparent'
            type='number'
            value={showNumber ?? ''}
            onChange={(e) => {
              onNumberChange(e);
            }}
            step={0.01}
          />
        </div>
        <SubTitle subTitle='부호 비트' />
        <p>{number}를 예로 들어 설명하겠습니다.</p>
        <p>
          {`첫 비트는 부호 비트입니다. 첫 비트가 양수 또는 0이면 부호 비트가 0이고, 음수이면 1입니다. 예컨대 4.21은
          양수이므로 부호 비트가 0, -3.14는 음수이므로 부호 비트가 1입니다. 즉 
          ${number}의 첫 비트는 ${number < 0 ? '1' : '0'}입니다.`}
        </p>
        <div className='my-12 flex flex-wrap justify-center gap-0 text-xl md:gap-2'>
          <span>{number < 0 ? '1' : '0'}EEE EEEE EMMM MMMM</span>
          <span>MMMM MMMM MMMM MMMM</span>
        </div>
        <SubTitle subTitle='지수부와 가수부' />
        <p>
          우선, {number}를 2진수로 변환합시다. 2진수는 10진수와 달리 n번째
          자리의 수의 가중치는 <InlineMath>{`2^{n-1}`}</InlineMath>입니다. 예를
          들면 아래와 같습니다. (숫자 오른쪽에{' '}
          <InlineMath>{`_{(2)}`}</InlineMath>가 있다면 그 수가 2진수임로
          표현되었음을 의미함)
        </p>
        <div
          className={`my-8 flex w-full flex-col gap-2 overflow-x-auto overflow-y-hidden text-sm sm:text-lg md:text-2xl ${scrollBar.scrollBar}`}
        >
          <BlockMath>{`421.5 = 4 \\times 10^2+2\\times 10^1+1\\times 10^0+5\\times 10^{-1}`}</BlockMath>
          <BlockMath>{`101.1_{(2)} = 1\\times 2^2+0\\times 2^1+1\\times 2^0+1\\times 2^{-1}=5.5`}</BlockMath>
        </div>
        <p>
          위 내용을 기억하며, 부호를 제거한 {number >= 0 ? number : -number}를
          2진수로 변환하면 {binaryNumber}입니다.
        </p>
        <p className='mt-2'>
          부동 소수점 이름에서 알 수 있듯이, 소수점의 위치를 변화시켜
          저장합니다. 소수점을 고정하였을 때보다 보다 많은 범위의 실수를 표현할
          수 있기 때문입니다. {binaryNumber}를{' '}
          <InlineMath>{`${sig}\\times2^{${exp - 127}}`}</InlineMath>꼴로
          표현합니다. 변환한 수에서 지수부는 {exp - 127}입니다. 그러면,{' '}
          {exp - 127}을 2진수로 변환하여 지수부 비트에 넣으면 될까요? 정답은
          '아니다'입니다. 예를 들어 0.5를 위 방식과 같이 표현하면{' '}
          <InlineMath>{`1\\times2^{-1}`}</InlineMath>입니다. 지수부는 -1입니다.
          지수부에는 부호 비트가 없으므로, -1을 저장할 수 없습니다. 따라서,
          지수부 8비트가 나타낼 수 있는 값 중, 가운데 값 127을 더하여
          저장합니다. 즉, 위 예에서 {exp - 127} + 127 = {exp}를 2진수로 변환한
          값, {toBinary(exp)}를 지수부 비트에 넣습니다.
        </p>
        <div className='my-12 flex flex-wrap justify-center gap-0 text-xl md:gap-2'>
          <span>
            {number < 0 ? '1' : '0'}
            {showExp.slice(0, 3)} {showExp.slice(3, 7)} {showExp[7]}MMM MMMM
          </span>
          <span>MMMM MMMM MMMM MMMM</span>
        </div>
        <p>
          가수부에는 {sig}에서 소수점 아래 {String(sig).slice(2)}만 저장합니다.
          첫 수는 언제나 1이기 때문에 저장하지 않습니다. 앞부분부터 저장하며,
          나머지는 0으로 채웁니다.
        </p>
        <div className='my-12 flex flex-wrap justify-center gap-0 text-xl md:gap-2'>
          <span>
            {number < 0 ? '1' : '0'}
            {showExp.slice(0, 3)} {showExp.slice(3, 7)} {showExp[7]}
            {showSig.slice(0, 3)} {showSig.slice(3, 7)}
          </span>
          <span>
            {showSig.slice(7, 11)} {showSig.slice(11, 15)}{' '}
            {showSig.slice(15, 19)} {showSig.slice(19)}
          </span>
        </div>
      </div>
    </Paper>
  );
}
