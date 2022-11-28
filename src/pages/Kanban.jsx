import '../styles/App.scss'
import { useState, useEffect } from 'react'
import List from '../components/List'
import SelectedNote from '../components/SelectedNote'
import axios from 'axios'

function Kanban() {
  const [activeNote, setActiveNote] = useState(null) //when selecting a note, open a modal asking to edit the text, delete the note, or change the list the note is in.

  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URI}/tasks`).then((res) => {
      setData(res.data)
    })
  }, [])

  const handleAddNote = (id) => {
    const selectedList = data.find((lists) => lists.id === id) //when clicking `Add Note`, we need to know what list its from. This selects the list

    const newNote = {
      id: Math.floor(Math.random() * 10000),
      body: 'New note',
    }

    const updatedList = {
      //this adds the note to the respective list
      ...selectedList,
      notes: selectedList.notes.concat(newNote),
    }

    setData(data.map((list) => (list.id === id ? updatedList : list))) //updates the state with the updated list
  }

  const handleNoteClick = (id) => {
    let newArray = []
    data.map((lists) => (newArray = newArray.concat(lists.notes)))

    setActiveNote(newArray.find((note) => note.id === id))
  }

  const handleNoteClose = () => setActiveNote(null)

  return (
    <div>
      {activeNote && (
        <SelectedNote handleNoteClose={handleNoteClose} note={activeNote} />
      )}
      <h1>Kanban View</h1>
      <div className='kanban-container'>
        {data.map((list) => (
          <List
            key={list.id}
            handleAddNote={handleAddNote}
            handleNoteClick={handleNoteClick}
            list={list}
          />
        ))}
      </div>
    </div>
  )
}

export default Kanban
