import React from "react";
import Container from "../../src/componentsUI/Container";
import KeyGenSites from "../../src/componentsUI/KeyGenSites";
import { CheckAdminKey } from '../../src/untils/checkAdminKey';

const crmSystemPage = ()=>{
    CheckAdminKey()

    return (
        <>
            <Container>
                <KeyGenSites link='/crm-system'/>
            </Container>
        </>
    )
} 

export default crmSystemPage