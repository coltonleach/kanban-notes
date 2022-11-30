import '../styles/App.scss'
import { useState, useEffect } from 'react'
import List from '../components/List'
import SelectedNote from '../components/SelectedNote'
import axios from 'axios'

function Kanban() {
  const [activeNote, setActiveNote] = useState({
    listId: null,
    note: null,
  }) //when selecting a note, open a modal asking to edit the text, delete the note, or change the list the note is in.
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_URI}/tasks`).then((res) => {
      setData(res.data)
    })
  }, [])

  const handleNoteDelete = (listId, noteId) => {
    const selectedList = data.find((lists) => lists.id === listId) //This selects the list the note is in
    const updatedNotes = selectedList.notes.filter((note) => note.id !== noteId) //selectedList is an object
    const updatedList = {
      ...selectedList,
      notes: updatedNotes,
    }

    axios.put(`${process.env.REACT_APP_URI}/tasks/${listId}`, updatedList)

    setData(data.map((list) => (list.id === listId ? updatedList : list)))
    setActiveNote({ listId: null, note: null })
  }

  const handleAddNote = (listId) => {
    const selectedList = data.find((lists) => lists.id === listId) //when clicking `Add Note`, we need to know what list its from. This selects the list

    const newNote = {
      id: selectedList.notes.length + 1,
      body: 'New note',
    }

    const updatedList = {
      //this adds the note to the respective list
      ...selectedList,
      notes: selectedList.notes.concat(newNote),
    }

    axios.put(`${process.env.REACT_APP_URI}/tasks/${listId}`, updatedList)

    setData(data.map((list) => (list.id === listId ? updatedList : list))) //updates the state with the updated list
  }

  const handleNoteClick = (listId, noteId) => {
    let newArray = []
    data.map((lists) => (newArray = newArray.concat(lists.notes)))

    setActiveNote({
      listId,
      note: newArray.find((note) => note.id === noteId),
    })
  }

  const handleNoteClose = () => setActiveNote({ listId: null, note: null })

  return (
    <div>
      {!!activeNote.note && (
        <SelectedNote
          handleNoteClose={handleNoteClose}
          handleNoteDelete={handleNoteDelete}
          activeNote={activeNote}
        />
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
