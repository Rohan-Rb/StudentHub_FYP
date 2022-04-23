import "./App.css";
import Navbar from "./components/navBar/navIndex";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Footer from "./components/Footer/footer";
import Contact from "./components/ContactUs/Contact";
import MainI from "./components/Events/MainI";
import NotFoundView from "./components/Error/Error404";
import Job from "./components/Jobs/Job";
import CreateJobForm from "./components/Jobs/CreateJobForm";
import CreateEventForm from "./components/Events/CreateEventForm";
import Home from "./components/Home/Home";
import SignIn from "./components/Home/SignIn";
import SignUp from "./components/Home/SignUp";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const theme = createTheme();
  const [user, setUser] = useState("");

  useEffect(() => {
    axios

      .get("https://localhost:44332/api/Auth/user", { withCredentials: true })
      .then((response) => {
        setUser(response.data.firstName);
        console.log(response);
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/events" element={<MainI />} />
          <Route path="/events/CreateEventForm" element={<CreateEventForm />} />
          <Route path="/jobs/CreateJobForm" element={<CreateJobForm />} />
          <Route path="/jobs" element={<Job />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
