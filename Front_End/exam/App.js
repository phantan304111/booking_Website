import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";

import RouteData from "./Routes/Routes";
import Nav from "./components/Nav";
import HomePage from "./HomePage/HomePage";
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
  return (
    <div className="App">
      <Nav />

      <Routes>
        <Route path="/" element={<Navigate to={"/home"} />} />
        {RouteData.map((route, index) => {
          let Page = route.component;
          return <Route key={index} path={route.path} element={<Page />} />;
        })}
      </Routes>
    </div>
  );
}
// function App(){
//   return(
//     <div className="App">
//       <Nav/>
//       <Routes>
//         <Route path="/"element={<Navigate to={"/home"} />}/>
//         {RouteData.map((route,index)=>{
//           let Page = route.component;//// gan bien page = phan tu trong mang.component
//           return <Route key ={index} path ={route.path} element={<Page/>}/>;
//         })}
//       </Routes>
//     </div>
//   )
// }

export default App;
