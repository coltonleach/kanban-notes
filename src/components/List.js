import React from 'react'

const List = ({ list, handleAddNote, handleNoteClick }) => {

  return (
  <div className='list-container'>
    <textarea value={list.title} rows='1' />
    {list.notes.map((note, index) => <p key={index} onClick={() => handleNoteClick(note.id)}>{note.body}</p>)}
    <p onClick={() => handleAddNote(list.id)}>Add Note</p>
  </div>
  )
}

export default List