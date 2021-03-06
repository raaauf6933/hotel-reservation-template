import React from "react";
import AppContainer from "../components/AppContainer";
import Hero from "../components/Hero";
import { Typography, Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import galleryImages from "./images.json";
import ImagePreviewDialog from "../components/ImagePreviewDialog";
import { parse as parseQs } from "qs";
import { useLocation, useNavigate } from "react-router-dom";
import createDialogActionHandlers from "../utils/dialogActionHandlers";
import { bookingUrl } from "./url";
import { WindowTitle } from "../../admin/components/WindowTitle/WindowTitle";
import { resortName } from "./../../config";
import AppLayout from "../components/AppLayout";

const useStyles = makeStyles(
  () => ({
    img: {
      cursor: "pointer",
      transition: ".5s ease",
      "&:hover": {
        opacity: "0.3",
      },
    },
  }),
  { name: "Gallery" }
);

const Gallery = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const classes = useStyles({});
  const qs = parseQs(location.search.substr(1));
  const params = qs;

  const theme = useTheme();
  const media_xs = useMediaQuery(theme.breakpoints.down("sm"));

  const [openModal, closeModal] = createDialogActionHandlers(
    navigate,
    null,
    bookingUrl,
    params
  );

  return (
    <>
      <AppLayout>
        <WindowTitle title={resortName("Gallery")} />
        <Hero>
          <Box textAlign="center">
            <Typography variant="h1">Gallery</Typography>
          </Box>
        </Hero>
        <AppContainer>
          <div className="mt-5"></div>
          <Box>
            <ImageList variant="masonry" cols={media_xs ? 2 : 4} gap={8}>
              {galleryImages.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    src={`${item.img}?w=348&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=348&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                    onClick={() =>
                      openModal("showRoomImage", { roomImage: item.img })
                    }
                    className={classes.img}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
          <ImagePreviewDialog
            imageSrc={params.roomImage}
            isOpenModal={params.action === "showRoomImage"}
            closeModal={closeModal}
          />
        </AppContainer>
      </AppLayout>
    </>
  );
};

export default Gallery;
