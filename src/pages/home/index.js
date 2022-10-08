import React, { Fragment } from "react";
import Navbar from "../../components/nav";
import Footer from "../../components/footer";
import "./index.css";

const Home = () => {
    return (
        <Fragment>
            <Navbar />
            <Body />
            <Footer />
        </Fragment>
    );
}

const Body = () => {
    return (
        <section className="hero col">
            <strong>We will cnvert your Binary Number to Decimal</strong>
            <h2 className="heroHeadline">Enter your Binary Number Here</h2>
            <div className="row">
                <input type="text" name="txtBinaryNum" className="txtBinaryNum" id="txtBinaryNum" />
                <button className="btnSubmitBinaryNum btn" id="btnSubmitBinaryNum">GO</button>
            </div>
        </section>
    );
}

export default Home;