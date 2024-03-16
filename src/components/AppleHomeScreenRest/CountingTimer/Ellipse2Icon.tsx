import { memo, SVGProps } from 'react';

const Ellipse2Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 46 46' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={23} cy={23} r={23} fill='#433E3C' />
  </svg>
);

const Memo = memo(Ellipse2Icon);
export { Memo as Ellipse2Icon };
