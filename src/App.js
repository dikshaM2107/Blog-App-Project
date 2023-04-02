
import './App.css';
import Contact from './components/molecules/contact/Contact';
import HomeFeed from './components/molecules/feed/HomeFeed';
import Footer from './components/molecules/footer/Footer';
import Login from './components/molecules/login/Login';

import Header from './components/molecules/navbar/Header';
import CreatePost from './components/molecules/post/CreatePost';
import Register from './components/molecules/register/Register';
import ErrorPage from './components/pages/ErrorPage';




function App() {
  return (
   <>
   <ErrorPage/>
   {/* <CreatePost/> */}
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
