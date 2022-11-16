import moment from "moment";
import { currencyFormat } from "./../../misc";
import { logo_vi } from "./img";

export const createBookingTypeChoices = () => {
  return [
    {
      label: "All Booking Status",
      value: "ALL",
    },
    {
      label: "Pending",
      value: "PENDING",
    },
    {
      label: "Confirmed",
      value: "CONFIRMED",
    },
    {
      label: "Check-In",
      value: "CHECK_IN",
    },
    {
      label: "Checkout",
      value: "CHECK_OUT",
    },
    {
      label: "Canceled",
      value: "CANCELLED",
    },
  ];
};

export const createDateRangeChoices = () => {
  return [
    {
      label: "Daily",
      value: "DAILY",
    },
    {
      label: "Monthly",
      value: "MONTHLY",
    },
    {
      label: "Yearly",
      value: "YEARLY",
    },
  ];
};

export const createSortChoices = () => {
  return [
    {
      label: "Booking Date",
      value: "BOOKING_DATE",
    },
    {
      label: "Check-in Date",
      value: "CHECK_IN",
    },
    {
      label: "Checkout Date",
      value: "CHECK_OUT",
    },
  ];
};

const createDataRows = (data) => {
  const rowBody = data.map((booking, index, array) => {
    let payment_amount = 0;
    if (booking?.payment?.length !== 0) {
      booking?.payment?.map((e) => (payment_amount += e.payment_amount));
    }

    return [
      {
        text: `${booking.booking_reference}`,
        style: "tableBody",
      },
      {
        text: `${moment(booking.createdAt).format("YYYY-MM-DD")}`,
        style: "tableBody",
      },
      {
        text: `${booking.rooms.length}`,
        style: "tableBody",
      },
      {
        text: `${booking.guest.no_guest}`,
        style: "tableBody",
      },
      {
        text: `${booking.check_in}`,
        style: "tableBody",
      },
      {
        text: `${booking.check_out}`,
        style: "tableBody",
      },
      {
        text: `${booking.status}`,
        style: "tableBody",
      },
      {
        text: `${currencyFormat(payment_amount, {
          removeSign: true,
        })}`,
        style: "tableBody",
      },
      {
        text: `${currencyFormat(booking.billing.total_amount, {
          removeSign: true,
        })}`,
        style: "tableBody",
      },
    ];
  });

  if (data.length === 0) {
    return [[{ text: "NO DATA", colSpan: 9, alignment: "center" }]];
  } else {
    return rowBody;
  }
};

// playground requires you to assign document definition to a variable called dd
export const dd = (data, formData, user) => {
  const { bookings, billing } = data;
  return {
    footer: {
      margin: [5, 15, 10, 5],
      height: 30,
      columns: [
        {
          alignment: "right",
          text: [
            {
              text: `PREPARED BY : ${user.first_name} ${user.last_name} `,
              italics: true,
            },
          ],
        },
      ],
    },
    content: [
      {
        alignment: "justify",
        columns: [
          {
            image: logo_vi,
            width: 50,
          },
          {
            margin: [0, 10, 0, 0],
            text: "Villa Gregoria Resort",
            style: "header",
          },
          {
            text: `${moment().format("LLL")}`,
            style: "date",
          },
        ],
      },
      "\n",
      {
        text: `FROM : ${moment(formData.from).format("LL").toLowerCase()}`,
        style: "title1",
      },
      {
        text: `TO : ${moment(formData.to).format("LL").toLocaleLowerCase()}`,
        style: "title1",
      },
      "\n",

      "",
      {
        style: "tableExample",
        margin: [0, 10, 10, 10],
        table: {
          //   widths: [100,100,100],

          body: [
            [
              {
                text: "Booking Ref.",
                style: "tableheader",
              },
              {
                text: "Booking Date",
                style: "tableheader",
              },
              {
                text: "No Rooms",
                style: "tableheader",
              },
              {
                text: "No Guest",
                style: "tableheader",
              },
              {
                text: "Check-in",
                style: "tableheader",
              },
              {
                text: "Check-out",
                style: "tableheader",
              },
              {
                text: "Status",
                style: "tableheader",
              },
              {
                text: "Payed Amount",
                style: "tableheader",
              },
              {
                text: "Total Amount",
                style: "tableheader",
              },
            ],
            ...createDataRows(bookings),
          ],
        },
      },

      {
        margin: [0, 20, 0, 0],
        text: `Number of Booking : ${billing.no_bookings}`,
      },
      {
        margin: [0, 10, 0, 0],
        text: `Number of Guest : ${billing.no_guest}`,
      },
      {
        margin: [0, 10, 0, 0],
        alignment: "justify",
        columns: [
          {
            text: `Vatable : ${currencyFormat(billing.vatable, {
              removeSign: true,
            })}`,
          },
          {
            text: ``,
            style: "date",
          },
        ],
      },
      {
        margin: [0, 10, 0, 0],
        alignment: "justify",
        columns: [
          {
            text: `VAT: ${currencyFormat(billing.vat, {
              removeSign: true,
            })}`,
          },
          {
            text: "",
            style: "date",
          },
        ],
      },
      {
        margin: [0, 10, 0, 0],
        alignment: "justify",
        columns: [
          {
            text: `Total Amount: ${currencyFormat(billing.total_amount, {
              removeSign: true,
            })}`,
          },
          {
            text: ``,
            style: "date",
          },
        ],
      },
      {
        margin: [0, 10, 0, 0],
        alignment: "justify",
        columns: [
          {
            text: `Total Sales: ${currencyFormat(billing.total_sales)}`,
            style: "total_currency",
          },
          {
            text: ``,
            style: "date",
          },
        ],
      },
    ],
    styles: {
      header: {
        fontSize: 22,
        bold: true,
      },
      tableheader: {
        bold: true,
        fontWeight: 600,
        margin: [5, 5, 5, 5],
      },
      tableBody: {
        margin: [5, 5, 5, 5],
      },
      date: {
        fontSize: 16,
        alignment: "right",
      },
      total_currency: {
        fontSize: 15,
        bold: true,
        alignment: "justify",
      },
      title1: {
        fontSize: 14,
        bold: true,
        alignment: "justify",
      },
      title2: {
        fontSize: 14,
        bold: false,
        alignment: "justify",
      },
    },
    defaultStyle: {
      columnGap: 20,
    },
    pageOrientation: "landscape",
    // pageMargins: [20, 20, 20, 10],
  };
};
