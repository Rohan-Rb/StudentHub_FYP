import React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
// import Card from "./event"
// import EventData from "./data";
import "./event.css";
import EventDetails from "./eventDetailsModal";
import { makeStyles } from "@mui/styles";

import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "200px",
    cursor: "pointer",
    // padding: "16px 31px",
    fontSize: "16px",
    "&:hover": {
      backgroundColor: "#88d2ec",
      color: "#000000",
    },
  },
}));

const baseURL = "https://localhost:44332/api/Event/GetAllEvents";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Ncard() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [eventpost, seteventPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      seteventPost(response.data);
      // console.log(response)
    });
  }, []);

  // console.log("response")
  // console.log(eventpost)

  if (!eventpost) return null;

  const events = eventpost.map((data) => {
    console.log(data.eventID);
    return (
      <div className="card" key={data.eventID}>
        <img src={data.banner} alt="myPic" className="card_img" />

        <div className="card_info">
          <h2 className="event_name">{data.eventName} </h2>

          <h3 className="event_date">{data.date} </h3>
          <h3 className="event_location">{data.venue} </h3>

          {/* <a href={data.ticketlink}> */}
          <div>
            {/* <button onClick={handleOpen}> View Details</button> */}
            <EventDetails id={data.eventID} />
          </div>
          {/* </a> */}
        </div>
      </div>
    );

    {
      /* </div> */
    }
  });

  return (
    <>
      <div className="topev">
        <Box sx={{ minWidth: 200 }} className="selectCategory">
          <FormControl fullWidth>
            <InputLabel id="select-label">Category</InputLabel>
            <Select
              labelId="select-label"
              id="select"
              value={age}
              label="Category"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          // className="Createbtn"
          variant="contained"
          size="large"
          color="primary"
          type="submit"
          // className="btnSubmit"
          className={classes.button}
          component={Link}
          to="./CreateEventForm"
        >
          Create Event
        </Button>
      </div>
      <div className="cards">{events}</div>
    </>
  );
}
