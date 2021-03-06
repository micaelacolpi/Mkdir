import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import './Search.css';

export const ProductAdd = () => {
    const history = useHistory();

    const handleManual = (evt) => {
        evt.preventDefault();
        history.push("/usersProducts/create/manual");

    };

    const handleSearch = (evt) => {
        evt.preventDefault();
        history.push("/usersProducts/create/search");

    };

    return (
        <>
            <div className="Add-page" >
                <h2 className="new-product-header">NEW PRODUCT</h2>
                <div className="options"> <button className="search" onClick={handleSearch} >Search for product</button> <h4 className="or">or</h4> <button className="enter" onClick={handleManual}  >Enter Manually</button></div>
            </div>
        </>
    )
};

export default ProductAdd;