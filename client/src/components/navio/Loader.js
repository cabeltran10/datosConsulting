import React, { Component } from "react";
import axios from "axios";

import "./loader.css";

import Navio from "./Navio";

class Loader extends Component {

    //Constructor

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            url: "",
            cont: 1,
            markAll: false
        };
    }

    onChange = (e) => {
        this.setState({ url: e.target.value })
    }

    chooseData = async () => {
        if (!this.state.markAll) {
            await axios
                .get(this.state.url)
                .then(res => {
                    this.setState({ data: res.data })
                })
                .catch(() => { alert("The API URL is not valid") })
        } else {
            let pData = [];
            while (true) {
                let data = []
                await axios.get(this.state.url + "?$limit=1000&$offset=" + this.state.cont * 1000)
                    .then(res => {
                        data = res.data;
                    })
                    .catch(() => alert("The API URL is not valid"))

                if (data.length === 0) {
                    break
                } else {
                    let cont = this.state.cont;
                    cont++;
                    this.setState({
                        cont
                    })
                    pData = pData.concat(data)
                }
            }
            this.setState({
                data: this.state.data.concat(pData)
            })
        }
        this.addTransaction();
    }

    // Add Todo
    addTransaction = () => {
        axios
            .post("/transactions ", {
                "url": this.state.url
            });
    };

    markAll = () => {
        this.setState((actual) => {
            actual.markAll = !actual.markAll;
        })
    }

    // Style

    getStyle = () => {
        return {
            background: "#f4f4f4",
            borderBottom: "1px #ccc dotted"
        };
    };

    render() {
        return (
            <React.Fragment>
                <h1>To consult information on the <a href="https://datos.gov.co/" className="badge badge-primary">datos.gov.co</a> page please enter the URL of the API to consult</h1>
                <p>
                    To select some data just go <a href="https://datos.gov.co/browse" className="badge badge-primary">here</a>
                </p>
                <p>
                    <strong>IMPORTANT:</strong> Please check the checkbox if you want to see all the informacion, otherwise only the first 1000 record will be shown
                </p>
                <div className="row" style={this.getStyle()}>
                    <div className="col-2">
                        <div className="row justify-content-center">
                            <div className="col-6">
                                <p>Want All data?</p>
                            </div>
                            <div className="col-4">
                                <input
                                    id="allContent"
                                    type="checkbox"
                                    onChange={this.markAll}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-7">

                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">API URL</span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                aria-label="URL"
                                placeholder="Please add the URL here..."
                                onChange={this.onChange}
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        this.chooseData();
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <div className="col-2">
                        <button
                            className="btn"
                            onClick={this.chooseData}
                        >
                            Submit
                        </button>
                    </div>
                </div>
                <div className="container navioRow" >
                    <Navio data={this.state.data} />
                </div>
            </React.Fragment >
        );
    }
}
export default Loader;