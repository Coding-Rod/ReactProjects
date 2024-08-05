import { useEffect, useState } from 'react'

const CAT_PREXIS_IMAGE_URL = 'http://apimeme.com/meme?meme=Business-Cat'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return
    const firstThreeWords = fact.split(' ', 3)
    const topText = firstThreeWords.slice(0, 2).join('+')
    const bottomText = firstThreeWords.slice(-1)[0]
    console.log(firstThreeWords)
    console.log(topText)
    console.log(bottomText)

    // https://apimeme.com/meme?meme=Business-Cat&top=Top+text&bottom=
    setImageUrl(`${CAT_PREXIS_IMAGE_URL}&top=${topText}&bottom=${bottomText}`)
  }, [fact])

  return { imageUrl }
}
