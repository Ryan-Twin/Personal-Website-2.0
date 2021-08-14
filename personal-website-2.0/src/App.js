import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Landing from './components/Landing/Landing';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Transition from './components/Transition/Transition';
import {useState} from "react";
import {BrowserRouter, Switch, Route, Redirect, NavLink} from 'react-router-dom';

function App() {

    // Have an arbitrary wait period between seeing pages (in ms)
    const [displaying, setDisplaying] = useState(false)
    const DISPLAYWAITTIME = 200

    // Waits a fixed amount of time before displaying content
    const waitForDisplay = () => {
        setTimeout(() => {setDisplaying(true)}, DISPLAYWAITTIME)
    }
    
    waitForDisplay()

    return (
        <div className="App">
            <Transition/>
            {displaying &&
                <BrowserRouter>
                    <HeaderBar/>
                    <Switch>
                        <Route exact path={'/'}><Landing/></Route>
                        <Route path={'/portfolio'}><Portfolio/></Route>
                        <Route path={'/contact'}><Contact/></Route>
                    </Switch>
                </BrowserRouter>
            }
        </div>
    )
}

export default App;
