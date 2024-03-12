import { memo } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";

import resets from "../../_resets.module.css";
import classes from "./EditFunctions.module.css";

interface Props {
  className?: string;
}
/* @figmaId 67:170 */
export const EditFunctions: FC<Props> = memo(function EditFunctions(
  props = {}
) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle16}></div>
      <Link to="/edit-work-time">
        <button>
          <div className={classes.workTime}>Work Time</div>
          <div className={classes._30Min}>30 min</div>
        </button>
      </Link>
      <Link to="/edit-short-break">
        <button>
          <div className={classes._5Min}>5 min</div>
          <div className={classes.breakTime}>Break Time</div>
        </button>
      </Link>
    </div>
  );
});
