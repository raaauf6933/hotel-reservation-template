import { Box, Typography } from "@mui/material";
import React from "react";
import { currencyFormat } from "../../utils/formatter";

const Room = (room) => {
  return (
    <div class=" ftco-animate fadeInUp ftco-animated">
      <div class="project-wrap">
        <span
          class="img"
          style={{
            backgroundImage: `url(${room.image[0].src})`,
          }}
        >
          <span class="price">{currencyFormat(room.price)} / Night</span>
        </span>
        <div class="text p-4">
          <Typography variant="h6">{room.roomName}</Typography>
          <Box padding="5px">
            {room.maxPerson && (
              <Typography variant="caption">
                <span class="days">- Good for {room.maxPerson}</span>
              </Typography>
            )}
            <br />
            {room.noBeds && (
              <Typography variant="caption">
                <span class="days">- {room.noBeds} no. of beds</span>
              </Typography>
            )}
            <br />
            {room.noShower && (
              <Typography variant="caption">
                <span class="days">- {room.noShower} bathroom</span>
              </Typography>
            )}
            {room?.description &&
              room.description.map((e) => {
                return (
                  <>
                    <Typography variant="caption">
                      <span class="days">- {e}</span>
                    </Typography>{" "}
                    <br />
                  </>
                );
              })}
          </Box>
          <Typography variant="h6" fontWeight="lighter">
            {currencyFormat(room.price)} / Night
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Room;
