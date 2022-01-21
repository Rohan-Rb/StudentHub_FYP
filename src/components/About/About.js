import React from 'react';
import Teams from './Teams';
import AboutHeadline from '../About/AboutHeadline'
import GoalStory from './GoalStory';
import { Story } from './GoalStory/Data';
import { Goal } from './GoalStory/Data';

const about = () => {
    return (
    <div>
        <AboutHeadline />
        <GoalStory {...Story} />
        <GoalStory {...Goal} />
        <Teams />

    </div>
        

    )
}



export default about;