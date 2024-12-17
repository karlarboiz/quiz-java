import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
import quiz from "./Error.module.css";
import Sphere from "../../components/Sphere/Sphere";

const Error = () => {

    const error = useRouteError();
    let title = "An error occured";
    let content = "Something went wrong";
    
    if (error.status === '500') {
        title = "404- Page not found";
        content = "The page you are looking for cannot be found"
    }

    if (error.status === '404') {
        content = error.data.message;
    }
    return (
        <BodyComponent>
            <Sphere/>
            <section className={quiz['error-page']}>
                <div className={quiz["error-status"]}>{error.status}</div>
                <h1 className={quiz["title"]}>{title}</h1>
                <p className={quiz["content"]}>{content}</p>
                <Link to="/" replace
                    variant="primary">Home Page</Link>
            </section>


        </BodyComponent>
    )
}

export default Error