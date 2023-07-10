import React from "react";
import { Typography, Paper } from "@mui/material";
import "../Home.css";
import "./AboutUs.css";
import ProfileUser from "./ProfileUser";
import saleem from "../images/saleem.jpeg";
import asim from "../images/asim.jpeg";
import naveen from "../images/naveen.jpeg"
import esha from "../images/esha.jpeg"
import Footer from "../Footer/Footer";
export default function AboutUs() {
  return (
    <div className="container mb-5">
      <Paper
        elevation={3}
        style={{ padding: "20px" }}
        sx={{ mt: 5 }}
        data-testid="head"
      >
        <Typography variant="h4" gutterBottom className="text-center">
          About <span className="I">S</span>phinx <span className="I">I</span>
          nventory
        </Typography>
        <Typography variant="body1" gutterBottom>
          Sphinx is a leading provider of cutting-edge Software-as-a-Service
          (SaaS) solutions, specializing in revolutionizing after-sales
          experiences through our advanced inventory system. We recognize the
          limitations of existing inventory systems in terms of data analysis
          and decision-making capabilities, which inspired us to develop Sphinx.
        </Typography>
        <Typography variant="body1" gutterBottom>
          At Sphinx, we leverage state-of-the-art Economic Order Quantity (EOQ)
          approach to provide businesses with valuable insights for informed
          decision-making. Our solution is built upon a microservices
          architecture, incorporating multi-tenancy, Docker, and Infrastructure
          as Code principles, to ensure scalability, flexibility, and data
          isolation for each tenant.
        </Typography>
        <Typography variant="body1" gutterBottom>
          One of our key strengths is the integration of Swagger API
          documentation, facilitating seamless communication and integration
          with external systems. We understand the importance of smooth
          collaboration between different components, and our robust API
          documentation streamlines the process.
        </Typography>
        <Typography variant="body1" gutterBottom>
          Introducing Helios, our innovative architecture that utilizes CI/CD
          pipelines powered by GitHub Actions. This approach enables us to
          streamline development to deployment process, ensuring continuous
          integration and deployment. With Helios, businesses can experience
          improved service uptime, enhanced multi-region and multi-environment
          deployments, and optimized resource utilization.
        </Typography>

        <Typography variant="body1" gutterBottom>
          By choosing Sphinx, our clients gain significant advantages, including
          improved inventory management practices, better decision-making
          capabilities, and enhanced resource optimization. We are committed to
          providing a seamless after-sales experience for businesses and their
          customers. Thank you for choosing Tuple Inventory Management!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Join us on this journey as we redefine inventory management,
          empowering businesses with valuable insights and exceptional
          after-sales experiences. With Sphinx, you can expect unparalleled
          support, continuous innovation, and a dedicated team focused on your
          success. Experience the transformative power of Sphinx and unlock the
          true potential of your inventory operations.{" "}
        </Typography>
        <Typography variant="body1" gutterBottom>
          Thank you for choosing Sphinx Inventory
        </Typography>
      </Paper>
      <div className=" container row d-flex justify-content-around">
        <h1 className="h1 text-center mt-5 ">Meet Our Team</h1>
        <div className="col-lg-6">
          <ProfileUser
            name={"saleem"}
            about={"FullStack Developer"}
            age={"21"}
            regNo={"20GACSD003"}
            imageSrc={saleem}
          />
        </div>
        <div className="col-lg-6 ">
          <ProfileUser
            name={"Mohd Asim"}
            about={"DevOps Engineer"}
            age={"21"}
            regNo={"19GACSE030"}
            imageSrc={asim}
          />
        </div>
        <div className="col-lg-6 ">
          <ProfileUser
            name={"Naveen"}
            about={"QA Engineer"}
            age={"21"}
            regNo={"20GACSD003"}
            imageSrc={naveen}
          />
        </div>
        <div className="col-lg-6 ">
          <ProfileUser
            name={"Esahachandra"}
            about={"Content Writer"}
            age={"21"}
            regNo={"20GACSD001"}
            imageSrc={esha}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
