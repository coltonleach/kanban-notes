import { useState } from 'react'
import './App.scss';
import List from './components/List';

function App() {
  const [activeNote, setActiveNote] = useState(null);

  const data = [
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
  ]

  return (
    <div>
      <h1>Kanban View</h1>
      <div className='kanban-container'>
        {data.map((list, index) => <List key={index} list={list}/>)}
      </div>
    </div>
  );
}

export default App;
