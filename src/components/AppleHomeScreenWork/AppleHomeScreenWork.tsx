import { memo, useEffect, useState} from "react";
import type { FC } from "react";
import { useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import resets from "../_resets.module.css";
import classes from "./AppleHomeScreen.module.css";
import { CountingTimer } from "./CountingTimer/CountingTimer.js";
import { Ellipse1Icon } from "./Ellipse1Icon.js";

interface Props {
  className?: string;
  hide?: {
    line3?: boolean;
    line4?: boolean;
  };
}

export const AppleHomeScreenWork: FC<Props> = memo(function AppleHomeScreen(
  props = {}
) {
  const [timer, setTimer] = useState(8 * 60); // Initial time in seconds (22 minutes)
  const [workTime, setWorkTime] = useState("");
  const [numIntervals, setNumIntervals] = useState(JSON.parse(
    localStorage.getItem("work_interval_counter") || "0"
  ));
  const navigate = useNavigate();

  useEffect(() => {
    const first = JSON.parse(localStorage.getItem("first_time") || '""');
    setWorkTime(first || "Work Time");
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 0) {
          clearInterval(intervalId);
          // You may perform additional actions here when the timer reaches 0
          setTimeout(() => {
            navigate("/apple-home-rest");
          }, 1000);
          return 0; // This line can be removed
        } else {
          return prevTimer - 1;
        }
      });
    }, 1000); // Update the timer every second

    // Cleanup function
    return () => clearInterval(intervalId);
  }, []); // Run this effect only once on component mount

  // Convert timer value to minutes and seconds
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <CountingTimer
        className={classes.countingTimer}
        swap={{
          ellipse1: <Ellipse1Icon className={classes.icon} />,
        }}
        hide={{
          line3: true,
          line4: true,
        }}
        text={{
          timer: <div className={classes.timer}>{workTime}</div>,
          _451: (
            <div className={classes._451}>{`${minutes}:${
              seconds < 10 ? "0" : ""
            }${seconds}`}</div>
          ),
        }}
      />
      <div className={classes.rectangle27}></div>
      <div className={classes.rectangle28}></div>
      <div className={classes.image2}></div>
    </div>
  );
});
