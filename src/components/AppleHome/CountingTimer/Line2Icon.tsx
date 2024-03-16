import { memo, SVGProps } from 'react';

const Line2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 13L12 1.09033e-06' stroke='white' strokeWidth={2} strokeLinecap='round' />
  </svg>
);

const Memo = memo(Line2Icon);
export { Memo as Line2Icon };
