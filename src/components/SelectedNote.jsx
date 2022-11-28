import React from 'react'
import { RiCloseLine } from 'react-icons/ri'

const SelectedNote = ({ note, handleNoteClose }) => {
  return (
    <div className='selected-note-modal'>
      <div className='selected-note-container'>
        <p>{note.body}</p>
        <span onClick={handleNoteClose} className='close'>
          <RiCloseLine />
        </span>
        <div className='btn-container'>
          <button className='btn-save'>Save</button>
          <button className='btn-delete'>Delete</button>
          <button onClick={handleNoteClose} className='btn-cancel'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default SelectedNote
