
import React from 'react';
import SingleDorctors from '../SingleDorctors/SingleDorctors';
import useDoctors from '../../hooks/useDoctors';

const Doctors = () => {
    const [doctors] = useDoctors();
    return (
        <div>
            <h1 className="text-secondary text-center m-5">Our dedicated doctors are waiting for you......</h1>
            <div>
                {
                    doctors.map(doctor => <SingleDorctors
                        key={doctor.id} doctor={doctor}>

                    </SingleDorctors>)
                }
            </div>
        </div>
    );
};

export default Doctors;