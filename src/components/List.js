import React from 'react'

const List = ({ list }) => {

  const handleClick = (id) => {
    console.log('click', id)
  }

  return (
  <div className='list-container'>
    <h2>{list.title}</h2>
    {list.notes.map((note, index) => <p key={index} onClick={() => handleClick(note.id)}>{note.body}</p>)}
    <p>Add Note</p>
  </div>
  )
}

export default List