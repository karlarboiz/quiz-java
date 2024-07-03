import React from "react";
import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";
import BodyComponent from "../../components/BodyComponent/BodyComponent";
import quiz from "./Error.module.css";
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

            <section className={quiz['error-page']}>
                <h1>{title}</h1>
                <p>{content}</p>
                <Link to="/" replace
                    variant="primary">Page Inaccessible</Link>
            </section>


        </BodyComponent>
    )
}

export default Error