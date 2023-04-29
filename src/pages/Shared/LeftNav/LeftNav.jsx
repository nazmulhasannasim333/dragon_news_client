import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HighLights from '../HighLights/HighLights';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        fetch('https://dragon-news-project-server-nazmulhasannasim333.vercel.app/categories')
        .then(res => res.json())
        .then(data => setCategories(data))
        .catch(error => console.log(error))
    }, [])

    return (
        <div >
            <h4 className='mb-3'>All Category</h4>
            {
                categories.map(category => <p key={category.id} ><Link to={`/category/${category.id}`} className='ms-3 mt fs-5 text-decoration-none text-dark'>{category.name}</Link></p>)
            }
            <HighLights />
        </div>
    );
};

export default LeftNav;