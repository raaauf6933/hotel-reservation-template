import React from "react";
import { Grid, Typography } from "@mui/material";
import Room from "../Room";

const RoomSection = (props) => {
  const {
    show,
    rooms: rooms_data,
    openModal,
    closeModal,
    searchParams,
  } = props;

  const rooms =
    rooms_data &&
    rooms_data?.map((e) => ({
      id: e._id,
      image: e.images,
      price: e.room_rate,
      maxPerson: e.details.no_person,
      roomName: e.name,
      noBeds: e.details.no_bed,
      noShower: e.details.no_bath,
      description: e.details.description,
    }));

  return (
    <>
      <Grid container spacing={3}>
        {rooms.length === 0 ? (
          <>
            <Typography
              variant="h3"
              style={{
                textAlign: "center",
              }}
            >
              No Rooms Available
            </Typography>
          </>
        ) : (
          rooms.map((room, index) => {
            if (show) {
              return show <= index ? (
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <Room key={index} {...room} />
                </Grid>
              ) : null;
            } else {
              return (
                <Grid item xs={12} sm={4} md={4} lg={4}>
                  <Room key={index} {...room} />
                </Grid>
              );
            }
          })
        )}
      </Grid>
    </>
  );
};

export default RoomSection;
