import './App.css';
import Contact from './components/molecules/contact/Contact';
import HomeFeed from './components/molecules/feed/HomeFeed';
import Footer from './components/molecules/footer/Footer';
import Login from './components/molecules/login/Login';
import Header from './components/molecules/navbar/Header';
import Register from './components/molecules/register/Register';




function App() {
  return (
   <>
   <Contact/>
   <Footer/>
   <Login/>
   <Register/>
 <Header/>
 <HomeFeed/>
 {/* <HeroSection/> */}
   </>
  );
}

export default App;
