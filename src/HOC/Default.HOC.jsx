import React from "react";
import { Route } from "react-router-dom";


//Layer
import DefaultLayout from "../layouts/Default.layout";

const DefaultHOC = ({ component: Component, ...rest }) => {
    return (
        <>
        <Route {...rest} 
        Component={(props) => (
            <DefaultLayout>
                <Component {...props} />
            </DefaultLayout>
        )}
        />
        
        </>
    );
};

export default DefaultHOC;

