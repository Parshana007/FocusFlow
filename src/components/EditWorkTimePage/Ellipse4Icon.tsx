import { memo, SVGProps } from 'react';

const Ellipse4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={13} cy={13} r={13} fill='#D9D9D9' />
  </svg>
);

const Memo = memo(Ellipse4Icon);
export { Memo as Ellipse4Icon };
