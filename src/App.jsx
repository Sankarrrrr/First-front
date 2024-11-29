import "./index.scss";
import MyImage from "./Denis.png";
import Figma from "./Figma.png";
import FigmaS from "./FigmaS.png";
import AfterEffects from "./AfterEffects.jpg";
import AfterEffectsS from "./AfterEffectsS.png";
import Illustrator from "./Illustrator.jpg";
import IllustratorS from "./IllustratorS.png";
import PhotoShop from "./PhotoShop.png";
import PhotoShopS from "./PhotoShopS.png";
import FashionPage from "./FashionPage.png";
import ReebokPage from "./ReebokPage.png";
import BraunPage from "./BraunPage.png";
import LinkedIn from "./LinkedIn.png";
import Instagram from "./Instagram.jpeg";
import Behance from "./Behance.jpg";
import Dribble from "./Dribble.jpeg";

function App() {
  
  return (
  <div>
    <nav>
      <ul>
        <li className="listing">
         <a href="#HomeScroll"> Home</a>
        </li>
        <li className="listing">      
          <a href="#AboutScroll">  About me</a>
        </li>
        <li className="listing">      
          <a href="#SkillsScroll"> Skills</a> 
        </li>
        <li className="listing">
          <a href="#PortfolioScroll">  Portfolio </a>
        </li>
        <li className="listing">      
          <a href="#ContactsScroll"> Contacts</a>
        </li>
        </ul>

        <div className="vector"></div>
    </nav>
      <article id="HomeScroll"></article>
      <div className="text1">
      <h1>Denis<br/>Novik</h1>
      <h4>UX | UI designer <br/> 24 years old, Minsk</h4>
      <h6>RU|ENG</h6>
      <div className="Imag">
      <img src={MyImage} alt="Den" className="Imag"/>
      </div>
      </div>
    <frame>
      <article id="AboutScroll"></article>
      <div className="AboutMe">
        <h1>About me</h1>
      </div>
      <div className="AboutMainText">
        <h4>Hi, I'm Denis – UX/UI designer from Minsk.<br/>I'm interested in design and everything connected with it. <br/><br/>
        I'm studying at courses "Web and mobile design <br/> interfaces" in IT-Academy. <br/><br/>
        Ready to implement excellent projects <br/> with wonderful people.</h4>
      </div>
    </frame>
    <div className="Skills">
      <article id="SkillsScroll"></article>
      <h1>Skills</h1>
    </div>
    <div className="SkillsMainText">
      <h4>I work in such programs as<br/></h4>
      <h1> </h1>
    </div>
    <div className="ImagSkills">
      <a href="https://www.figma.com" target="_blank" rel="noreferrer noopener"> <img src={Figma} alt="Figma" className="ImagSkills"/> </a>
      <a href="https://www.adobe.com/ru/products/aftereffects.html" target="_blank" rel="noreferrer noopener"> <img src={AfterEffects} alt="AfterEffects" className="ImagSkills"/> </a>
      <a href="https://www.adobe.com/ru/products/illustrator.html" target="_blank" rel="noreferrer noopener"> <img src={Illustrator} alt="Illustrator" className="ImagSkills"/> </a>
      <a href="https://www.adobe.com/ru/products/photoshop.html" target="_blank" rel="noreferrer noopener"> <img src={PhotoShop} alt="PhotoShop" className="ImagSkills"/> </a>
      </div>
    <div className="SkillsComments">
      <h2>Figma</h2>
      <h2>Adobe <br/> After Effects</h2>
      <h2>Adobe <br/> Illustrator</h2>
      <h2>Adobe <br/> Photoshop</h2>
    </div>
    <div className="StarsSkills">
      <img src={FigmaS} alt="FigmaS" className="StarsSkills"/>
      <img src={AfterEffectsS} alt="AfterEffectsS" className="StarsSkills"/>
      <img src={IllustratorS} alt="IllustratorS" className="StarsSkills"/>
      <img src={PhotoShopS} alt="PhotoShopS" className="StarsSkills"/>
    </div>
    <frame>
      <div className="Portfolio">
        <article id="PortfolioScroll"></article>
        <h1>Portfolio</h1>
      </div>
      <div className="ImagPortfolio">
      <img src={FashionPage} alt="FashionPage" classname="ImagPortfolio"/>
      </div>
      <div className="PortfolioMainText">
        <h2> Online fashion store - Homepage</h2>
      </div>
      <div className="ImagPortfolio">
      <img src={ReebokPage} alt="ReebokPage" classname="ImagPortfolio"/>
      </div>
      <div className="PortfolioMainText">
        <h2> Reebok Store - Concept</h2>
      </div>
      <div className="ImagPortfolio">
      <img src={BraunPage} alt="BraunPage" classname="ImagPortfolio"/>
      </div>
      <div className="PortfolioMainText">
        <h2> Braun Landing Page - Concept</h2>
      </div>
    </frame>
    <div className="Contact">
    <article id="ContactsScroll"></article>
    <h1>Contacts</h1>
    </div>
    <div className="ContactMainText">
      <h2>Want to know more or just chat? <br/>
          You are welcome!</h2>
    </div>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLScNQcE_sBWXN3rnC-5ytmneo0sQXeWRVUelL5VwhvCVxbbhGg/viewform?usp=sf_link" target="_blank" rel="noreferrer noopener"> <div className="btn-oval">
      <div className="oval-text">
      <h2>Send Message</h2>
    </div>
    </div> </a>
    
    <div className="ImagContact">	
    <a href="http://linkedin.com" target="_blank" rel="noreferrer noopener"> <img src={LinkedIn} alt="LinkedIn" classname="ImagContact"/> </a>
    <a href="https://www.instagram.com" target="_blank" rel="noreferrer noopener"> <img src={Instagram} alt="Instagram" classname="ImagContact"/> </a>
    <a href="https://www.behance.net/galleries" target="_blank" rel="noreferrer noopener"> <img src={Behance} alt="Behance" classname="ImagContact"/> </a>
    <a href="https://dribbble.com" target="_blank" rel="noreferrer noopener"> <img src={Dribble} alt="Dribble" classname="ImagContact"/> </a>
    </div>
    <div className="ContactUsed">
      <h1>Like me on <br/> <br/>
      LinkedIn, Instagram, Behance, Dribble</h1>
    </div>
  </div>
  );
}
export default App;