import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { ABOUT_TXT } from "../../constants/about";
import ContactInfo from "../shared/ContactInfo";
import Title from "../shared/Title";
import "./About.css";

const About = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === "dark" ? "#1A2027" : "rgba(105, 94, 147, 0.3)",
    ...theme.typography.body2,
    padding: "1.2rem",
    textAlign: "center",
    color: "rgb(219, 219, 219)",
    fontSize: "0.85em",
    lineHeight: 1.5,
    letterSpacing: "0.07em",
    borderRadius: "5px"
  }));

  const aboutGrid = (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} columns={12}>
        <Grid item xs={3}>
          <Item>{ABOUT_TXT[0]}</Item>
        </Grid>
        <Grid item xs={5}>
          <Item>{ABOUT_TXT[1]}</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>{ABOUT_TXT[2]}</Item>
        </Grid>
        <Grid item xs={5} md={5}>
          <Item styled={{ marginLeft: "auto" }}>{ABOUT_TXT[3]}</Item>
        </Grid>
        <Grid item xs={5} md={5}>
          <Item styled={{ marginRight: "auto" }}>{ABOUT_TXT[4]}</Item>
        </Grid>
        <Grid item xs={4} md={4}>
          <Item>{ABOUT_TXT[5]}</Item>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <div className="about-main-wrapper">
      <Title title="About Me" />
      <article className="about-container">{aboutGrid}</article>
      <ContactInfo />
    </div>
  );
};

export default About;
