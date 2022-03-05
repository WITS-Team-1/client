import styles from './ThemeButton.module.css';
import { useNavigate } from 'react-router';
const themesArr = [
  { themeName: 'CAFE', URL: 'cafe' },
  { themeName: 'CITY SCAPES', URL: 'cityscape' },
  { themeName: 'ABSTRACT', URL: 'abstract' },
  { themeName: 'LANDSCAPES', URL: 'landscape' },
  { themeName: 'SOLID COLOURS', URL: 'solidcolours' },
];

function ThemeButton() {
  let navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    //for demo purposes only city scapes is usable
    const buttonId = e.target.id;
    if (buttonId === 'cityscape') {
      navigate(`/${buttonId}/select/`, { replace: true });
    }
  };
  const themeButtons = themesArr.map((val, index) => {
    return (
      <button onClick={handleClick} id={val.URL}>
        {val.themeName}
      </button>
    );
  });

  return (
    <div className={styles.themeContainer}>
      <div className={styles.themeBackground}>
        <h1 className={styles.selectThemeTitle}>SELECT YOUR THEME</h1>
        {themeButtons}
      </div>
    </div>
  );
}
export default ThemeButton;
