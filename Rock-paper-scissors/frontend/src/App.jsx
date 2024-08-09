// Styles
import './App.css'

// Components
import { Categories } from './components/Categories'
import { Cards } from './components/Cards'
import { Modal} from './components/Modal'

function App() {

  return (
    <div>
      <aside>
        <Categories />
      </aside>
      <main>
        <Cards />
        <Modal />
      </main>
    </div>
  )
}

export default App
