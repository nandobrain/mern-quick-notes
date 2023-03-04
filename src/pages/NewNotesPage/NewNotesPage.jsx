import { useState } from 'react';
import { Link } from'react-router-dom'





export default function NewNotesPage({ addNotes }) {
    const [newNotes, setNewNotes] = useState()

    async function handleAddNotes(evt) {
        evt.preventDefault()
        await addNotes(newNotes)
        setNewNotes('')
    

    }

  


    return (
      <>
        <h1>Notes</h1>
        <forn onsubmit={handleAddNotes}>
            <input
              placeholder="Notes"
              value={newNotes}
              onChange={(evt) => setNewNotes(evt.target.value)}
              required
              pattern=""
            />
            <button onclick={handleAddNotes}> Add Note </button>  
        </forn>
        <Link to="/notes" className="button btn-sm">Previous Notes</Link>
       


      </>    
    )
}