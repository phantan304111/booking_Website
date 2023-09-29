import CartPage from "../CartPage/CartPage";
import CheckOutPage from "../CheckoutPage/CheckOutPage";
import DetailPage from "../DetailPage/DetailPage";
import HomePage from "../HomePage/HomePage";
import SignIn from "../loginPage/loginPage";
import LoginPage from "../logupPage/loginPage";
import ShopPage from "../ShopPage/shopPage";

const RouteData = [
  { path: "/home", component: HomePage },
  { path: "/cart", component: CartPage },
  { path: "/checkout", component: CheckOutPage },
  { path: "/detail", component: DetailPage },
  { path: "/login", component: SignIn },
  { path: "/register", component: LoginPage },
  { path: "/shop", component: ShopPage },
];
export default RouteData;
