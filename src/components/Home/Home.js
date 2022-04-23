import React, { useEffect } from "react";
import "./home.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MdExpandMore } from "react-icons/md";
import axios from "axios";

const Home = () => {
  const [user, setUser] = React.useState("");

  useEffect(() => {
    axios

      .get("https://localhost:44332/api/Auth/user", { withCredentials: true })
      .then((response) => {
        setUser(response.data.firstName);
        console.log(response);
      });
  }, []);

  return (
    <div className="homeParent">
      <h1>{user ? "Hi " + user : "You are not logged in"}</h1>
      <div className="title">
        <h1>Why Study In The USA?</h1>
      </div>
      <div className="desc">
        <p>
          There are a great number of reasons that students choose to study in
          the United States. Among them are quality, choice, and value.
        </p>
        <h3>Quality</h3>
        <p>
          The United States has some of the world’s finest colleges and
          universities. Worldwide, they are reputed for quality programs,
          faculty, facility, and resources. U.S. higher education accreditation
          systems are in place to ensure quality standards.
        </p>
        <h3>Choice</h3>
        <p>
          The U.S. higher education system offers the world’s largest choice in
          types of institutions, academic and social environments, entry
          requirements, degrees, and fields of study. Currently, there are more
          than 4,000 institutions of higher education in the United States.
        </p>
        <h3>Value</h3>
        <p>
          Considering a U.S. degree as an investment in your future, it offers
          great value for the money. There is a wide range of college costs, as
          well as some excellent scholarships available from colleges and
          universities.
        </p>
        <p>
          In the 2016-17 academic year, there were 1,078,882 international
          students studying in the United States. With 11,607 students from
          Nepal, a 20.1% increase from the previous year, Nepal ranks as the
          13th largest country of origin of international students in the United
          States (Source: Open Doors 2017 Report on International Educational
          Exchange. New York: Institute of International Education, New York).
        </p>

        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="title">
              <h1>
                Prerequisites: Is U.S. Higher Education Appropriate For You?
              </h1>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="desc">
              <p>
                Studying in the United States is a big decision, and you must
                consider whether it is an appropriate one. Evaluate if you are a
                suitable candidate by considering the following factors which we
                call pre-requisites for studying in the USA.
              </p>
              <h3>Adequate funding</h3>
              <p>
                Studying in the U.S. is expensive. Colleges and universities in
                the U.S. cost between $12,000 and $65,000 per year. A bachelor’s
                program is typically a four year course of study, a master’s
                program is usually two years, and a PhD program is generally
                four to eight years. If you do not have this amount of money
                available, you will need to apply for a scholarship.
              </p>
              <h3>Strong academic background</h3>
              <p>
                If you have a strong academic record, your chances of admission
                and scholarship at U.S. colleges and universities increase.
              </p>
              <h3>English language skills</h3>
              <p>
                In order to succeed as a student in the U.S., it is integral to
                have a strong command over English.
              </p>
              <h3>Standardized exams</h3>
              <p>
                Most U.S. colleges and universities require TOEFL. Some
                undergraduate institutions additionally require SAT or ACT. Some
                graduate programs require GRE or GMAT.
              </p>
              <h3>Student visa</h3>
              <p>
                You’ll need this to travel to the U.S. Attend USEF’s ‘Student
                Visa Info Session’ to learn more about student visas and tips on
                visa interview success.
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="title">
              <h1>U.S. Educational System &amp; Where You Fit In</h1>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="desc">
              <p>
                There are some similarities and a lot of differences between the
                education systems in Nepal and the U.S. For instance, we have
                3-year as well as 4-year bachelor’s programs in Nepal. In the
                U.S., however, bachelor’s programs are no shorter than four
                years. Therefore, it is important to understand the education
                system in the U.S. and to know where you fit in.
              </p>
              <h3>High School</h3>
              <p>
                In Nepal, our education system uses ‘board exams,’ where
                students take the same set of exams administered by an
                educational or university board. In Nepal, we have the SLC board
                exam which is taken at the end of grade ten. Known as the ‘iron
                gate’, a lot of importance is given to the SLC. After SLC,
                students typically join a Plus Two, A-Levels, PCL or
                Intermediate Level program.
              </p>
              <p>
                By contrast, high school in the U.S. is grades nine through
                twelve. Furthermore, each school is autonomous and students do
                not take board exams in the U.S. In general, a student who has
                successfully completed Plus Two, A-Levels, PCL, Intermediate
                Level, or a similar program, can be compared with a high school
                graduate from the U.S. system.
              </p>
              <h3>Undergraduate Studies</h3>
              <p>
                We used to have a 2-year bachelor’s program in Nepal. We now
                have many 3-year bachelor’s programs, 4-year bachelor’s
                programs, and some programs which are even longer in duration.
                In contrast, bachelor’s programs in the U.S. are no shorter than
                four years and are one form of ‘Undergraduate’ programs.
                Students who have completed twelve years of education are
                eligible to join undergraduate programs in the U.S. There is a
                name given to each of the four years of bachelor’s study –
                namely freshman, sophomore, junior and senior years.
              </p>
              <p>
                There exists another form of undergraduate education in the
                U.S., which is the associate’s degree. An associate’s degree is
                a 2-year degree earned at a community college. Community
                colleges usually serve a small community around them. Per year
                college tuition is usually much less expensive than per year
                tuition at a 4-year college. Students who opt for an associate’s
                degree may choose upon completion to transfer to a 4-year
                college/university in the U.S. to continue studies for a
                bachelor’s degree.
              </p>
              <p>
                Hence, students seeking bachelor’s degrees in the U.S. have two
                options. They can either directly join a 4-year bachelor’s
                program, or study at a community college and then transfer to a
                4-year bachelor’s program. Students should carefully evaluate
                these two options. You may find that studying at a community
                college is less expensive, but then it is generally difficult to
                obtain scholarship when you transfer to the 4-year institution.
                Furthermore, community colleges may not have housing and
                students might have to live off campus.
              </p>
              <h3>Graduate Studies</h3>
              <p>
                We have M.Phil and Post Graduate degrees in Nepal that do not
                exist in the U.S. Both master’s and PhD level studies are
                referred to as ‘Graduate’ studies in the U.S. A master’s degree
                is usually earned after two years of study beyond a 4-year
                bachelor’s program and a PhD degree takes somewhere between four
                to eight years.
              </p>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div className="title">
              <h1>What to do if you have a 3-year bachelor’s ?</h1>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            <div className="desc">
              <p>
                Since no bachelor’s program in the U.S. is shorter than four
                years, a student intending to join a graduate program in the
                U.S. should have at least sixteen years of education in the
                relevant field. Students who have 2 or 3-year bachelor’s degrees
                or who are currently enrolled in a bachelor’s program have three
                options to choose from:
              </p>
              <Accordion>
                <AccordionSummary
                  expandIcon={<MdExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h3>Option 1</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    Complete a master’s degree in the relevant field and then
                    apply for graduate study in the U.S. In some cases, students
                    will apply for the master’s program again and in some cases,
                    depending upon the institution, students can directly apply
                    for the PhD program. Contact institutions directly to know
                    which program you are eligible for.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<MdExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h3>Option 2</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    Transfer to an undergraduate program in the U.S. With this
                    option, you can earn an undergraduate degree from the U.S.
                    However, this option could be costly for some students as it
                    might take between one to three years to complete the
                    undergraduate degree. It can take up to three years because
                    different colleges have different graduation requirements
                    and you may not earn transfer credit for some of the
                    coursework you have completed in Nepal.
                  </p>
                  <p>
                    Students are encouraged to weigh Option 1 and Option 2 and
                    opt for the one that is best for them.
                  </p>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<MdExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h3>Option 3</h3>
                </AccordionSummary>
                <AccordionDetails>
                  <p>
                    A third option is available for students applying for an MBA
                    in the U.S. You could apply for a bridge program (sometimes
                    referred to as a pre-MBA) in the U.S. Very few colleges
                    provide such bridge programs and you have to contact the
                    college directly to find out the requirements for admission.
                    A bridge program generally runs for one to one and a half
                    years and you generally will need to complete your MBA at
                    the same school.
                  </p>
                </AccordionDetails>
              </Accordion>
            </div>
          </AccordionDetails>
        </Accordion>
        <div className="titleb">
          <h1>Applying to U.S. Colleges and Universities</h1>
        </div>
        <div className="desc">
          <p>
            The terms “college,” “university,” and “school” are used
            interchangeably when we refer to degree-granting institutions
            offering higher education in the United States. For simplicity,
            we’ll use the term “college.”
          </p>
          <p>
            To apply to colleges in the United States, you should start 12-18
            months in advance of when you plan to begin your studies. If you are
            an undergraduate applicant (applying for a bachelor’s degree),
            starting you application process by the beginning of Class 12 will
            help ensure that you do not have a gap year between Class 12 and the
            beginning of your undergraduate program in the U.S. Similarly,
            graduate applicants, those applying for a master’s or a PhD, should
            also start their application process 12-18 months in advance.
          </p>
          <p>
            Why does it take so long to apply to American colleges? In addition
            to having to carefully research and choose colleges, prepare for and
            take the standardized exams, you will need to meet each college’s
            application deadline date. Some deadlines – especially for colleges
            that are competitive and colleges that offer good scholarships – are
            eight or nine months in advance of the start of class.
          </p>
          <p>
            There are two semesters for which you can apply for admission, the
            fall semester (classes start in August or September) and the spring
            semester (classes start in January). All colleges offer admission in
            fall, as it is the beginning of the academic year. Not all colleges
            offer admissions in spring. If you are searching for a scholarship,
            the best semester to apply for is fall (generally, not much
            scholarship is available in spring). The application deadline date
            depends on which semester you apply for, and which college you are
            choosing.
          </p>
        </div>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>1. Choose between 5 and 10 colleges to apply to.</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              You must find colleges that are the best fit for you. Carefully
              research criteria such as your field of study, cost, scholarship
              opportunities, location, competitiveness, and admissions
              requirements. Applying to 5-10 well chosen colleges will give you
              a higher chance of admission than just applying to one or two.
              Certainly, you can choose to apply to more than 10 colleges if you
              like, but do ensure you are sending quality applications to all!
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>2. Access the colleges’ application forms</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Access the colleges’ application forms on their websites. It’s
              free and easy to access application forms and eligibility and
              application requirements.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>3. Register for and take the standardized exams.</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              All students must take at least the TOEFL (some colleges also
              accept IELTS), which is a test that measures your English language
              skills.
            </p>
            <p>
              We highly recommend that all undergraduate applicants also take
              the SAT (Reasoning Test) or ACT. Both exams measure your English
              and Math skills; ACT additionally measures your Science skills.
              USEF also highly recommends taking the SAT Subject Tests, which
              are subject-specific tests that demonstrate to a U.S. college that
              you have skills in a certain subject. Good scores on the SAT / ACT
              and SAT Subject Tests will be very important especially if you are
              applying to competitive colleges and for scholarships.
              Furthermore, for many American colleges, submission of a SAT/ ACT
              score is required in order to apply for admission. Therefore, it
              is in your best interest to take not only TOEFL, but also SAT /
              ACT and SAT Subject Tests.
            </p>
            <p>
              We recommend graduate applicants take the GRE (Graduate Record
              Examination) or the GMAT (Graduate Management Admissions Test) in
              addition to the TOEFL. Student who are applying for an MBA or
              similar degree usually take the GMAT, while all other graduate
              applicants take the GRE. Like the SAT for undergraduates, the GRE/
              GMAT may not be required by all colleges, but having good scores
              will certainly boost your chances of admission and scholarships.
            </p>
            <p>
              To obtain information about a standardized test such as TOEFL,
              SAT, ACT, GRE, or GMAT, refer to the test’s official website (
              <a href="www.ets.org/toefl">www.ets.org/toefl</a>&nbsp; for TOEFL,{" "}
              <a href="www.collegeboard.com">www.collegeboard.com</a> &nbsp; for
              SAT, <a href="www.actstudent.org">www.actstudent.org</a> &nbsp;
              for ACT, <a href="www.ets.org/gre">www.ets.org/gre</a> &nbsp; for
              GRE, and <a href="www.mba.com">www.mba.com</a> &nbsp; for GMAT).
              It is recommended that you register at least two months before
              your preferred test date. Many students spend a lot of time
              preparing for these exams: make sure you allocate enough time for
              preparation.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>4. Send your applications to the colleges.</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              Colleges must receive your complete application by the deadline
              date.
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>
              5. If you are accepted, you will receive an I-20 from the college
            </h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              An I-20 contains information about you, the college, and the
              amount you are expected to pay each year. An I-20 is required to
              apply for a student visa to the U.S..
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<MdExpandMore />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <h3>6. Choose the best I-20 and apply for a student visa.</h3>
          </AccordionSummary>
          <AccordionDetails>
            <p>
              You will need to identify one I-20 to use when you apply for a
              student visa at the U.S. Embassy in Kathmandu.
            </p>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default Home;
