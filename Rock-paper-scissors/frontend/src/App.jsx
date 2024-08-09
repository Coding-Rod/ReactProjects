// Styles
import './App.css'

// Components
import { Categories } from './components/Categories'
import { Cards } from './components/Cards'
import { Modal} from './components/Modal'

// Hooks
import { useState } from 'react'
import { useCards } from './hooks/useCards'

function App() {
  const [show, setShow] = useState(false)
  const { cards } = useCards()

  return (
    <div>
      <aside>
        <Categories />
      </aside>
      <main>
        <Cards cards={cards} showModal={setShow} />
        <Modal show={show} setShow={setShow} />
      </main>
    </div>
  )
}

export default App
