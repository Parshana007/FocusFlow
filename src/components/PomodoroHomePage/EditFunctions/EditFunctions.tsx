import { memo, useEffect, useState } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";

import resets from "../../_resets.module.css";
import classes from "./EditFunctions.module.css";

interface Props {
  className?: string;
}

export const EditFunctions: FC<Props> = memo(function EditFunctions(
  props = {}
) {
  // State to hold the values retrieved from localStorage
  const [firstTime, setFirstTime] = useState("Work Time");
  const [secondTime, setSecondTime] = useState("Short Break");
  const [intervals, setIntervals] = useState("10");

  // useEffect to retrieve data from localStorage on component mount
  useEffect(() => {
    const first = JSON.parse(localStorage.getItem('first_time') || '""');
    const second = JSON.parse(localStorage.getItem('second_time') || '""');
    const interval = JSON.parse(localStorage.getItem('interval_count') || '""');
    setFirstTime(first || "Work Time");
    setSecondTime(second || "Short Break");
    setIntervals(interval || "10")
  }, []);

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle16}></div>
      <Link to="/edit-work-time">
        <button>
          <div className={classes.workTime}>{firstTime}</div>
          <div className={classes._30Min}>22 min</div>
        </button>
      </Link>
      <Link to="/edit-short-break">
        <button>
          <div className={classes._5Min}>8 min</div>
          <div className={classes.breakTime}>{secondTime}</div>
        </button>
      </Link>
    </div>
  );
});
