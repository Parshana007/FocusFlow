import { memo } from 'react';
import type { FC } from 'react';
import { Link } from "react-router-dom";
import resets from '../_resets.module.css';
import classes from './EditShortBreakPage.module.css';
import { Ellipse5Icon } from './Ellipse5Icon.js';

interface Props {
  className?: string;
}
/* @figmaId 148:1539 */
export const EditShortBreakPage: FC<Props> = memo(function EditShortBreakPage(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle17}></div>
      <Link to="/">
        <button>
          <div className={classes.cancel}>Cancel</div>
        </button>
      </Link>
      <Link to="/">
        <button>
          <div className={classes.save}>Save</div>
        </button>
      </Link>
      <div className={classes.editShortBreak}>Edit Short Break</div>
      <div className={classes.rectangle19}></div>
      <div className={classes.Hours}>
        <p className={classes.labelWrapper}>
          <span className={classes.label}> 0 </span>
          <span className={classes.label2}>hours</span>
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
          <span className={classes.label3}>22 </span>
          <span className={classes.label4}>min</span>
        </p>
      </div>
      <div className={classes._10}>10</div>
      <div className={classes._13}>13</div>
      <div className={classes._14}>14</div>
      <div className={classes._11}>11</div>
      <div className={classes._12Sec}>
        <p className={classes.labelWrapper3}>
          <span className={classes.label5}>12 </span>
          <span className={classes.label6}>sec</span>
        </p>
      </div>
      <div className={classes.rectangle20}></div>
      <div className={classes.sound}>Sound</div>
      <div className={classes.radar}>Radar</div>
      <div className={classes.autoStart}>Auto Start</div>
      <div className={classes.rectangle21}></div>
      <div className={classes.ellipse5}>
        <Ellipse5Icon className={classes.icon} />
      </div>
      <div className={classes.label7}>Label</div>
      <div className={classes.shortBreak}>Short Break</div>
      <div className={classes.image1}></div>
      <div className={classes.rectangle23}></div>
      <div className={classes.rectangle24}></div>
      <div className={classes.rectangle25}></div>
    </div>
  );
});