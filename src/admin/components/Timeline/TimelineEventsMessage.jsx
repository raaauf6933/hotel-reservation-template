import React from "react";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { CheckCircle } from "@mui/icons-material/";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import DateAgo from "../../components/DateAgo/DateAgo";

const useStyles = makeStyles(
  () => ({
    timelineIcon: {
      fontSize: "1em",
    },
    timelineContent: {
      display: "flex",
      justifyContent: "space-between",
    },
  }),
  {
    name: "BookingHistory",
  }
);

const TimelineEventsMessage = (props) => {
  const classes = useStyles(props);
  const { event, date } = props;

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot color="primary">
          <CheckCircle className={classes.timelineIcon} />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>

      <TimelineContent
        className={classes.timelineContent}
        sx={{ py: "21px", px: 2 }}
      >
        <div>
          <Typography fontWeight={600}>{event?.user}</Typography>
          <div
            style={{
              marginLeft: "1em",
            }}
          >
            - {event.message}
          </div>
        </div>
        <span>
          <DateAgo date={date} />
        </span>
      </TimelineContent>
    </TimelineItem>
  );
};

export default TimelineEventsMessage;
