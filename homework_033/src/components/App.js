import React from 'react';
import GlobalContextComponent from "./work/GlobalContextComponent";
import Navigation from "./work/Navigation";
import RouterSwitch from "./work/RouterSwitch";

function App() {
    return (
        <GlobalContextComponent>
            <div className="wrapper">
                <Navigation />
                <RouterSwitch />
            </div>
        </GlobalContextComponent>

    )
        ;
}

export default App;