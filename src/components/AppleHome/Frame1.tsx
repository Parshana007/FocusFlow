import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { CountingTimer } from './CountingTimer/CountingTimer.js';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import classes from './Frame1.module.css';
import { Line3Icon } from './Line3Icon.js';
import { Line4Icon } from './Line4Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 357:1147 */
export const Frame1: FC<Props> = memo(function Frame1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.iMG_78261}></div>
      <CountingTimer
        className={classes.countingTimer}
        swap={{
          ellipse1: <Ellipse1Icon className={classes.icon} />,
          line3: <Line3Icon className={classes.icon2} />,
          line4: <Line4Icon className={classes.icon3} />,
        }}
        text={{
          timer: <div className={classes.timer}>Study</div>,
          _451: <div className={classes._451}>22:00</div>,
        }}
      />
      <div className={classes.rectangle25}></div>
      <div className={classes.rectangle26}></div>
    </div>
  );
});
