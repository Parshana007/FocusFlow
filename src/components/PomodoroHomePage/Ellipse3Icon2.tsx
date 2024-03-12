import { memo, SVGProps } from 'react';

const Ellipse3Icon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 78 78' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={39} cy={39} r={39} fill='#333333' />
  </svg>
);

const Memo = memo(Ellipse3Icon2);
export { Memo as Ellipse3Icon2 };
