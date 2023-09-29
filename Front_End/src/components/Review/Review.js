//import thu vien
import React from "react";
import "./Review.css";
import ReviewCity from "./ReviewCity";
import { useCallback, useEffect, useState } from "react";
import useHttpRequest from "../../hookcostun/httpRequest";
import image from  "../../City Image/images"
import ReviewHotel from "./ReviewHotel";
import ReviewType from "./ReviewType";
//Tao component review voi 3 phan - review city, review type va review hotel



const Type_Data =[
	{
		"name": "Hotels",
		"count": 233,
		"image": "./images/type_1.webp"
	},
	{
		"name": "Apartments",
		"count": 2331,
		"image": "./images/type_2.jpg"
	},
	{
		"name": "Resorts",
		"count": 2331,
		"image": "./images/type_3.jpg"
	},
	{
		"name": "Villas",
		"count": 2331,
		"image": "./images/type_4.jpg"
	},
	{
		"name": "Cabins",
		"count": 2331,
		"image": "./images/type_5.jpg"
	}
]



  
const Review = (props) => {
  let countDN = 0;
  let countHN = 0;
  let countHCM = 0;
  
  let countHotel = 0;
  let countApartment = 0;
  let countResort = 0;
  let countVilla = 0;
  let countCabin = 0;
  	const [data, setData] = useState();
	const [City_Data, setCityData] = useState([
  ]);
  const [Type_Data, setTypeData] = useState([]);
  const [Hotel_Data, setHotelData] = useState([]);


  const hotelData = useCallback(async () => {
		try {
      const result = await fetch(`http://localhost:4000`);
      const list = await result.json();
      // console.log(list.results);  
      setData(list.results);
    } catch(err){
      throw Error(err);
    }
  }, []);
	// useHttpRequest()

  useEffect(() => {
    hotelData();
  }, [hotelData]);

  useEffect(() => {
    if (data) {
      data.map((hotel) => {
        if (hotel.city === "Ha Noi") countHN++;
        else if (hotel.city === "Ho Chi Minh") countHCM++;
        else if (hotel.city === "Da Nang") countDN++;	
      });
      data.map((hotel) => {
        if (hotel.type === "hotel") countHotel++;
        else if (hotel.type === "apartment") countApartment++;
        else if (hotel.type === "resort") countResort++;	
        else if (hotel.type === "villa") countVilla++;	
        else if (hotel.type === "cabin") countCabin++;	
      });
      console.log(data);
      // E:\Funix\NodeJs\Tanpnm_NJS_Assignment2\Front_End\src\City Image\Da Nang.jpg
      setCityData([
        {
          "name": "Ha Noi",
          "subText": `${countHN} properties`,
          "image": "./images/Ha Noi.jpg"
        },
        {
          "name": "Ho Chi Minh",
          "subText": `${countHCM} properties`,
          "image": "./images/HCM.jpg"
        },
        {
          "name": "Da Nang",
          "subText": `${countDN} properties`,
          "image": "./images/Da Nang.jpg"
        }
      ]);
      setTypeData([{
        "name": "Hotels",
        "count": `${countHotel}`,
        "image": "./images/type_1.webp"
      },
      {
        "name": "Apartments",
        "count": `${countApartment}`,
        "image": "./images/type_2.jpg"
      },
      {
        "name": "Resorts",
        "count": `${countResort}`,
        "image": "./images/type_3.jpg"
      },
      {
        "name": "Villas",
        "count": `${countVilla}`,
        "image": "./images/type_4.jpg"
      },
      {
        "name": "Cabins",
        "count": `${countCabin}`,
        "image": "./images/type_5.jpg"
      }]);
      setHotelData(data)
    }
  }, [data]);



  return (
    <div className='Review'>
      {/* Div review city, tao layout flex voi moi phan tu la mot phan tu city trong data */}
      <div className='Review_content'>
        {City_Data.map((expense) => (
        // {data.map((expense) => (
          // <NavBarItem/>
          <ReviewCity
            key={expense.name}
            name={expense.name}
            subText={expense.subText}
            image={expense.image}
          />
        ))}
      </div>
      <h3 className='Review_content'>Browse by property type </h3>
      {/* Div review type, tao layout flex voi moi phan tu la mot phan tu type trong data */}
      <div className='Review_content'>
        {Type_Data.map((expense) => (
          // <NavBarItem/>
          <ReviewType
            key={expense.name}
            name={expense.name}
            count={expense.count}
            image={expense.image}
          />
        ))}
      </div>

      <h3 className='Review_content'>Homes Guest Loves</h3>
      {/* Div review hotel, tao layout flex voi moi phan tu la mot phan tu hotel trong data */}
      <div className='Review_content'>
        {Hotel_Data.map((expense) => (
          <ReviewHotel
            key={expense.name}
            name={expense.name}
            city={expense.city}
            price={expense.cheapestPrice}
            rate={expense.rating}
            type={expense.type}
            image_url={expense.photos[0]}
          />
        ))}
      </div>
    </div>
  );
};
export default Review;
