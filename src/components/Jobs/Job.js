import React from "react";
import axios from "axios";
import "./Jobs.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import JobDetails from "./JobDetailsModal";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    // backgroundColor: "#3dc21b",
    // color: "#000000",
    width: "200px",
    cursor: "pointer",
    // padding: "16px 31px",
    fontSize: "14px",
    "&:hover": {
      backgroundColor: "#88d2ec",
      color: "#000000",
    },
  },
}));

const baseURL = "https://localhost:44332/api/Job/GetAllJob";

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

export default function JobCard() {
  const classes = useStyles();
  const [age, setAge] = React.useState("");

  const handleChange = (job) => {
    setAge(job.target.value);
  };

  const [jobpost, setjobPost] = React.useState(null);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setjobPost(response.data);
      // console.log(response)
    });
  }, []);

  if (!jobpost) return null;

  const jobs = jobpost.map((data) => {
    console.log(data.eventID);
    return (
      // <div className="card" key={data.eventID}>
      //   <img src={data.banner} alt="myPic" className="card_img" />

      //   <div className="card_info">
      //     <h2 className="event_name">{data.eventName} </h2>

      //     <h3 className="event_date">{data.date} </h3>
      //     <h3 className="event_location">{data.venue} </h3>

      //     {/* <a href={data.ticketlink}> */}
      //     <div>
      //       <button onClick={handleOpen}> View Details</button>
      //       {/* <EventDetails id={data.eventID} /> */}
      //     </div>
      //     {/* </a> */}
      //   </div>
      // </div>

      <div key={data.jobId}>
        <div className="jobCard">
          <img src={data.jobBanner} alt="myPic" className="jobCard_img" />

          <div className="jobCard_info">
            <h2 className="job_title">{data.jobTitle}</h2>

            <h3 className="job_type">{data.type} </h3>
            <h3 className="vacancy">Vacancy: {data.vacancy} </h3>
            <h3 className="company">{data.college} </h3>

            <div>
              {/* <button onClick={handleOpen}> View Details</button> */}
              <JobDetails id={data.jobId} />
            </div>
          </div>
        </div>
      </div>
    );

    {
      /* </div> */
    }
  });

  return (
    <>
      <div className="top">
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
          to="./CreateJobForm"
        >
          Create Vacancy
        </Button>
      </div>
      <div className="jobCards">{jobs}</div>
    </>
  );

  // return (
  //   <>
  //     <div className="top">
  //       <Box sx={{ minWidth: 200 }} className="selectCategory">
  //         <FormControl fullWidth>
  //           <InputLabel id="select-label">Category</InputLabel>
  //           <Select
  //             labelId="select-label"
  //             id="select"
  //             value={age}
  //             label="Category"
  //             onChange={handleChange}
  //           >
  //             <MenuItem value={10}>Ten</MenuItem>
  //             <MenuItem value={20}>Twenty</MenuItem>
  //             <MenuItem value={30}>Thirty</MenuItem>
  //           </Select>
  //         </FormControl>
  //       </Box>
  //       <Button
  //         // className="Createbtn"
  //         variant="contained"
  //         size="large"
  //         color="primary"
  //         type="submit"
  //         // className="btnSubmit"
  //         className={classes.button}
  //       >
  //         Create Event
  //       </Button>
  //     </div>

  //     <div className="jobCards">
  //       <div className="jobCard">
  //         <img
  //           src="https://static.parade.com/wp-content/uploads/2021/11/new-year-wishes.jpg"
  //           alt="myPic"
  //           className="jobCard_img"
  //         />

  //         <div className="jobCard_info">
  //           <h2 className="job_title">sadasd</h2>

  //           <h3 className="job_type">dsadas </h3>
  //           <h3 className="company">sadasd </h3>

  //           <a href="https://static.parade.com">
  //             <button> View Details</button>
  //           </a>
  //         </div>
  //       </div>
  //     </div>

  //   </>
  // );
}
