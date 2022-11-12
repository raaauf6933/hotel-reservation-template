import React from "react";
// import mainLogo from "../components/Navbar/bg_5.jpg";
// import service1 from "../assets/images/services-1.jpg";
// import service2 from "../assets/images/services-2.jpg";
// import service3 from "../assets/images/services-3.jpg";
// import service4 from "../assets/images/services-4.jpg";
import DatePickerSection from "../components/DatePickerSection";
import ServiceSection from "../components/ServiceSection";
// import RoomSection from "../components/RoomSection";
import AppContainer from "../components/AppContainer";
import Hero from "../components/Hero";
// import { Typography } from "@mui/material";
// import SectionLabel from "../components/SectionLabel";
// import { Link } from "react-router-dom";
import navbarContext from "../context/navBar/navBarContext";
import { WindowTitle } from "../../admin/components/WindowTitle/WindowTitle";
import { resortName } from "./../../config";
import bookingContext from "../context/booking/bookingContext";
import AppLayout from "../components/AppLayout";
import ReviewsSection from "../components/ReviewsSection";
import { Typography } from "@mui/material";

const Home = () => {
  const { navbarDispatch } = React.useContext(navbarContext);
  const { bookingDispatch } = React.useContext(bookingContext);
  React.useEffect(() => {
    navbarDispatch({ type: "SET_ALLWAYS_AWAKE", payload: false });
    bookingDispatch({
      type: "RESET_ROOMS",
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <AppLayout>
        <WindowTitle title={resortName("Home")} />
        <Hero></Hero>
        <AppContainer>
          {/* <CheckAvailabilityCard /> */}

          <DatePickerSection />
          <ServiceSection />
          <ReviewsSection />
          <div
            style={{
              paddingBottom: "2em",
            }}
          >
            <div
              style={{
                title: {
                  padding: "2em",
                },
              }}
            >
              <Typography variant="h2" textAlign="center">
                Booking & Hotel Policies
              </Typography>
            </div>

            <Typography textAlign={"justify"} marginBottom={2}>
              - Booking Confirmation: The reservation is considered confirmed
              when you receive a confirmation thru email containing the
              reference ID. Present this together with a valid ID upon check-in.
              NO VOUCHER, NO CHECK-IN.
            </Typography>

            <Typography textAlign={"justify"} marginBottom={2}>
              - Booking Modification/Cancellation: Cancellation and modification
              is not allowed. This booking is 100% confirmed once paid
            </Typography>

            <Typography textAlign={"justify"} marginBottom={2}>
              - Prepayment: Full prepayment is required to confirm your
              reservation. This is nonrefundable.
            </Typography>

            <Typography textAlign={"justify"} marginBottom={2}>
              - Modification: Change date or rebooking not allowed.
              Cancellation: Not Allowed No Show: Your 100% prepayment will be
              forfeited if you do not arrive within 24 hours of the check-in
              date and time of the hotel.
            </Typography>

            <Typography textAlign={"justify"} marginBottom={2}>
              - Cancellation caused by Acts of Nature & National Events: The
              resort will not be held liable for services not rendered or for
              any loss or damage due to natural calamity, flight or boat
              transfer cancellations due to bad weather condition and national
              events. If a booking was cancelled by the client because of force
              majeure, there will be no refund but is re-bookable to a new tour
              date within 30 days subject to room availability and rate
              difference if any.
            </Typography>

            <Typography textAlign={"justify"} marginBottom={2}>
              - Check-in and Check-out Policy: Check-in time is at 3:00 pm and
              check-out time is at 12:00 noon. Early check-in or late check-out
              will depend on room availability and with corresponding charges.
            </Typography>

            <Typography textAlign={"justify"} marginBottom={2}>
              Kid Policy: Kids sharing room with parents from 0-4 years old are
              free.
            </Typography>
            <Typography textAlign={"justify"} marginBottom={2}>
              - Non-smoking Policy: In order to maintain the beauty and comfort
              of our accommodation, for non-smoking rooms, violators will be
              charged a penalty fee equivalent to 2 nights based on published
              rates.
            </Typography>

            <Typography textAlign={"justify"} marginBottom={2}>
              - No Show Policy: Full payment will be forfeited if guest do not
              arrive within 24 hours of the check-in date and time of the hotel.
            </Typography>

            <Typography textAlign={"justify"} marginBottom={2}>
              - Online Promo Rate: Online promo rates are not applicable for
              Senior Citizen and PWD (Persons with disabilities) discounts.
            </Typography>

            <Typography textAlign={"justify"} marginBottom={2}>
              - Room Upgrade: Upgrade to a higher category is subject to room
              availability and rate difference. Full prepayment is required. For
              inquiries, contact our reservation team + 63 927 541 0656
            </Typography>

            <Typography textAlign={"justify"} marginBottom={2}>
              - Special Request/Preferences: Bed type, smoking and non-smoking
              preference and room allocation are all subject to availability
              upon check-in. The resort voucher indicates the room and the
              services you have paid for. Anything that has been overlooked
              should be paid at the resort.
            </Typography>
          </div>
          {/* <SectionLabel title="Best of Our Rooms" />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to="/rooms">
            <Typography variant="h4" gutterBottom>
              See more...
            </Typography>
          </Link>
        </div> */}
        </AppContainer>
      </AppLayout>
    </>
  );
};

export default Home;
