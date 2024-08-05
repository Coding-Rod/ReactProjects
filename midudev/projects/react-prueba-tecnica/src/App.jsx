import { useCatFact } from './hooks/useCatFact'
import { useCatImage } from './hooks/useCatImage'

import './App.css'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })

  const handleClick = async () => { refreshFact() }

  return (
    <main>
      <h1>App de gatos</h1>
      <button onClick={handleClick}>Get New Fact</button>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt='cat random image' />}
      </section>
    </main>
  )
}
