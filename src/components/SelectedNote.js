import React from 'react'

const SelectedNote = ({ note, handleNoteClose }) => {
  return (
    <div className='selected-note-modal'>
      <div className='selected-note-container'>
        <p>{note.body}</p>
        <span onClick={handleNoteClose} class='close'>&times;</span>
        <p>Save</p>
        <p>Delete</p>
      </div>
    </div>
  )
}

export default SelectedNote