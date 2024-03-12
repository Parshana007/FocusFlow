import { memo, SVGProps } from 'react';

const PlusIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 8H16' stroke='#FF9F09' strokeWidth={2} strokeLinecap='round' />
    <path d='M8 0L8 16' stroke='#FF9F09' strokeWidth={2} strokeLinecap='round' />
  </svg>
);

const Memo = memo(PlusIcon);
export { Memo as PlusIcon };
