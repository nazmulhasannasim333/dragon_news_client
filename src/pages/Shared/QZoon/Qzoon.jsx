import React from 'react';
import Qzoon1 from '../../../assets/qZone1.png';
import Qzoon2 from '../../../assets/qZone2.png';
import Qzoon3 from '../../../assets/qZone3.png';

const Qzoon = () => {
    return (
        <div className='bg-light my-3'>
            <h4 className='pt-3 pb-4 ms-2'>QZoon</h4>
            <div className='text-center pb-3'>
            <img src={Qzoon1} alt="" />
            <img src={Qzoon2} alt="" />
            <img src={Qzoon3} alt="" />
            </div>
        </div>
    );
};

export default Qzoon;