import React, { useState } from "react";

import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { BsPencilFill } from "react-icons/bs";
import { VscFolderLibrary } from "react-icons/vsc";
import ClientModal from '../../components/modals/client_model/ClientModal'
import classes from "./About.module.css";
import Backdrop from "../../components/modals/client_model/Backdrop";
import ExperienceModal from "../../components/modals/experience_modal/ExperienceModal";
import ProjectModal from "../../components/modals/projects_modal/ProjectModal";

function About() {
  const [clientModelIsOpen, setClientModelIsOpen] = useState(false);
  const [experienceModelIsOpen, setExperienceModelIsOpen] = useState(false);
  const [projectsModelIsOpen, setProjectsModelIsOpen] = useState(false);

  function editClient() {
    console.log('client');
    setClientModelIsOpen(true);
  }
  function editExperience() {
    console.log('xp');
    setExperienceModelIsOpen(true);
  }
  function editProjects() {
    console.log('proj');
    setProjectsModelIsOpen(true);
  }

  function closeModel() {
    setClientModelIsOpen(false);
    setExperienceModelIsOpen(false);
    setProjectsModelIsOpen(false)
  }

  return (
    <section id="about">
      <h3 className={classes.title}>
        <span className={classes.title}> Edit About me</span>
      </h3>
      <div className={`${classes.container} ${classes.about_container}`}>
        <div className={classes.about_content}>
          <div className={classes.about_cards}>

            <article className={`${classes.about_card} ${classes.grow}`}>
              <BsPencilFill className={classes.icon}  onClick={editProjects}/>
              <div>
                <div className={classes.center_icon}>
                  <VscFolderLibrary className={classes.about_icon} />
                </div>
              </div>
              <div className={classes.title}> Projects </div>
              <div className={classes.data}> completed projects</div>
            </article>

            <article className={`${classes.about_card} ${classes.grow}`}>
              <BsPencilFill className={classes.icon} onClick={editExperience} />
              <div>
                <div className={classes.center_icon}>
                  <FaAward className={classes.about_icon} />
                </div>
              </div>
              <div className={classes.title}> experience</div>
              <div className={classes.data}> 1 year 6 months experience</div>
            </article>


            <article className={`${classes.about_card} ${classes.grow}`}>
              <BsPencilFill className={classes.icon}  onClick={editClient}/>
              <div>
                <div className={classes.center_icon}>
                  <FiUser className={classes.about_icon} />
                </div>
              </div>
              <div className={classes.title}> Clients </div>
              <div className={classes.data}>4 clients</div>
            </article>
          </div>
          <div className="card_profile_heading">
            <span className={classes.hd}>Edit summary</span>
          </div>
          <div className={classes.card_profile_details}>
            I am a multi-disciplinary creative professional with a passion for
            digital marketing channels and design. At a young age I got involved
            in multiple projects around personal and corporate communication and
            branding, including my Digital Marketing Youtube channel with over
            1K subscribers. These projects have allowed me to develop a deep
            knowledge and understanding of how the main marketing channels work,
            as well as applying a wide range of skills like illustration, photo
            and video editing, motion graphics, etc. With a year of experience
            in the retail industry and about to finish my double major in
            English and Scenic art studies, I am currently looking for a
            creative digital marketing position where I can be involved in the
            campaign design and strategy process in order to kickstart my career
            in the advertising industry.
          </div>
          <br />
        </div>
      </div>
      {clientModelIsOpen && <ClientModal onClick={closeModel} />}
      {clientModelIsOpen && <Backdrop onClick={closeModel} />}

      {experienceModelIsOpen && <ExperienceModal onClick={closeModel} />}
      {experienceModelIsOpen && <Backdrop onClick={closeModel} />}

      {projectsModelIsOpen && <ProjectModal onClick={closeModel} />}
      {projectsModelIsOpen && <Backdrop onClick={closeModel} />}
    </section>
  );
}

export default About;
