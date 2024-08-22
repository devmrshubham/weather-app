import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";
import Cloud from "../images/Clouds.png";
import Clear from "../images/Clear.png";

import Rain from "../images/Rain.png";
import Mist from "../images/mist.png";
import Error from "../images/error.png";

const Myapp = () => {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const API_KEY = "22df8abfa14a75b84259e9e04e47fea0";
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_KEY}&units=metric`;
    console.log(data)
    const HandelInput = (e) => {
        setSearch(e.target.value);
    };

    const myFun = async () => {
        if (search.length === 0) {
            toast.error("please fill the input");
        } else {
            await axios
                .get(API)
                .then((success) => {
                    setData(success.data);
                })
                .catch((error) => {
                    toast.error("Please Enter Valid Name");
                    setData(error.response.data)
                });
        }
        setSearch("")
    };

    console.log(data);
    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-12 inputs">
                        <input
                            type="text"
                            className=" form-control "
                            placeholder="Enter city ,Country"
                            onChange={HandelInput}
                            value={search}
                        />
                        <button type="button" class="btn btn-light " onClick={myFun}>
                            <FaSearch />
                        </button>
                    </div>
                    <div className="col-12  ">
                        {
                            data.cod === "404" ?
                                <div className="">
                                    <hr className=" text-white mb-3" />
                                    <h2>{data.message}</h2><br />
                                    <img
                                    className=" img-fluid "
                                    style={{ height: "12.5rem" }}
                                    src={Error}
                                    alt=""
                                />
                                </div> :
                                ""
                        }
                        {data && data.weather ? (
                            <div className="">
                                <hr className=" text-white mb-3" />
                                <h2>{data.name}</h2>
                                <img
                                    className=" img-fluid "
                                    style={{ height: "12.5rem" }}
                                    src={data.weather[0].main === "Clouds" ? Cloud : ""}
                                    alt=""
                                />
                                <img
                                    className=" img-fluid  "
                                    style={{ height: "12.5rem" }}
                                    src={data.weather[0].main === "Clear" ? Clear : ""}
                                    alt=""
                                />
                                <img
                                    className=" img-fluid "
                                    style={{ height: "12.5rem" }}
                                    src={data.weather[0].main === "Mist" ? Mist : ""}
                                    alt=""
                                />
                                <img
                                    className=" img-fluid "
                                    style={{ height: "12.5rem" }}
                                    src={data.weather[0].main === "rain" ? Rain : ""}
                                    alt=""
                                />
                                <img
                                    className=" img-fluid "
                                    style={{ height: "12.5rem" }}
                                    src={data.weather[0].main === "Haze" ? Cloud : ""}
                                    alt=""
                                />
                              
                                <h2 className=" tempracher">{Math.trunc(data.main.temp)}°C</h2>
                                <p className="climate">{data.weather[0].description}</p>
                            </div>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Myapp;
