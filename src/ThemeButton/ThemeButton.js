import './ThemeButton.css';

function ThemeButton() {
    return (
        <div id="container">
        <div id="background">
        <h1 id="selectThemeTitle">SELECT YOUR THEME</h1>
        <button class="themeButtons">CAFE</button>
        <button class="themeButtons">CITY SCAPES</button>
        <button class="themeButtons">LANDSCAPES</button>
        <button class="themeButtons">ABSTRACT</button>
        <button class="themeButtons">SOLID COLOURS</button>
        </div>
    </div>
    
    )
}
export default ThemeButton;