import React from "react";
import axios from "axios";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./modal.css";
import { BsCalendarDate } from "react-icons/bs";
import { BsCoin } from "react-icons/bs";
import { BsClock } from "react-icons/bs";
import Button from "@mui/material/Button";

// const baseURL = `https://localhost:44332/api/Event/GetEventsById/id?id=${props.id}`;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EventDetails(props) {
  const [eventDetails, seteventDetails] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    axios

      .get(`https://localhost:44332/api/Event/GetEventsById/id?id=${props.id}`)
      .then((response) => {
        seteventDetails(response.data);
        console.log(response);
      });
  }, []);

  // console.log("response")
  console.log(eventDetails);

  if (!eventDetails) return null;

  //   const eventsDetails = eventDetails.map((data)=> {
  //       console.log(data.eventID);
  //     return <div className="card" key={data.eventID}>
  //      {/*  */}

  //     {/* <Card imgsrc = {eventpost.banner}
  //           eventName={eventpost.eventName}
  //           date={eventpost.date}
  //           location={eventpost.state}
  //           link={eventpost.ticketLink} /> */}
  //        {/* <div className="card" key={id}> */}

  //                 {/* <button onClick={handleOpen}> View Details</button> */}
  //                 <Modal
  //                   open={open}
  //                   onClose={handleClose}
  //                   id = {props.id}
  //                   // aria-labelledby="modal-modal-title"
  //                   // aria-describedby="modal-modal-description"
  //                 >
  //                   <Box sx={style}>
  //                   <h2 className="event_name">{data.eventName} </h2>

  //                   <h3 className="event_date">{data.date} </h3>
  //                   <h3 className="event_location">{data.venue} </h3>
  //                   <Typography id="modal-modal-title" variant="h6" component="h2">
  //                     Text in a modal
  //                   </Typography>
  //                   <Typography id="modal-modal-description" sx={{ mt: 2 }}>
  //                     Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //                   </Typography>
  //                 </Box>
  //                   </Modal>
  //         </div>

  //   })

  //   return (
  //     <div className="cards">
  //     {eventsDetails}
  //     </div>
  //   )
  return (
    <div>
      <button onClick={handleOpen}> View Details</button>
      <Modal
        open={open}
        onClose={handleClose}
        id={props.id}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <h2 className="event_name">{eventDetails.eventName} </h2>

          <h3 className="event_date">{eventDetails.date} </h3>
          <h3 className="event_location">{eventDetails.address} </h3>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
          <div className="parent">
            <div className="div1">
              <img
                src={eventDetails.banner}
                alt="myPic"
                className="cards_img"
              />
              <h2
                style={{
                  marginTop: "5px",
                }}
              >
                {eventDetails.eventName}
              </h2>
            </div>
            <div className="div2">
              <div className="date">
                <BsCalendarDate fontSize="large" className="icons" />
                <Typography className="iconDes">{eventDetails.date}</Typography>
              </div>
              <div className="time">
                <BsClock fontSize="large" className="icons" />
                <Typography className="iconDes">
                  {eventDetails.startTime} - {eventDetails.endTime}
                </Typography>
              </div>
              <div className="cost">
                <BsCoin fontSize="large" className="icons" />
                <Typography className="iconDes">
                  {"$" + eventDetails.cost}
                </Typography>
              </div>
            </div>
            <div className="div3">
              <Button
                variant="contained"
                size="large"
                color="primary"
                type="submit"
              >
                Get Ticket
              </Button>
            </div>
            <div className="div4">
              <h4 style={{ paddingLeft: "1rem" }}>About Event</h4>
              <div className="div5">
                <h4 style={{ paddingLeft: "1rem" }}>
                  Organizer: {eventDetails.organizer}
                </h4>
                <div
                  style={{
                    padding: "1rem",
                  }}
                >
                  {/* {eventDetails.description} */}
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>
              </div>
              <div className="div6">
                <h4 style={{ paddingLeft: "1rem" }}>Location</h4>
                <div className="loc">
                  <b>State: &nbsp; &nbsp; &nbsp;</b>
                  {eventDetails.state}
                </div>
                <div className="loc">
                  <b>City: &nbsp; &nbsp; &nbsp; &nbsp;</b>
                  {eventDetails.city}
                </div>
                <div className="loc">
                  <b>Venue: &nbsp; &nbsp;</b>
                  {eventDetails.venue}
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
