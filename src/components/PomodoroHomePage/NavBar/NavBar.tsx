import { memo } from "react";
import type { FC } from "react";

import resets from "../../_resets.module.css";
import { Group2Icon } from "./Group2Icon.js";
import { Group3Icon } from "./Group3Icon.js";
import { Group4Icon } from "./Group4Icon.js";
import { GroupIcon } from "./GroupIcon.js";
import classes from "./NavBar.module.css";
import { VectorIcon } from "./VectorIcon.js";

interface Props {
  className?: string;
}
/* @figmaId 66:168 */
export const NavBar: FC<Props> = memo(function NavBar(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.worldClock}>World Clock</div>
      <div className={classes.alarms}>Alarms</div>
      <div className={classes.stopwatch}>Stopwatch</div>
      <div className={classes.timers}>Timers</div>
      <div className={classes.pomodoro}>Pomodoro</div>
      <div className={classes.vector}>
        <VectorIcon className={classes.icon} />
      </div>
      <div className={classes.group3}>
        <Group3Icon className={classes.icon2} />
      </div>
      <div className={classes.group2}>
        <Group2Icon className={classes.icon3} />
      </div>
      <div className={classes.group4}>
        <Group4Icon className={classes.icon4} />
      </div>
      <div className={classes.group}>
        <GroupIcon className={classes.icon5} />
      </div>
    </div>
  );
});
