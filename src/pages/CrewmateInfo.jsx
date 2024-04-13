import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import devilFruits from '../data/devilFruits'; 

const CrewmateInfo = () => {
  const { id } = useParams();
  const [crewmate, setCrewmate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrewmate = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('Crewmates')
          .select()
          .eq('id', id)
          .single();

        if (error) {
          throw error;
        }
        setCrewmate(data);
        if(crewmate){
          console.log(crewmate.gender, crewmate.color);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching crewmate:', error.message);
      }
    };

    fetchCrewmate();
  }, [id]);

  return (
    <div>
          <h2>Crewmate Info</h2>
          {loading && <p>Loading...</p>}
          {crewmate && (
               <div className="crewmate-info">
                    <p>Name: {crewmate.name}</p>
                    <p>Bounty: ${crewmate.bounty.toLocaleString()}</p>
                    <p><strong>Power Description:</strong> {devilFruits[crewmate.color].description}</p>
                    <p>A previous user of this devil fruit is {devilFruits[crewmate.color].previousUser}</p>
               </div>
          )}
    </div>
  );
};

export default CrewmateInfo;
