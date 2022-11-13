/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/iframe-has-title */
import React, { useState } from "react";
import { WindowTitle } from "../../admin/components/WindowTitle/WindowTitle";
import { Grid, Button, CardContent, Card } from "@mui/material";
import { resortName } from "./../../config";
import AppContainer from "../components/AppContainer";
import AppLayout from "../components/AppLayout";
import Hero from "../components/Hero";
import { Typography, Box, TextField } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { makeStyles } from "@mui/styles";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import useMutate from "../hooks/useMutate";
import { useSnackbar } from "notistack";

const useStyles = makeStyles(
  () => ({
    infoSection: {
      display: "flex",
      flexDirection: "column",
      marginBottom: "1em",
    },
  }),
  {
    name: "Contact",
  }
);

const Contact = (props) => {
  const classes = useStyles(props);
  const { enqueueSnackbar } = useSnackbar();
  const [form, setForm] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const [sendEmailSupport, sendEmailSupportOpts] = useMutate({
    onComplete: () => {
      enqueueSnackbar("Your message has been successfully sent!", {
        variant: "success",
      });

      setForm({
        name: "",
        subject: "",
        email: "",
        message: "",
      });
    },
  });

  const handleSubmit = () => {
    sendEmailSupport({
      url: "api/admin/about_us/send_support_email",
      data: {
        ...form,
      },
    });
  };

  return (
    <AppLayout>
      {" "}
      <WindowTitle title={resortName("Contact")} />
      <Hero>
        <Box textAlign="center">
          <Typography variant="h1">Contact Us</Typography>
        </Box>
      </Hero>
      <AppContainer>
        <div className="mt-5 mb-5">
          <Grid container spacing={2}>
            <Grid item container md={6} sm={12} xs={12} direction="column">
              <Card
                sx={{
                  borderRadius: "3%",
                }}
              >
                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="h4"
                    fontWeight={600}
                    color="#f15d30"
                    gutterBottom
                  >
                    Get in Touch
                  </Typography>
                  <TextField
                    label="Name"
                    margin="dense"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                  <TextField
                    label="Email"
                    margin="dense"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />
                  <TextField
                    label="Subject"
                    margin="dense"
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                  />
                  <TextField
                    label="Message"
                    margin="dense"
                    value={form.message}
                    multiline
                    rows={4}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                  />
                  <Box textAlign="center" marginTop="1em">
                    <Button
                      variant="contained"
                      sx={{
                        background: "#f15d30",
                        ":hover": {
                          background: "#f15d30b3",
                        },
                        ":focus": {
                          outlineColor: "#f15d30b3",
                        },
                      }}
                      onClick={handleSubmit}
                      disabled={
                        sendEmailSupportOpts.loading ||
                        !form.email ||
                        !form.message ||
                        !form.name ||
                        !form.subject
                      }
                    >
                      Send Message
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              md={6}
              sm={12}
              xs={12}
              //   alignContent="center"
              //   alignSelf="center"
            >
              <Box marginTop="3em">
                <div className={classes.infoSection}>
                  <Typography
                    variant="h5"
                    marginRight="1em"
                    whiteSpace="nowrap"
                  >
                    <LocationOnIcon
                      fontSize="large"
                      sx={{
                        color: "#f15d30b3",
                      }}
                    />{" "}
                    Address:
                  </Typography>
                  <Typography variant="h5" marginLeft="2em">
                    - Brgy. Buboy 4002 Nagcarlan, Philippines
                  </Typography>
                </div>
                <div className={classes.infoSection}>
                  <Typography
                    variant="h5"
                    marginRight="1em"
                    whiteSpace="nowrap"
                  >
                    <LocalPhoneIcon
                      fontSize="large"
                      sx={{
                        color: "#f15d30b3",
                      }}
                    />{" "}
                    Contact Number:
                  </Typography>
                  <Typography variant="h5" marginLeft="2em">
                    - <a href="tel:09495633656">63 949 563 3656</a>
                  </Typography>
                </div>
                <div className={classes.infoSection}>
                  <Typography
                    variant="h5"
                    marginRight="1em"
                    whiteSpace="nowrap"
                  >
                    <EmailIcon
                      fontSize="large"
                      sx={{
                        color: "#f15d30b3",
                      }}
                    />{" "}
                    Email:
                  </Typography>
                  <Typography variant="h5" marginLeft="2em">
                    -{" "}
                    <a href="mailto:villagregoriaresortph@gmail.com">
                      villagregoriaresortph@gmail.com
                    </a>
                  </Typography>
                </div>
                <div
                  style={{
                    position: "relative",
                    textAlign: "right",
                    height: "299px",
                    width: "100%",
                  }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      background: "none!important",
                      height: "299px",
                      width: "100%",
                    }}
                  >
                    <iframe
                      width="100%"
                      height="299"
                      id="gmap_canvas"
                      src="https://maps.google.com/maps?q=villa%20gregorira%20resort&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                    ></iframe>
                    <a href="https://fmovies-online.net"></a>
                    <br />
                    <a href="https://www.embedgooglemap.net">
                      embed code for google map
                    </a>
                  </div>
                </div>
              </Box>
            </Grid>
            {/* <Grid item md={12} sm={12} xs={12}>
              
            </Grid> */}
          </Grid>
        </div>
      </AppContainer>
    </AppLayout>
  );
};

export default Contact;
