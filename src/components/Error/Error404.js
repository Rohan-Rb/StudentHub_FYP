import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import { FaHome } from "react-icons/fa";
import {ErrorWrapper, ErrorRow, Column1, Column2, TextWrapper,
  Description, ImgWrap, Img} from './ErrorElements';
import error404 from '../Error/Error404.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    //marginTop: "30vh",
    backgroundColor: '#fff',
    height: '100vh',
    '@media (maxWidth: 768px)' : {
      height: '1100px',
      padding: '100px 0',
    },
    '@media (maxWidth: 480px)' : {
      height: '800px',
      padding: '100px 0',
    }
  },

  alertMsg: {
    marginBottom: '16px',
    fontWeight: '700',
  },

  button: {
    backgroundColor: '#3dc21b',
    color: '#000000',
    cursor: 'pointer',
    padding: '16px 31px',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: '#5cdf2a',
    }
  },
}));

const NotFoundView = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="100%" className={classes.root}>
      <ErrorWrapper>
        <ErrorRow>
          <Column1>
              <TextWrapper>
                  <Typography align="center" variant="h3" className={classes.alertMsg}>
                  404: Page Not Found!
                  </Typography>
                  <Description>You didn't break the internet, 
                    but we can't find what you are looking for.</Description>
                  <Link to="/" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="container"
                    className={classes.button}
                    startIcon={<FaHome />}
                  >
                    Go to Home
                  </Button>
                  </Link>
                  
              </TextWrapper>
          </Column1>
          <Column2>
              <ImgWrap>
                  <Img src={error404} />
              </ImgWrap>
          </Column2>
        </ErrorRow>
      </ErrorWrapper>
    </Container>
  );
};

export default NotFoundView;