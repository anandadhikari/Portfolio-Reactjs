/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Quiz from '../../assets/recentprojects/quiz.png';
import Sneakers from '../../assets/recentprojects/sneakers.png';
import Team from '../../assets/recentprojects/team.png';
import Portfolio from '../../assets/recentprojects/portfolio.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw'
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
    { 
      id: 1,
      title: 'React Quiz', 
      description: `Designed and developed a ReactJS Quiz 
      application.`,
      alter: 'React Quiz',
      image: `${Quiz}`,
      url: "http://quiz-reactjs.herokuapp.com/"
    },
    { 
      id: 2,
      title: 'Sneakers', 
      description: `An E-Commerce web app that uses Stripe for payments.Built using MERN stack.`,
      alter: 'Sneakers',
      image: `${Sneakers}`,
      url: "https://sneakers-mern.herokuapp.com/"
    },
    { 
      id: 3,
      title: 'Team Management', 
      description: `It’s a basic team management application that can create team members and assign team leads and form different teams.Build Using React and SpringBoot`,
      alter: 'Team Management',
      image: `${Team}`,
      url: "https://github.com/anandadhikari/Team_Management/"
    },
    { 
      id: 4,
      title: 'Portfolio', 
      description: `A portfolio project built using React Js.`,
      alter: 'Portfolio',
      image: `${Portfolio}`,
      url: "https://portfolio-reactjs-tau.vercel.app/"
    }
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
            <a href={ project.url } target="_blank" rel="noopener noreferrer">
            <img src={ project.image } alt={ project.alter }/>
            </a>  
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
