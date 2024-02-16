import { Link } from 'react-router-dom';
import {useTheme} from '../hook/useDarkTheme'

function Navbar(){
    const {theme, toggerDarkMode} = useTheme();
    return (<>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        
        <button onClick={toggerDarkMode}>Toggle Theme</button>
    </>)
}

export default Navbar;