import { memo, useEffect, useState, createContext, useContext } from 'react';
import type { FC } from 'react';
import { useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import resets from '../_resets.module.css';
import classes from './AppleHomeScreen.module.css';
import { CountingTimer } from './CountingTimer/CountingTimer.js';
import { Ellipse1Icon } from './Ellipse1Icon.js';
import { Line3Icon } from './Line3Icon.js';
import { Line4Icon } from './Line4Icon.js';

interface Props {
  className?: string;
}

/* @figmaId 360:1218 */
export const AppleHomeScreenRest: FC<Props> = memo(function AppleHomeScreen(props = {}) {
  const [timer, setTimer] = useState(0.1 * 60); // Initial time in seconds (22 minutes)
  const [breakTime, setBreakTime] = useState("");
  const [numIntervals, setNumIntervals] = useState(JSON.parse(
    localStorage.getItem("work_interval_counter") || "0"
  ));
  const navigate = useNavigate();


  useEffect(() => {
    const first = JSON.parse(localStorage.getItem('second_time') || '""');
    setBreakTime(first || "Break Time");
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(prevTimer => {
        if (prevTimer === 0) {
          clearInterval(intervalId);
          // You may perform additional actions here when the timer reaches 0

          // console.log(numIntervals);
          const interval = JSON.parse(
            localStorage.getItem("interval_count") || '""'
          );
          if (numIntervals - 1 <= 0) {
            localStorage.setItem(
              "work_interval_counter",
              JSON.stringify(parseInt(interval))
            );
            setTimeout(() => {
              navigate("/");
            }, 1000);
          } else {
            const updateTime = numIntervals - 1;
            setTimeout(() => {
              localStorage.setItem(
                "work_interval_counter",
                JSON.stringify(updateTime)
              );
              navigate("/apple-home-work");
            }, 1000);
          }
          return 0; // This line can be removed
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000); // Update the timer every second

    // Cleanup function
    return () => clearInterval(intervalId);
  }, []); // Run this effect only once on component mount

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <CountingTimer
        className={classes.countingTimer}
        swap={{
          ellipse1: <Ellipse1Icon className={classes.icon} />,
          line3: <Line3Icon className={classes.icon2} />,
          line4: <Line4Icon className={classes.icon3} />,
        }}
        text={{
          timer: <div className={classes.timer}>{breakTime}</div>,
          _451: <div className={classes._451}>{`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`}</div>,
        }}
      />
      <div className={classes.rectangle27}></div>
      <div className={classes.rectangle28}></div>
    </div>
  );
});
