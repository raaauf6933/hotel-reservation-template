import {
  Dashboard,
  BookOnline,
  LocalHotel,
  SupervisorAccount,
  Category,
} from "@mui/icons-material";

export const navbarStructure = () => {
  return [
    {
      icon: <Dashboard />,
      label: "Dashboard",
      url: "/admin",
      key: "dashboard",
    },

    {
      icon: <BookOnline />,
      label: "Bookings",
      url: "/admin/bookings",
      key: "booking",
    },
    {
      icon: <Category />,
      label: "Amenities",
      url: "/admin/amenities",
      key: "amenities",
    },
    {
      icon: <LocalHotel />,
      label: "Room Management",
      url: "/admin/room-management",
      key: "room-management",
    },
    {
      icon: <SupervisorAccount />,
      label: "Users",
      url: "/admin/users",
      key: "users",
    },
  ];
};
