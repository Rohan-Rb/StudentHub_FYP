import React from 'react';
import icon1 from '../Images/aakash.jpg'
import icon2 from '../Images/Vvek.jpg'
import icon3 from '../Images/rohan.jpg'
import icon4 from '../Images/bibek.jpg'
import {TeamsContainer, TeamsH1, TeamsWrapper, TeamsCard, TeamsIcon, TeamsH2, TeamsP} from './TeamElements';

const Teams = () => {
    return (
            <TeamsContainer>
                <TeamsH1>Our Team</TeamsH1>
                <TeamsWrapper>
                <TeamsCard>
                        <TeamsIcon src={icon3} />
                        <TeamsH2>Rohan Rajbhandari</TeamsH2>
                        <TeamsP>Something about yourself.</TeamsP>
                    </TeamsCard>
                    <TeamsCard>
                        <TeamsIcon src={icon3} />
                        <TeamsH2>Rohan Rajbhandari</TeamsH2>
                        <TeamsP>Something about yourself.</TeamsP>
                    </TeamsCard>
                    <TeamsCard>
                        <TeamsIcon src={icon3} />
                        <TeamsH2>Rohan Rajbhandari</TeamsH2>
                        <TeamsP>Something about yourself.</TeamsP>
                    </TeamsCard>
                    <TeamsCard>
                        <TeamsIcon src={icon3} />
                        <TeamsH2>Rohan Rajbhandari</TeamsH2>
                        <TeamsP>Something about yourself.</TeamsP>
                    </TeamsCard>
                </TeamsWrapper>
            </TeamsContainer>


    );
}

export default Teams;