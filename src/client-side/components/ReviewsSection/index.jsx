import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, Card, CardContent, Grid, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";
import useFetch from "../../hooks/useFetch";
import useMutate from "../../hooks/useMutate";

const useStyles = makeStyles(
  () => ({
    root: {
      marginBottom: "2em",
    },
    title: {
      padding: "2em",
    },
    add_review_section: {
      padding: "1em",
      width: "100%",
    },
    review_list: {
      display: "block",
      maxHeight: "300px",
      overflow: "auto",
    },
  }),
  {
    name: "ReviewsSection",
  }
);

const ReviewsSection = (props) => {
  const classes = useStyles(props);
  const initialState = {
    name: "",
    title: "",
    review: "",
  };
  const [form, setForm] = useState(initialState);

  const { response, refetch } = useFetch({
    url: "api/admin/reviews/get_reviews",
    method: "GET",
  });

  const [addReview] = useMutate({
    onComplete: () => {
      refetch();
      setForm(initialState);
    },
  });

  const handleAdd = async () => {
    await addReview({
      url: "api/admin/reviews/add_review",
      method: "POST",
      data: form,
    });
  };

  const reviews = response?.data?.result ? response?.data?.result : [];
  console.log(response);
  return (
    <>
      <div className={classes.root}>
        <div className={classes.title}>
          <Typography variant="h2" textAlign="center">
            Our Reviews
          </Typography>
        </div>
        <Card>
          <CardContent>
            <div className={classes.review_list}>
              {reviews.length === 0 ? (
                <>
                  <Typography variant="h5" textAlign="center">
                    No Reviews
                  </Typography>
                </>
              ) : (
                <>
                  <List sx={{ width: "100%", bgcolor: "background.paper" }}>
                    {reviews.map((e) => (
                      <>
                        <ListItem alignItems="flex-start">
                          <ListItemAvatar>
                            <Avatar
                              alt={
                                e?.name?.charAt(0).toUpperCase() +
                                e.name.slice(1)
                              }
                              src="/static/images/avatar/1.jpg"
                            />
                          </ListItemAvatar>
                          <ListItemText
                            primary={
                              e?.review?.charAt(0).toUpperCase() +
                              e.review.slice(1)
                            }
                            secondary={
                              <React.Fragment>
                                <Typography
                                  sx={{ display: "inline" }}
                                  component="span"
                                  variant="body2"
                                  color="text.primary"
                                >
                                  {e?.name?.charAt(0).toUpperCase() +
                                    e.name.slice(1)}
                                </Typography>
                                {` — ${e.review}`}
                              </React.Fragment>
                            }
                          />
                        </ListItem>
                        <Divider variant="middle" component="li" />
                      </>
                    ))}
                  </List>
                </>
              )}
            </div>
            <div className={classes.add_review_section}>
              <Typography variant="h6">Add your review</Typography>
              <Grid spacing={2} container>
                {" "}
                <Grid xs={12} sm={12} md={12} item>
                  <TextField
                    label="Name"
                    value={form.name}
                    variant="standard"
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={12} md={12} item>
                  <TextField
                    label="Title"
                    value={form.title}
                    variant="standard"
                    onChange={(e) =>
                      setForm({ ...form, title: e.target.value })
                    }
                    fullWidth
                  />
                </Grid>
                <Grid xs={12} sm={12} md={12} item>
                  <TextField
                    label="Reviews"
                    value={form.review}
                    variant="standard"
                    fullWidth
                    multiline
                    rows={4}
                    onChange={(e) =>
                      setForm({ ...form, review: e.target.value })
                    }
                  />
                </Grid>
                <Grid xs={12} sm={12} md={12} item>
                  <Button
                    variant="contained"
                    onClick={handleAdd}
                    disabled={!form.name || !form.title || !form.review}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ReviewsSection;
