import logo from './logo.svg';
import './App.css';
/*import { Fragment } from "react" instead od using this with the <Fragment> we can just use <>*/ 



function MyHeader() {

    
    return (
        <header className="header">
            <img src={logo}  className="nav-logo" width="40px" alt="React logo" />
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Pricing</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
    )
} 

export default MyHeader;