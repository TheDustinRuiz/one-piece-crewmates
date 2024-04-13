import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { supabase } from '../client'; 

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
                    <li className='list-item' key={crewmate.id}>
                        <p>Name: {crewmate.name}</p>
                        <p>Gender: {crewmate.gender}</p>
                        <p>Bounty: {crewmate.bounty}</p>
                        <p>Color: {crewmate.color}</p>
                        <Link to={`/edit/${crewmate.id}`}><button>Edit Crewmate</button></Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReadCrewmates;
