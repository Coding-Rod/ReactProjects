import { useState } from 'react'

import { Container, Card } from '@mui/material'

import Keyboard from './components/Keyboard'
import Screen from './components/Screen'

function App() {
  const [result, setResult] = useState('Hello, World!')

  return (
    <>
      <Container>
        <Card>
          <Screen text={result} />
          <Keyboard />
        </Card>
      </Container>
    </>
  )
}

export default App
