import React from "react";
import Container from "../../src/componentsUI/Container";
import KeyGenSites from "../../src/componentsUI/KeyGenSites";
import { CheckAdminKey } from '../../src/untils/checkAdminKey';

const avtoEsteticaPage = ()=>{
    CheckAdminKey()

    return (
        <>
            <Container>
                <KeyGenSites link='/avto-estetica'/>
            </Container>
        </>
    )
} 

export default avtoEsteticaPage