import { memo, useState } from "react";
import type { FC } from "react";
import { Link } from "react-router-dom";
import resets from "../_resets.module.css";
import classes from "./EditWorkTimePage.module.css";
import { Ellipse4Icon } from "./Ellipse4Icon.js";

interface Props {
  className?: string;
}
/* @figmaId 64:106 */
export const EditWorkTimePage: FC<Props> = memo(function EditWorkTimePage(
  props = {}
) {
  // State to hold the value of the input field
  const [workTime, setWorkTime] = useState("");

  // Event handler to update the state when the input value changes
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWorkTime(event.target.value);
  };

  // Function to save the input value into localStorage
  const saveWorkTime = () => {
    localStorage.setItem('first_time', JSON.stringify(workTime));
  };

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle17}></div>
      <Link to="/">
        <button>
          <div className={classes.cancel}>Cancel</div>
        </button>
      </Link>
      <Link to="/">
        <button onClick={saveWorkTime}>
          <div className={classes.save}>Save</div>
        </button>
      </Link>
      <div className={classes.rectangle172}></div>
      <div className={classes._10}>10</div>
      <div className={classes.rectangle23}></div>
      <div className={classes.rectangle24}></div>
      <div className={classes.rectangle25}></div>
      <div className={classes.sound}>Sound</div>
      <div className={classes.radar}>Radar</div>
      <div className={classes.autoStart}>Auto Start</div>
      <div className={classes.totalIntervals}>Total Intervals</div>
      <div className={classes.label}>Label</div>
      <input
        type="text"
        placeholder="WorkTime"
        className={classes.workTime}
        value={workTime}
        onChange={handleInputChange}
      />
      <div className={classes.editWorkTime}>Edit Work Time</div>
      <div className={classes.rectangle18}></div>
      <div className={classes.ellipse4}>
        <Ellipse4Icon className={classes.icon} />
      </div>
      <div className={classes.rectangle19}></div>
      <div className={classes.Hours}>
        <p className={classes.labelWrapper}>
          <span className={classes.label2}> 0 </span>
          <span className={classes.label3}>hours</span>
        </p>
      </div>
      <div className={classes._20}>20</div>
      <div className={classes._23}>23</div>
      <div className={classes._24}>24</div>
      <div className={classes._21}>21</div>
      <div className={classes._1}> 1</div>
      <div className={classes._2}> 2</div>
      <div className={classes._22Min}>
        <p className={classes.labelWrapper2}>
          <span className={classes.label4}>22 </span>
          <span className={classes.label5}>min</span>
        </p>
      </div>
      <div className={classes._102}>10</div>
      <div className={classes._13}>13</div>
      <div className={classes._14}>14</div>
      <div className={classes._11}>11</div>
      <div className={classes._12Sec}>
        <p className={classes.labelWrapper3}>
          <span className={classes.label6}>12 </span>
          <span className={classes.label7}>sec</span>
        </p>
      </div>
      <div className={classes.image1}></div>
    </div>
  );
});
