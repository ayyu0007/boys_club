import './App.css';
import Club from './components/Club/Club';
import Commingsoon from './components/Commingsoon/Commingsoon';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Market from './components/Market/Market';
import Rodemap from './components/Rodemap/Rodemap';
import Team from './components/Team/Team';
import Technomices from './components/Technomices/Technomices';



function App() {
  return (
    <>
      <Header/> 
      <Hero/>
      <Faq/>
      <Technomices/>
      <Market/> 
      <Club/>
      <Team/>
      <Rodemap/>
      <Commingsoon/>
      <Footer/>
    </>
  );
}

export default App;
