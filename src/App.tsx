import { memo } from "react";
import type { FC } from "react";

import classes from "./App.module.css";
import resets from "./components/_resets.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { PomodoroHomePage } from "./components/PomodoroHomePage/PomodoroHomePage.js";
import { EditWorkTimePage } from "./components/EditWorkTimePage/EditWorkTimePage.js";
import { EditShortBreakPage } from "./components/EditShortBreakPage/EditShortBreakPage.js"

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <Router>
        <Routes>
          <Route path="/" element={<PomodoroHomePage />} />
          <Route path="/edit-work-time" element={<EditWorkTimePage />} />
          <Route path="/edit-short-break" element={<EditShortBreakPage />} />
        </Routes>
      </Router>
    </div>
  );
});
