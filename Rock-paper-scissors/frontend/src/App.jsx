// Styles
import './App.css'

// Components
import { Categories } from './components/Categories'
import { Cards } from './components/Cards'
import { Modal} from './components/Modal'
import { useState } from 'react'

function App() {
  const [show, setShow] = useState(false)

  return (
    <div>
      <aside>
        <Categories />
      </aside>
      <main>
        <Cards showModal={setShow} />
        <Modal show={show} setShow={setShow} />
      </main>
    </div>
  )
}

export default App
