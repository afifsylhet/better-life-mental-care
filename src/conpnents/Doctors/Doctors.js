
import React from 'react';
import SingleDorctors from '../SingleDorctors/SingleDorctors';
import useDoctors from '../../hooks/useDoctors';

const Doctors = () => {
    const [doctors] = useDoctors();
    return (
        <div>
            <div>Heading</div>
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