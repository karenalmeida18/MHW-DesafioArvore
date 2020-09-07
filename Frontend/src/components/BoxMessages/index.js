import React from 'react';

import { Container, Content } from './styles';


export default function BoxMessage(props){
    
    return (
        <>
        <Container>
            <Content>
            <p> {props.content} </p>
            </Content>
        </Container>
        </>
    );
}