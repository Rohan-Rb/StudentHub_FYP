import React, { useState } from "react";
import Input from "../FormReuses/Input";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Footer from "../Footer/footer";
import {
  Headline,
  FormWrapper,
  RowCol1,
  RowCol2,
  RowCol3,
  RowCol4,
  Column1,
  Column2,
  Column3,
  Column4,
  RowCol5,
  RowCol6,
} from "../ContactUs/ContactElements";
import { FormReuse, Form } from "../FormReuses/FormReuse";
import axios from "axios";
// import { useState } from "react";

const initialFieldValues = {
  id: 0,
  fullName: "",
  email: "",
  mobileNo: "",
  message: "",
  eventName: "",
};

export default function CreateEvent() {
  <h1>Test11</h1>;

  const validation = () => {
    let temp = {};
    if (!values.eventName) {
      temp.eventName = "Name required.";
    } else if (!/^[A-Za-z]+$/.test(values.eventName)) {
      temp.eventName = "Alphabetical letters only.";
    }
    setErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  const { values, setValues, handleInputChange, errors, setErrors, reset } =
    FormReuse(initialFieldValues);

  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");

  const saveFile = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  var bannerPath = "\\Images\\EventImages\\" + fileName;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      // window.alert(values.city + " dasd");

      console.log(file);
      console.log(fileName);

      var bannerPath = "\\Images\\EventImages\\" + fileName;

      console.log(bannerPath);

      const formData = new FormData();
      formData.append("eventName", values.eventName);
      formData.append("organizer", values.eventOrganizer);
      formData.append("eventType", values.eventType);
      formData.append("date", values.date);
      formData.append("startTime", values.startTime);
      formData.append("endTime", values.endTime);
      formData.append("cost", values.costPerTicket);
      formData.append("city", values.city);
      formData.append("state", values.state);
      formData.append("venue", values.venue);
      formData.append("ticketLink", values.buyTicket);
      formData.append("description", values.description);
      formData.append("userID", 3);
      formData.append("formFile", file);
      formData.append("fileName", fileName);

      await axios
        .post(
          "https://localhost:44332/api/Event/SaveEvents",
          formData
          // {
          //   eventName: values.eventName,
          //   organizer: values.eventOrganizer,
          //   eventType: values.eventType,
          //   date: values.date,
          //   startTime: values.startTime,
          //   endTime: values.endTime,
          //   cost: values.costPerTicket,
          //   city: values.city,
          //   state: values.state,
          //   venue: values.venue,
          //   ticketLink: values.buyTicket,
          //   description: values.description,
          //   userID: 3,
          //   formFile: file,
          //   fileName: fileName,
          // }
        )
        .then(
          (response) => {
            console.log(response);
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };

  const [value, setValue] = React.useState(null);

  console.log(values.eventName, values.eventOrganizer);

  return (
    <div className="SizeDiv">
      {/* <Main> */}
      <Form onSubmit={handleSubmit}>
        <FormWrapper>
          <Headline>Event Registration Form</Headline>
          <RowCol1>
            <Column1>
              <Input
                label="Event Name"
                name="eventName"
                value={values.eventName}
                onChange={handleInputChange}
                error={errors.eventName}
              />
            </Column1>
          </RowCol1>
          <RowCol2>
            <Column1>
              <Input
                label="Event Organizer"
                name="eventOrganizer"
                value={values.eventOrganizer}
                onChange={handleInputChange}
                error={errors.eventOrganizer}
              />
            </Column1>
            <Column2>
              <Input
                label="Event Type"
                name="eventType"
                value={values.eventType}
                onChange={handleInputChange}
                error={errors.eventType}
              />
            </Column2>
          </RowCol2>
          <RowCol4>
            <Column1>
              <Input
                label="Date"
                type="date"
                name="date"
                InputLabelProps={{ shrink: true }}
                value={values.date}
                onChange={handleInputChange}
                error={errors.date}
              />
            </Column1>
            <Column2>
              <Input
                label="Start Time"
                name="startTime"
                type="time"
                InputLabelProps={{ shrink: true }}
                value={values.startTime}
                onChange={handleInputChange}
                error={errors.startTime}
              />
            </Column2>
            <Column3>
              <Input
                label="End Time"
                name="endTime"
                type="time"
                InputLabelProps={{ shrink: true }}
                value={values.endTime}
                onChange={handleInputChange}
                error={errors.endTime}
              />
            </Column3>
            <Column4>
              <Input
                label="$Cost/Ticket"
                name="costPerTicket"
                value={values.costPerTicket}
                onChange={handleInputChange}
                error={errors.costPerTicket}
              />
            </Column4>
          </RowCol4>
          <RowCol3>
            <Column1>
              <Input
                label="Venue"
                name="venue"
                value={values.venue}
                onChange={handleInputChange}
                error={errors.venue}
              />
            </Column1>
            <Column2>
              <Input
                label="City"
                name="city"
                value={values.city}
                onChange={handleInputChange}
                error={errors.city}
              />
            </Column2>
            <Column3>
              <Input
                label="State"
                name="state"
                value={values.state}
                onChange={handleInputChange}
                error={errors.state}
              />
            </Column3>
          </RowCol3>
          {/* <RowCol1>
            <Column1>
              <Input
                label="Auto Address"
                name="autoAdd"
                value={values.autoAdd}
                onChange={handleInputChange}
                error={errors.autoAdd}
              />
            </Column1>
          </RowCol1> */}
          <RowCol2>
            <Column1>
              <Input
                label="Buy Ticket Link"
                name="buyTicket"
                value={values.buyTicket}
                onChange={handleInputChange}
                error={errors.buyTicket}
              />
            </Column1>
            <Column2>
              {/* <Input
                label="Refund"
                name="refund"
                value={values.refund}
                onChange={handleInputChange}
                error={errors.refund}
              /> */}
              <FormControl>
                <FormLabel>Refund</FormLabel>
                <RadioGroup row>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
              </FormControl>
            </Column2>
          </RowCol2>
          <RowCol1>
            <Column1>
              <Input
                label="Description"
                multiline={true}
                name="description"
                rows={5}
                value={values.description}
                onChange={handleInputChange}
                error={errors.description}
              />
            </Column1>
          </RowCol1>
          {/* <input type="file" onChange={saveFile} /> */}
          <Button variant="contained" component="label">
            Upload File
            <input type="file" hidden onChange={saveFile} />
          </Button>
          <RowCol6>
            <Column1>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                type="submit"
              >
                Submit
              </Button>
            </Column1>
            <Column2>
              <Button
                variant="contained"
                size="large"
                color="inherit"
                type="reset"
                onClick={reset}
              >
                Reset
              </Button>
            </Column2>
          </RowCol6>

          <input type="button" value="upload" />
        </FormWrapper>
      </Form>
      {/* </Main> */}
    </div>
  );
}
