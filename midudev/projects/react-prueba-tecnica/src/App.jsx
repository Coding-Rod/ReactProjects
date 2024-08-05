import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMAGE_URL = (says) => `https://cataas.com/cat/says/${says.split(' ').join('%20')}?size=50&fontColor=red`

export function App () {
  const [fact, setFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)

        const firstThreeWords = fact.split(' ', 3).join(' ')
        console.log(firstThreeWords)

        setImageUrl(CAT_ENDPOINT_IMAGE_URL(firstThreeWords))
      })
  }, [])

  return (
    <main>
      <h1>App de gatos</h1>
      <section>
        {fact && <p>{fact}</p>}
        {imageUrl && <img src={imageUrl} alt='cat random image' />}
      </section>
    </main>
  )
}
