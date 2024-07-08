import React from 'react';
import { Container, Typography, Grid, Paper, Box, Button, AppBar, Toolbar } from '@mui/material';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import './LandingPage.css';
import Logoimage from 'C:/Users/namit/MiniProject/Mini_project_frontend/covid-tracker/src/images/logo-no-background.png';
import Powerbiimage from 'C:/Users/namit/MiniProject/Mini_project_frontend/covid-tracker/src/images/Untitled design (1).png';
import landingimage from 'C:/Users/namit/MiniProject/Mini_project_frontend/covid-tracker/src/images/image-removebg-preview (4).png'

const LandingPage = () => {
  return (
    <div className="landing-page">
    <AppBar position="static" className="app-bar">
      <Toolbar className="toolbar">
        <div className="logo-container">
          <img src={Logoimage} alt="Logo" className="logo" />
        </div>
        <div className="nav-links">
          <div className="nav-left">
            <Button color="inherit">Power BI</Button>
            <Button color="inherit">Tableau</Button>
            <Button color="inherit">ThoughtSpot</Button>
          </div>
          <div className="nav-right">
            <Button color="inherit">Dashboard</Button>
            <Button color="inherit">Comparison</Button>
          </div>
        </div>
      </Toolbar>
    </AppBar>
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        <Fade>
          <Box mb={4}>
            <Typography variant="h5" component="h1" gutterBottom className="main-title" align="center" style={{ color: '#000000' }}>
              Comparative Analysis of Visualization Platforms
            </Typography>
            <Box className="content-box">
              <Grid container spacing={2} alignItems="center">
                <Grid item xs={10} md={6.7}>
                  <Typography variant="h5" component="h2" gutterBottom className="sub-title" align="left">
                    Explore and compare the capabilities of leading visualization platforms like Power BI, Tableau, and ThoughtSpot using real-world COVID-19 data. This project, "VizCompare: COVID-19 Insights," 
                    
                    aims to provide a comprehensive comparison of these platforms by embedding detailed dashboards created using each tool. The dataset used includes global COVID-19 statistics such as case numbers, vaccination rates, and mortality rates, sourced from reputable organizations like the World Health Organization (WHO) and Johns Hopkins University.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Fade right>
                  <img src={landingimage} alt="COVID-19 Sample" className="dashboard-image-large move-left" />
                  </Fade>
                </Grid>
              </Grid><Box textAlign="left" className="move-button-left">
  <Button variant="contained" color="primary" size="large" href="#info">
    Learn More
  </Button>
</Box>

            </Box>
            
          </Box>
        </Fade>
        <Grid container spacing={4} id="info">
          <Grid item xs={12} md={6}>
            <Slide left>
              <Paper elevation={3} className="info-card">
                <Typography variant="h4" component="h3" gutterBottom className="card-title">
                  Importance of Visualization in Data Analysis
                </Typography>
                <Typography className="card-text">
                  Effective data visualization helps in making sense of complex data, uncovering trends, and facilitating informed decision-making. Explore how different platforms handle COVID-19 data visualization.
                </Typography>
                <img src="https://img.freepik.com/free-vector/flatten-curve_23-2148554220.jpg?ga=GA1.1.1128039305.1691903481&semt=ais_user" alt="COVID-19 Sample" className="dashboard-image" />
              </Paper>
            </Slide>
          </Grid>
          <Grid item xs={12} md={6}>
            <Slide right>
              <Paper elevation={3} className="info-card">
                <Typography variant="h4" component="h3" gutterBottom className="card-title">
                  Features and Capabilities Comparison
                </Typography>
                <Typography className="card-text">
                  Compare the features and capabilities of Power BI, Tableau, and ThoughtSpot. See how each platform visualizes data differently, helping you choose the best tool for your needs.
                </Typography>
                <img src={Powerbiimage} alt="COVID-19 Sample" className="dashboard-image" style={{ width: '100%', height: '345px' }} />
                </Paper>
            </Slide>
          </Grid>
          {/* Power BI Features Card */}
          <Grid item xs={12} md={6}>
            <Slide left>
              <Paper elevation={3} className="info-card">
                <Typography variant="h4" component="h3" gutterBottom className="card-title">
                  Power BI Features
                </Typography>
                <Typography className="card-text">
                  Data integration, interactive reports, AI integration, data modeling, and dashboards.
                </Typography>
                <img src="https://img.freepik.com/free-vector/dashboard-concept-illustration_114360-4351.jpg?t=st=1720013460~exp=1720017060~hmac=d725acb12cd492a3e9a16844a241e1ee56c8583db7885399fdf1427d072a853a&w=996" alt="Power BI Features" className="dashboard-image" />
              </Paper>
            </Slide>
          </Grid>
          {/* Tableau Features Card */}
          <Grid item xs={12} md={6}>
            <Slide right>
              <Paper elevation={3} className="info-card">
                <Typography variant="h4" component="h3" gutterBottom className="card-title">
                  Tableau Features
                </Typography>
                <Typography className="card-text">
                  Data visualization, drag-and-drop interface, dashboard creation, mobile access, and collaboration.
                </Typography>
                <img src="https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169850.jpg?t=st=1720013401~exp=1720017001~hmac=189f89b454dbcc4fb89353903e02382d82ffb7e568b603e698734a407bb1e7ab&w=996" alt="Tableau Features" className="dashboard-image" />
              </Paper>
            </Slide>
          </Grid>
        </Grid>

        <Fade bottom>
          <Box textAlign="center" mt={4}>
            <Typography variant="h5" component="h2" gutterBottom className="embed-title">
              Embedded Dashboards
            </Typography>
            <Typography className="embed-text">
              Use the navigation menu to access detailed dashboards from Tableau and Power BI, offering in-depth insights and visualizations. See how each platform displays COVID-19 data.
            </Typography>
          </Box>
        </Fade>
      </Container>
    </div>
  );
}

export default LandingPage;
