import React from "react";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
import quiz from "./About.module.css";
const About = () => {
    return (
        <BodyComponent>
            <div className={quiz['content']}>This is a mini-project
                to master Java as back-end and React js as Front End</div>
        </BodyComponent>
    )
}

export default About;