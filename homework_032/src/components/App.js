import React from 'react';
import GlobalContextProvider from "./product/GlobalContextProvider";
import ProductMain from "./product/ProductMain";
import Navigation from "./product/Navigation";
import RouterSwitch from "./product/RouterSwitch";

function App() {
    return (
        // <GlobalContextProvider>
        //     <div className="">
        //         <Navigation/>
        //         <RouterSwitch/>
        //     </div>
        // </GlobalContextProvider>
        
    <GlobalContextProvider>
        <div className="workSection">
            <ProductMain/>
        </div>
    </GlobalContextProvider>
)
    ;
}

export default App;