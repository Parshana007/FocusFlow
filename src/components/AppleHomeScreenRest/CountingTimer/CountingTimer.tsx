import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './CountingTimer.module.css';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Ellipse2Icon } from './Ellipse2Icon.js';
import { Line1Icon } from './Line1Icon.js';
import { Line2Icon } from './Line2Icon.js';
import { Line3Icon } from './Line3Icon.js';
import { Line4Icon } from './Line4Icon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    ellipse1?: ReactNode;
    line3?: ReactNode;
    line4?: ReactNode;
  };
  text?: {
    timer?: ReactNode;
    _451?: ReactNode;
  };
}
/* @figmaId 67:191 */
export const CountingTimer: FC<Props> = memo(function CountingTimer(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.rectangle13}></div>
      <div className={classes.ellipse1}>{props.swap?.ellipse1 || <Ellipse1Icon className={classes.icon} />}</div>
      <div className={classes.ellipse2}>
        <Ellipse2Icon className={classes.icon2} />
      </div>
      {props.text?.timer != null ? props.text?.timer : <div className={classes.timer}>Timer</div>}
      {props.text?._451 != null ? props.text?._451 : <div className={classes._451}>04:51</div>}
      <div className={classes.line1}>
        <Line1Icon className={classes.icon3} />
      </div>
      <div className={classes.line2}>
        <Line2Icon className={classes.icon4} />
      </div>
      <div className={classes.line3}>{props.swap?.line3 || <Line3Icon className={classes.icon5} />}</div>
      <div className={classes.line4}>{props.swap?.line4 || <Line4Icon className={classes.icon6} />}</div>
    </div>
  );
});
