import React from "react";
import {withRouter} from "react-router-dom";
import "./Footer.css";

const Footer = () => {

    return (
        <div className="footer bg-plava mt-5">
            <div className=" text-center">
                <h6 className='text-white py-3 mb-0'> Copyright &copy; DoItWithShark</h6>
            </div>
        </div>
    );
};
export default withRouter(Footer);