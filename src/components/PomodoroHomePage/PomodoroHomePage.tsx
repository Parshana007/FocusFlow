import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { EditFunctions } from './EditFunctions/EditFunctions.js';
import { Ellipse3Icon2 } from './Ellipse3Icon2.js';
import { Ellipse3Icon } from './Ellipse3Icon.js';
import { NavBar } from './NavBar/NavBar.js';
import { PlusIcon } from './PlusIcon.js';
import classes from './PomodoroHomePage.module.css';

interface Props {
  className?: string;
}
/* @figmaId 62:103 */
export const PomodoroHomePage: FC<Props> = memo(function PomodoroHomePage(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.pomodoro}>Pomodoro</div>
      <div className={classes.plus}>
        <PlusIcon className={classes.icon} />
      </div>
      <div className={classes.edit}>Edit</div>
      <NavBar />
      <EditFunctions />
      <div className={classes.ellipse3}>
        <Ellipse3Icon className={classes.icon2} />
      </div>
      <div className={classes.start}>Start</div>
      <div className={classes.ellipse32}>
        <Ellipse3Icon2 className={classes.icon3} />
      </div>
      <div className={classes.reset}>Reset</div>
      <div className={classes.rectangle23}></div>
    </div>
  );
});
