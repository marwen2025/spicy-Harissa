import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Home from './Components/Home/Home';
import AboutUs from './Components/Aboutus/AboutUs';
import Services from './Components/Services/Services';
import Team from './Components/Team/Team';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/Contactus/ContactUs';
function App() {
  return (
    <>
      <div className="bg-gradient-to-r from-red-500 to-red-900 ">
       <NavBar/>
      <Home/>  
      </div>
      <AboutUs/>
      <Services/>
      <Team/>
      <ContactUs/>
      <Footer/>    
    </>
  );
}

export default App;
