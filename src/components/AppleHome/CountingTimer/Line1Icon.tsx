import { memo, SVGProps } from 'react';

const Line1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 0L13 13' stroke='white' strokeWidth={2} strokeLinecap='round' />
  </svg>
);

const Memo = memo(Line1Icon);
export { Memo as Line1Icon };
