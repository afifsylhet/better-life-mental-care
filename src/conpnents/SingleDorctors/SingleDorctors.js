
import React from 'react';
import useBasicData from '../../hooks/useBasicData';

const SingleDorctors = (props) => {
    const { name, shortDegree, treatField, experience, edu1, edu2, award1, award2, award3, award4, award5, img } = props.doctor;
    return (
        <div>
            <h1>This is From Single Doctor </h1>
        </div>
    );
};

export default SingleDorctors;