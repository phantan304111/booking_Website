import React from "react";
import NavBar from "../../components/HomePage/NavBar";
import Form from "../../components/Form/Form";
import SearchInfo from "../../components/Search/SearchInfo";
import Footer from "../../components/Footer/Footer";
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
const Search_data=[
	{
		"name": "Tower Street Apartments",
		"distance": "500m",
		"tag": "Free airport taxi",
		"type": "Entire studio • 1 bathroom • 21m² 1 full bed",
		"description": "Studio Apartment with Air conditioning",
		"free_cancel": true,
		"price": 112,
		"rate": 8.9,
		"rate_text": "Excellent",
		"image_url": "./images/hotel_search_1.webp"
	},
	{
		"name": "Comfort Suites Airport",
		"distance": "200m",
		"tag": "Free Breakfast",
		"type": "Entire studio • 2 bathroom • 100m² 2 full bed",
		"description": "Studio Apartment",
		"free_cancel": true,
		"price": 140,
		"rate": 9.3,
		"rate_text": "Exceptional",
		"image_url": "./images/hotel_search_2.jpg"
	},
	{
		"name": "Four Seasons Hotel",
		"distance": "100m",
		"tag": "Free Parking",
		"type": "1 bathroom • 51m² 2 full bed",
		"description": "Hotel in Lisbon",
		"free_cancel": false,
		"price": 99,
		"rate": 8.8,
		"rate_text": "Excellent",
		"image_url": "./images/hotel_search_3.jpg"
	}
]

const Search = (props) => {
  	//tao trang search tu cac component con gom navbar, footer va thanh phan search chinh

  return (
    <div> 
			{/* truyen cac data, data tu props vao components */}
    <NavBar items ={DUMMY_EXPENSES}/>
    <SearchInfo search_data ={Search_data}/>
		<Form />
    <Footer  footerdata={props.footerdata}/>
  </div>
  );
};

export default Search;
