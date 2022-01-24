import './ChooseTheme.css'
import ThemeOption from './ThemeOption';
import Rome from "./assets/Rome.jpg";
import ArrowL from"./assets/ArrowL.png";
import ArrowR from"./assets/ArrowR.png";


//it doesnt like it when i use body tag
//how to implement font
// do i have to import every image
// how do i center the main container on the screen 
function ChooseTheme() {
    return (
        <div class="main-container">
            <div>
                <button class="arrowL"><img src={process.env.PUBLIC_URL+ArrowL} class="arrowLImg"onMouseOver/></button>
            </div>

            <div class="rome-container">

                <img src={process.env.PUBLIC_URL+Rome} class="option"/>
                
                <div>
                <button class="option-btn"><p>Rome</p></button>
                </div>
            </div>

            <div>
                <button class="arrow-btn-R"><img src={process.env.PUBLIC_URL+ArrowR} class="arrowR"/></button>
            </div>
        </div>)
}

export default ChooseTheme;