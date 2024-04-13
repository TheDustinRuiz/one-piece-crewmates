import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';

const EditCrewmate = () => {
     const { id } = useParams();
     const [crewmate, setCrewmate] = useState({
          name: '',
          gender: '',
          bounty: '',
          color: ''
     });

     useEffect(() => {
          const fetchCrewmate = async () => {
               const { data, error } = await supabase
                    .from('Crewmates')
                    .select()
                    .eq('id', id)
                    .single();

               if (error) {
                    console.error('Error fetching crewmate:', error.message);
               } else {
                    setCrewmate(data);
               }
          };

          fetchCrewmate();
     }, [id]);

     const updateCrewmate = async (event) => {
          event.preventDefault();

          await supabase
               .from('Crewmates')
               .update({ name: crewmate.name, gender: crewmate.gender, bounty: crewmate.bounty, color: crewmate.color })
               .eq('id', id); 

          window.location = "/read";
     };

     const deleteCrewmate = async () => {
          await supabase
               .from('Crewmates')
               .delete()
               .eq('id', id);

          history.push('/read');
     };

     return (
     <div>
          <h2>Edit Crewmate</h2>
          <form className='form-container' autoComplete="off" onSubmit={updateCrewmate}>
               <label htmlFor="name">Name:</label>
               <input
                    type="text"
                    id="name"
                    value={crewmate.name}
                    onChange={(e) => setCrewmate({ ...crewmate, name: e.target.value })}
                    required
               />
               <label htmlFor="gender">Gender:</label>
               <select
                    id="gender"
                    value={crewmate.gender}
                    onChange={(e) => setCrewmate({ ...crewmate, gender: e.target.value })}
                    required
               >
                    <option value="">Select Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
               </select>
               <label htmlFor="bounty">Bounty:</label>
               <input
                    type="number"
                    id="bounty"
                    value={crewmate.bounty}
                    onChange={(e) => setCrewmate({ ...crewmate, bounty: e.target.value })}
                    required
               />
               <label htmlFor="color">Color:</label>
               <select
                    id="color"
                    value={crewmate.color}
                    onChange={(e) => setCrewmate({ ...crewmate, color: e.target.value })}
                    required
               >
                    <option>Select Color</option>
                    <option>Red</option>
                    <option>Orange</option>
                    <option>Light Blue</option>
                    <option>Dark Blue</option>
                    <option>Purple</option>
                    <option>Black</option>
                    <option>Pink</option>
                    <option>Yellow</option>
                    <option>Green</option>
                    <option>White</option>
               </select>
               <button type="submit-btn">Update Crewmate</button>
               <button className='delete-btn' onClick={deleteCrewmate}>Delete Crewmate</button>
          </form>
     </div>
     );
};

export default EditCrewmate;
