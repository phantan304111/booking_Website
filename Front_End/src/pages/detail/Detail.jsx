import React from "react";
import NavBar from "../../components/HomePage/NavBar";
import Header from "../../components/Header/Header";
import Review from "../../components/Review/Review";
import DetailInfo from "../../components/Detail/DetailInfo";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";
//Tao dummy data tu json navbar,detail
const DUMMY_EXPENSES = [
  {
    type: "Stays",
    icon: "fa-bed",
    active: true,
  },
  {
    type: "Flights",
    icon: "fa-plane",
    active: false,
  },
  {
    type: "Car rentals",
    icon: "fa-car",
    active: false,
  },
  {
    type: "Attractions",
    icon: "fa-bed",
    active: false,
  },
  {
    type: "Airport taxis",
    icon: "fa-taxi",
    active: false,
  },
];
const Detail_Data = {
  name: "Tower Street Apartments",
  address: "Elton St 125 New york",
  distance: "Excellent location - 500m from center",
  price: "Book a stay over $114 at this property and get a free airport taxi",
  photos: [
    "./images/hotel_detail_1.jpg",
    "./images/hotel_detail_2.jpg",
    "./images/hotel_detail_3.jpg",
    "./images/hotel_detail_4.jpg",
    "./images/hotel_detail_5.jpg",
    "./images/hotel_detail_6.jpg",
  ],
  title: "Stay in the heart of City",
  description:
    "Located a 5-minute walk from St. Florian's Gate in Krakow, Tower Street Apartments has accommodations with air conditioning and free WiFi.The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat - screen TV, and a private bathroom with shower and a hairdryer.A fridge is also offered, as well as an electric tea pot and a coffee machine.Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower.The nearest airport is John Paul II International Kraków - Balice, 16.1 km from Tower Street Apartments, and the property offers a paid airport shuttle service.",
  nine_night_price: 955,
};
const Detail = (props) => {
	//tao trang detail tu cac component con gom navbar, form, footer va thanh phan Detail chinh
  return (
    <div>
			{/* truyen data va data tu props vao component*/}
      <NavBar items={DUMMY_EXPENSES} />
      <DetailInfo detail_data={Detail_Data} />
      <Form />
      <Footer footerdata={props.footerdata} />
    </div>
  );
};

export default Detail;
