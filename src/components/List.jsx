import React from 'react'

const List = ({ list, handleAddNote, handleNoteClick }) => {
  return (
    <div className='list-container'>
      <textarea value={list.title} rows='1' />
      {list.notes.map((note) => (
        <p key={note.id} onClick={() => handleNoteClick(list.id, note.id)}>
          {note.body}
        </p>
      ))}
      <p className='add-note' onClick={() => handleAddNote(list.id)}>
        Add Note
      </p>
    </div>
  )
}

export default List
