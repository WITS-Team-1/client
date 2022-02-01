import Rome from "./assets/Rome.jpg";
import ArrowL from"./assets/ArrowL.png";
import ArrowR from"./assets/ArrowR.png";
import './ChooseTheme.css';



function ThemeOption(){
    // <div class="rome-container">

    //     <img src={process.env.PUBLIC_URL+Rome} class="option"/>
    
    //     {/* <div>
    //     <button class="option-btn"><p>Rome</p></button>
    //     </div> */}
    // </div>
    return (
        <div class="main-container">

            <div>
            <button class="arrowL"><img src={process.env.PUBLIC_URL+ArrowL} class="arrowLImg"onMouseOver/></button>
            </div>

            {/* <Carousel>
                <Item>HI</Item>
            </Carousel> */}

            <div class="rome-container">

                <img src={process.env.PUBLIC_URL+Rome} class="option"/>
                
                <div>
                <button class="option-btn"><p>Rome</p></button>
                </div>
            </div>

            <div>
                <button class="arrowR"><img src={process.env.PUBLIC_URL+ArrowR} class="arrowRImg"/></button>
            </div>
        </div>
    )
}
export default ThemeOption;