import React from "react";
import NavBar from "../../components/HomePage/NavBar";
import Header from "../../components/Header/Header";
import Review from "../../components/Review/Review";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
import { useCallback, useState, useEffect} from "react";
import useHttpRequest from "../../hookcostun/httpRequest";
import image from  "../../City Image/images"

import { Navigate, Route, Router } from "react-router-dom";

//tao dummy data cua trang REVIEW, gom thong tin tu cac json navbar, city,hotel,type va footer truyen tu props


const Home = (props) => {
	return(
		<div>
			<NavBar items ={DUMMY_EXPENSES}/>
			<Header/>		
			<Review/>
			<Form/>	
			<Footer footerdata={props.footerdata}/>
		</div>
	);
};

export default Home;
const DUMMY_EXPENSES = [
	{
		"type": "Stays",
		"icon": "fa-bed",
		"active": true
	},
	{
		"type": "Flights",
		"icon": "fa-plane",
		"active": false
	},
	{
		"type": "Car rentals",
		"icon": "fa-car",
		"active": false
	},
	{
		"type": "Attractions",
		"icon": "fa-bed",
		"active": false
	},
	{
		"type": "Airport taxis",
		"icon": "fa-taxi",
		"active": false
	}
];