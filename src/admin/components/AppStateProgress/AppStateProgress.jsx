import React from "react";
import LinearProgress from "@mui/material/LinearProgress";
import AppStateContext from "../../context/AppState/context";

const AppStateProgress = () => {
  const { appState } = React.useContext(AppStateContext);

  console.log(appState.displayLoader);

  return (
    <LinearProgress
      style={{
        zIndex: 1201,
        width: "100%",
      }}
      hidden={!appState.displayLoader}
    />
  );
};

export default AppStateProgress;
