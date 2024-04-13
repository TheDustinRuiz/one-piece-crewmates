import React, { useState } from 'react';
import { supabase } from '../client';

const CreateCrewmate = () => {
     const [name, setName] = useState('');
     const [gender, setGender] = useState('');
     const [bounty, setBounty] = useState('');
     const [color, setColor] = useState('');
     const [showMessage, setShowMessage] = useState(false);

     const createCrewmate = async (event) => {
          event.preventDefault();

          await supabase
               .from('Crewmates')
               .insert({ name: name, gender: gender, bounty: bounty, color: color })
               .single();

          setShowMessage(true);

          setName('');
          setGender('');
          setBounty('');
          setColor('');

          setTimeout(() => {
               setShowMessage(false);
          }, 2000);
     };

     return (
          <div>
               <h2>Create New Crewmate</h2>
               {showMessage && <p>Crewmate created successfully!</p>}
               <form className='form-container' onSubmit={createCrewmate}>
                    <label htmlFor="name">Name:</label>
                    <input
                         type="text"
                         id="name"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                         required
                    />

                    <label htmlFor="gender">Gender:</label>
                    <select
                         id="gender"
                         value={gender}
                         onChange={(e) => setGender(e.target.value)}
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
                         value={bounty}
                         onChange={(e) => setBounty(e.target.value)}
                         required
                    />

                    <label htmlFor="color">Color:</label>
                    <select
                         id="color"
                         value={color}
                         onChange={(e) => setColor(e.target.value)}
                         required
                    >
                         <option value="">Select Color</option>
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

                    <button type="submit">Create Crewmate</button>
               </form>
          </div>
     );
};

export default CreateCrewmate;
