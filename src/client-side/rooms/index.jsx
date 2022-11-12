import React from "react";
import AppContainer from "../components/AppContainer";
import Hero from "../components/Hero";
import { Typography, Box } from "@mui/material";
import RoomSection from "../components/RoomSection";
import { WindowTitle } from "../../admin/components/WindowTitle/WindowTitle";
import { resortName } from "./../../config";
import AppLayout from "../components/AppLayout";
import useFetch from "../hooks/useFetch";
import { GET_ROOM_TYPES } from "./api";

const Rooms = () => {
  const { response } = useFetch({
    url: GET_ROOM_TYPES,
  });

  const rooms = response?.data ? response?.data : [];

  return (
    <>
      <AppLayout>
        <WindowTitle title={resortName("Gallery")} />
        <Hero>
          <Box textAlign="center">
            <Typography variant="h1">Our Rooms</Typography>
          </Box>
        </Hero>
        <AppContainer>
          <div className="mt-5"></div>
          <RoomSection showAll={true} rooms={rooms} />
          {/* <Grid container spacing={3}>
          <Grid></Grid>
          <Grid></Grid>
          <Grid></Grid>
          <Grid></Grid>
          <Grid></Grid>
          <Grid></Grid>
        </Grid> */}
        </AppContainer>
      </AppLayout>
    </>
  );
};

export default Rooms;
