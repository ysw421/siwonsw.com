import Paper from '@/components/Paper';
import ColorLink from '@/components/ColorLink';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { SubTitle } from '@/components/utilities';

export default function Determinant() {
  return (
    <Paper title='행렬식 (Determinant)'>
      <SubTitle subTitle='라폴라스 전개 (Laplace expansion)' />
    </Paper>
  );
}
