import React,{useState} from "react";
import { BsPencilFill } from "react-icons/bs";
import About from "../../../pages/About/About";
import Service from "../../../pages/Services/Service";
import ClientModal from "../../modals/client_model/ClientModal";



import classes from "./AboutCard.module.css";
function AboutCard(props) {
    const [modelIsOpen , setModelOpen]=useState(false)

  function name() {
    if(props.xps ==='client'){
        console.log(props.xps);
             setModelOpen(true)
    }
  }

  function closeModel() {
    setModelOpen(false)
}
  return (
    <article className={`${classes.about_card} ${classes.grow}`}>
      <BsPencilFill className={classes.icon} onClick={name} />
      <div>
        <div className={classes.center_icon}>{props.children}</div>
      </div>
      <div className={classes.title}> {props.title} </div>
      <div className={classes.data}> {props.data}</div>
     
    </article>
  );
}

export default AboutCard;
