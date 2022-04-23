import React, { useState } from "react";
import Input from "../FormReuses/Input";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

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
  jobTitle: "",
};

export default function CreateEvent() {
  <h1>Test11</h1>;

  const validation = () => {
    let temp = {};
    if (!values.jobTitle) {
      temp.jobTitle = "Name required.";
    } else if (!/^[A-Za-z]+$/.test(values.jobTitle)) {
      temp.jobTitle = "Alphabetical letters only.";
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

  var bannerPath = "\\Images\\JobImages\\" + fileName;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      // window.alert(values.city + " dasd");

      console.log(file);
      console.log(fileName);

      var bannerPath = "\\Images\\JobImages\\" + fileName;

      console.log(bannerPath);

      const formData = new FormData();
      formData.append("college", values.college);
      formData.append("jobTitle", values.jobTitle);
      formData.append("jobLevel", values.jobLevel);
      formData.append("vacancy", values.vacancy);
      formData.append("type", values.type);
      formData.append("salary", values.salary);
      formData.append("deadline", values.deadline);
      formData.append("education", values.education);
      formData.append("experience", values.experience);
      formData.append("jobDescription", values.jobDescription);
      formData.append("applyingProcedure", values.applyingProcedure);
      formData.append("otherSpecification", values.otherSpecification);
      formData.append("userID", 3);
      formData.append("formFile", file);
      formData.append("fileName", fileName);

      await axios
        .post(
          "https://localhost:44332/api/Job/SaveJob",
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

  //   console.log(values.eventName, values.eventOrganizer);

  return (
    <div className="SizeDivJ">
      {/* <Main> */}
      <Form onSubmit={handleSubmit}>
        <FormWrapper>
          <Headline>Job Vacancy Form</Headline>
          <RowCol1>
            <Column1>
              <Input
                label="College/Company"
                name="college"
                value={values.college}
                onChange={handleInputChange}
                error={errors.college}
              />
            </Column1>
          </RowCol1>
          <RowCol2>
            <Column1>
              <Input
                label="Job Title"
                name="jobTitle"
                value={values.jobTitle}
                onChange={handleInputChange}
                error={errors.jobTitle}
              />
            </Column1>
            <Column2>
              <Input
                label="Job Level"
                name="jobLevel"
                value={values.jobLevel}
                onChange={handleInputChange}
                error={errors.jobLevel}
              />
            </Column2>
          </RowCol2>
          <RowCol2>
            <Column1>
              <Input
                label="Vacancy"
                name="vacancy"
                value={values.vacancy}
                onChange={handleInputChange}
                error={errors.vacancy}
              />
            </Column1>
            <Column2>
              <Input
                label="Job Type"
                name="type"
                value={values.type}
                onChange={handleInputChange}
                error={errors.type}
              />
            </Column2>
          </RowCol2>
          <RowCol2>
            <Column1>
              <Input
                label="Salary"
                name="salary"
                value={values.salary}
                onChange={handleInputChange}
                error={errors.salary}
              />
            </Column1>
            <Column2>
              <Input
                label="Deadline"
                type="date"
                name="deadline"
                InputLabelProps={{ shrink: true }}
                value={values.deadline}
                onChange={handleInputChange}
                error={errors.deadline}
              />
            </Column2>
          </RowCol2>
          <RowCol2>
            <Column1>
              <Input
                label="Education"
                name="education"
                value={values.education}
                onChange={handleInputChange}
                error={errors.education}
              />
            </Column1>
            <Column2>
              <Input
                label="Experience"
                name="experience"
                value={values.experience}
                onChange={handleInputChange}
                error={errors.experience}
              />
            </Column2>
          </RowCol2>
          <RowCol1>
            <Column1>
              <Input
                label="Job Description"
                multiline={true}
                name="jobDescription"
                rows={5}
                value={values.jobDescription}
                onChange={handleInputChange}
                error={errors.jobDescription}
              />
            </Column1>
          </RowCol1>
          <RowCol1>
            <Column1>
              <Input
                label="Other Specification"
                multiline={true}
                name="otherSpecification"
                rows={5}
                value={values.otherSpecification}
                onChange={handleInputChange}
                error={errors.otherSpecification}
              />
            </Column1>
          </RowCol1>
          <RowCol1>
            <Column1>
              <Input
                label="Applying Procedure"
                multiline={true}
                name="applyingProcedure"
                rows={3}
                value={values.applyingProcedure}
                onChange={handleInputChange}
                error={errors.applyingProcedure}
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
        </FormWrapper>
      </Form>
      {/* </Main> */}
    </div>
  );
}
