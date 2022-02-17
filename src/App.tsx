import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
// import { Register } from "./Pages/Register";
import { ProductUniq } from "./Pages/UniqProducts/ProductUniq";
import { Cart } from "./Pages/Cart";
import { GlobalStyle } from "./styles/GlobalStyle";
import { ProductsList } from "./Pages/ProductsList/ProductsList";

function App() {
  return (
    <>
      <Login />
      <GlobalStyle />
    </>
  );
}

export default App;
