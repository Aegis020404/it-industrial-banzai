import React from "react";
import Container from "../../src/componentsUI/Container";
import KeyGenSites from "../../src/componentsUI/KeyGenSites";
import { CheckAdminKey } from '../../src/untils/checkAdminKey';

const llumarPage = ()=>{
    CheckAdminKey()

    return (
        <>
            <Container>
                <KeyGenSites link='/llumar'/>
            </Container>
        </>
    )
} 

export default llumarPage