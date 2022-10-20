import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {

    const [cat, setCat] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/news-categories')
            .then(res => res.json())
            .then(data => setCat(data))
    }, []);


    return (
        <div>
            <h4>All Category: {cat.length}</h4>
            <div>
                {
                    cat.map(c => <p key={c.id}><Link to={`/category/${c.id}`}>{c.name}</Link></p>)
                }
            </div>
        </div>
    );
};

export default LeftSideNav;