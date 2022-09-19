import React from "react";
import Container from "../../src/componentsUI/Container";
import KeyGenSites from "../../src/componentsUI/KeyGenSites";
import { CheckAdminKey } from '../../src/untils/checkAdminKey';

const stroyMatPage = ()=>{
    CheckAdminKey()

    return (
        <>
            <Container>
                <KeyGenSites link='/stroy-mat'/>
            </Container>
        </>
    )
} 

export default stroyMatPage