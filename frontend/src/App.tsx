import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './pages/Home';

function App() {
    return (

        <Router>
            <div id="wrapper">
                <div id="main">
                    <div className="inner">
                        <Header/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="*" element={<div>Pagina nu a fost găsită (404)</div>}/>
                        </Routes>
                    </div>
                </div>

                <Sidebar/>
            </div>
        </Router>
    );
}

export default App;
