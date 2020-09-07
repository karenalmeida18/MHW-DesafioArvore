import React from 'react';

import { Gota } from './styles';


export default function Shower(props) {

    return (
        <>
            <Gota inShower={props.inShower} />
            <Gota inShower={props.inShower} style={{marginLeft: "20px"}}/>
            <Gota inShower={props.inShower}style={{marginLeft: "40px"}}/>
            <Gota inShower={props.inShower}style={{marginLeft: "-40px"}}/>
            <Gota inShower={props.inShower}style={{marginLeft: "-20px"}}/>

            <Gota inShower={props.inShower}style={{marginTop:"40px"}}/>
            <Gota inShower={props.inShower}style={{marginLeft: "20px", marginTop:"40px"}}/>
            <Gota inShower={props.inShower}style={{marginLeft: "40px", marginTop:"40px"}}/>
            <Gota inShower={props.inShower}style={{marginLeft: "-40px", marginTop:"40px"}}/>
            <Gota inShower={props.inShower}style={{marginLeft: "-20px", marginTop:"40px"}}/>
            
        </>
    );
}