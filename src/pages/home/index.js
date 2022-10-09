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
            <strong>Converts your Binary Number to Decimal</strong>
            <div className="row">
                <label htmlFor="txtBinaryNum"></label>
                <input type="text" name="txtBinaryNum" className="txtBinaryNum" id="txtBinaryNum" placeholder="Enter your Binary Number Here" />
                <button className="btnSubmitBinaryNum btn" id="btnSubmitBinaryNum">GO</button>
            </div>
        </section>
    );
}

export default Home;