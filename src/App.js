import logo from './logo.svg';
import './App.css';
import MyHeader from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

/*import { Fragment } from "react" instead od using this with the <Fragment> we can just use <>*/ 



function Page() {
    return (
        <>
            <MyHeader />
            <MainContent />
            <Footer />  
            
        </>
    )
}

export default Page ;