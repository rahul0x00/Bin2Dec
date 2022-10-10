import React, { Fragment, useState, useEffect } from "react";
import { getDecimal } from "../../core/conversion";
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
    const [binary, setBinary] = useState("");
    const [decimal, setDecimal] = useState("");

    useEffect(() => setDecimal(binary ? getDecimal(binary).message : ""), [binary]);

    return (
        <section className="hero col">
            <label htmlFor="txtBinaryNum">
                <strong>Converts Binary to Decimal</strong>
            </label>
            <div className="row divQuestion">
                <input type="text" name="txtBinaryNum" placeholder="Enter Binary.."
                    className="txtBinaryNum" value={binary} onChange={(e) => setBinary(e.target.value)} />
            </div>
            <div className="row divAnswer">
                <h1 className="headerAnswer">{decimal}</h1>
            </div>
        </section>
    );
}

export default Home;