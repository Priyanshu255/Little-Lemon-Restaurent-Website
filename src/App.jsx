import {Route, Routes} from 'react-router-dom';
import Home from "./routes/Home"
import About from "./routes/About"
import Menu from './routes/Menu';
import ReservationsPage from "./routes/ReservationPage"
import OrderOnline from './routes/OrderOnline';
import Login from './routes/Login';
import ErrorPage from "./routes/ErrorPage"


function App() {
  return (
    <>
      <Routes>
          <Route exact path='/Little-Lemon-Restaurent-Website' element = {<Home />} />
          <Route exact path='/Little-Lemon-Restaurent-Website/about' element = {<About />} />
          <Route exact path='/Little-Lemon-Restaurent-Website/menu' element = {<Menu />} />
          <Route exact path='/Little-Lemon-Restaurent-Website/reservations' element = {<ReservationsPage />} />
          <Route exact path='/Little-Lemon-Restaurent-Website/orderOnline' element = {<OrderOnline />} />
          <Route exact path='/Little-Lemon-Restaurent-Website/login' element = {<Login />} />
          <Route path='*' element = {<ErrorPage />} />
        </Routes>
    </>
  )
}

export default App
