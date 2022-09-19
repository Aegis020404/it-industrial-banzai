import React from "react";
import Container from "../../src/componentsUI/Container";
import KeyGenSites from "../../src/componentsUI/KeyGenSites";
import { CheckAdminKey } from '../../src/untils/checkAdminKey';

const hockTeamPage = ()=>{
    CheckAdminKey()

    return (
        <>
            <Container>
                <KeyGenSites link='/hock-team'/>
            </Container>
        </>
    )
} 

export default hockTeamPage