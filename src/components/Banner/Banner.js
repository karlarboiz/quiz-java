import React from "react";
import { Link } from 'react-router-dom';

const Error = ({header,content,refRoute,buttonLabel})=>{

    <React.Fragment>
        <div>
          <h1>{header}</h1>
          <p>{content}</p>
          <Link to={refRoute} relative=''
          variant="primary">{buttonLabel}</Link>
			
        </div>
    </React.Fragment>
}

export default Banner;