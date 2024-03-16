import { memo, SVGProps } from 'react';

const Line4Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 0 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0L0 13' stroke='#FF4539' strokeWidth={4} strokeLinecap='round' />
  </svg>
);

const Memo = memo(Line4Icon);
export { Memo as Line4Icon };
