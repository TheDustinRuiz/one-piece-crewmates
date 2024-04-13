import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { supabase } from '../client'; 
import devilFruits from '../data/devilFruits'; 
import getImageSource from '../utils/imageUtils';

const ReadCrewmates = () => {
    const [crewmates, setCrewmates] = useState([]);

    useEffect(() => {
        const fetchCrewmates = async () => {
            const { data, error } = await supabase
                .from('Crewmates')
                .select()
                .order('created_at', { ascending: true });

            if (error) {
                console.error('Error fetching crewmates:', error.message);
            } else {
                setCrewmates(data);
            }
        };

        fetchCrewmates();
    }, []);

    return (
        <div>
            <h2>All Crewmates</h2>
            <ul>
                {crewmates.map((crewmate) => (
                    <div key={crewmate.id}><Link to={`/crewmate/${crewmate.id}`}>
                        <li className='list-item'>
                            <img className='character-image' src={getImageSource(crewmate.gender, crewmate.color)} alt={`${crewmate.name}'s crewmate`} />
                            <p><strong>Name:</strong> {crewmate.name}</p>
                            <p><strong>Bounty:</strong> ${crewmate.bounty.toLocaleString()}</p>
                            <p><strong>Devil Fruit:</strong> {devilFruits[crewmate.color].name}</p>
                            {/* <Link to={`/edit/${crewmate.id}`}><button>Edit Crewmate</button></Link> */}
                        </li>
                        {/* <Link to={`/edit/${crewmate.id}`}><button>Edit Crewmate</button></Link> */}
                    </Link>
                    <Link to={`/edit/${crewmate.id}`}><button className="edit-crew-btn">Edit Crewmate</button></Link></div>
                    
                ))}
            </ul>
        </div>
    );
};

export default ReadCrewmates;
