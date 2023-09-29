import {
  BrowserRouter,
  Routes,
  Route,
  //import thu vien
} from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Search from "./pages/search/Search";
import SignIn from "./pages/loginPage/loginPage";
import SignUp from "./pages/logupPage/signUpPage";
//tao dummy data theo file json
import useHttpRequest from "./hookcostun/httpRequest";
//truyen dummy data vao cac trang chinh
function App() {
  // try {
  //   const result = await fetch(
  //     `http://localhost:4000${requests.fetchtrailer}`,{
  //       method: "POST",
  //       body:JSON.stringify({ film_id }),
  //       headers:{
  //         'Content-Type': 'application/json'
  //       },
  //       mode: 'cors'
  //     }
  //   );


  // useEffect(() => {
  //   SendRequest(
  //     "https://"
  //   );
  // }, [SendRequest]);
  return (
    // <BrowserRouter>
    <Routes>
      {/* <Route path="/" element={<Navigate to={"/home"} />} /> */}
      <Route path='/' element={<Home footerdata={Footer_Data} />} />
      <Route path='/search' element={<Search footerdata={Footer_Data} />} />
      <Route path='/detail' element={<Detail footerdata={Footer_Data} />} />
      <Route path='/sign_in' element={<SignIn footerdata={Footer_Data} />} />
      <Route path='/sign_up' element={<SignUp footerdata={Footer_Data} />} />
    </Routes>
    // </BrowserRouter>
  );
}
//export app
export default App;

const Footer_Data = [
  {
    col_number: 1,
    col_values: [
      "Countries",
      "Regions",
      "Cities",
      "Districts",
      "Airports",
      "Hotels",
    ],
  },
  {
    col_number: 2,
    col_values: [
      "Homes",
      "Apartments",
      "Resorts",
      "Villas",
      "Hostels",
      "Guest houses",
    ],
  },
  {
    col_number: 3,
    col_values: [
      "Unique places to stay",
      "Reviews",
      "Unpacked: Travel articles",
      "Travel communities",
      "Seasonal and holiday deals",
    ],
  },
  {
    col_number: 4,
    col_values: [
      "Car rental",
      "Flight Finder",
      "Restaurant reservations",
      "Travel Agents",
    ],
  },
  {
    col_number: 5,
    col_values: [
      "Curtomer Service",
      "Partner Help",
      "Careers",
      "Sustainability",
      "Press center",
      "Safety Resource Center",
      "Investor relations",
      "Terms & conditions",
    ],
  },
];

// import "./App.css";
// import { Navigate, Route, Routes } from "react-router-dom";

// import RoutesData from "./Routes/Routes";
// import Nav from "./components/Nav";
// import Footer from "./components/footer";
// import HomePage from "./HomePage/HomePage";
// function App() {
//   //xay dung app voi 1 thanh phan Nav va 1 list route voi url khai bao trong RoutesData va element chua component tuong ung
//   return (
//     <div className="App">
//       <Nav/>
//       <Routes>
//         <Route path="/" element={<Navigate to={"/home"} />} />
//         {RoutesData.map((route, index) => {
//           const Page = route.component;//// gan bien page = phan tu trong mang.component
//           return <Route key={index} path={route.path} element={<Page />} />;
//         })}
//       </Routes>

//     </div>
//   );
// }

// export default App;
