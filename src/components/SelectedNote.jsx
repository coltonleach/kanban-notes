import React from 'react'
import { RiCloseLine } from 'react-icons/ri'

const SelectedNote = ({ activeNote, handleNoteClose, handleNoteDelete }) => {
  return (
    <div className='selected-note-modal'>
      <div className='selected-note-container'>
        <textarea value={activeNote.note.body} rows='1' />
        <span onClick={handleNoteClose} className='close'>
          <RiCloseLine />
        </span>
        <div className='btn-container'>
          <button className='btn-save'>Save</button>
          <button
            className='btn-delete'
            onClick={() =>
              handleNoteDelete(activeNote.listId, activeNote.note.id)
            }
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default SelectedNote
