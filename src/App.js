import { useState, useEffect } from 'react'
import './App.scss';
import List from './components/List';
import SelectedNote from './components/SelectedNote';

function App() {
  const [activeNote, setActiveNote] = useState(null); //when selecting a note, open a modal asking to edit the text, delete the note, or change the list the note is in.
  
  const [data, setData] = useState([
    {
      id: 1,
      title: 'To-do',
      notes: [
        {
          id: 1,
          body: 'add blob that follows cursor',
        },
        {
          id: 2,
          body: 'add lazy loading'
        }
      ]
    },
    {
      id: 2,
      title: 'Needs Review',
      notes: [
        {
          id: 3,
          body: 'Design header',
        },
        {
          id: 4,
          body: 'Create styles'
        }
      ]
    },
    {
      id: 3,
      title: 'Finished',
      notes: [
        {
          id: 5,
          body: 'Design Homepage',
        },
        {
          id: 6,
          body: 'Design contact page'
        },
        {
          id: 7,
          body: 'Design something else',
        },
        {
          id: 8,
          body: 'Last design'
        }
      ]
    },
  ])

  const handleAddNote = (id) => {
    const selectedList = data.find(lists => lists.id === id) //when clicking `Add Note`, we need to know what list its from. This selects the list
    
    const newNote = {
      id: Math.floor(Math.random() * 10000),
      body: 'New note',
    }

    const updatedList = { //this adds the note to the respective list
      ...selectedList,
      notes: selectedList.notes.concat(newNote)
    }

    setData(data.map(list => list.id === id ? updatedList : list)) //updates the state with the updated list
  }

  const handleNoteClick = (id) => {
    let newArray = []
    data.map(lists => newArray = newArray.concat(lists.notes))

    setActiveNote(newArray.find(note => note.id === id))
  }

  const handleNoteClose = () => {
    setActiveNote(null)
  }

  return (
    <div>
      {activeNote && <SelectedNote handleNoteClose={handleNoteClose} note={activeNote} />}
      <h1>Kanban View</h1>
      <div className='kanban-container'>
        {data.map((list, index) => <List key={index} handleAddNote={handleAddNote} handleNoteClick={handleNoteClick} list={list}/>)}
      </div>
    </div>
  );
}

export default App;
