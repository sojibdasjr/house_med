import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from "../../Images/Not-Found/nontfound.png";

const NotFound = () => {
    return (
        <div>
            <img src={img1} alt="" />
      <div>
        <Link to="/">
          <Button>go back</Button>
        </Link>
      </div>
        </div>
    );
};

export default NotFound;