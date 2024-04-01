import { useState, useEffect } from 'react'

import { Container, Card } from '@mui/material'

import Keyboard from './components/Keyboard'
import Screen from './components/Screen'

function App() {
  const [result, setResult] = useState('')
  const [actionButtonText, setActionButtonText] = useState('C')

  useEffect(() => {
    result == '' || result == 'Syntax Error'
      ? setActionButtonText('C')
      : setActionButtonText('ERASE')
  }, [result])

  const eraseCharacter = () => {
    result == '' || result == 'Syntax Error'
      ? setResult('')
      : setResult(result.slice(0, -1));
  }

  const addCharacter = (value) => {
    setResult(result + value)
  }

  const calculateResult = () => {
    try {
      setResult(eval('(function() { return ' + result + ' })()'));
    }
    catch (error) {
      setResult('Syntax Error')
    }
  }

  return (
    <>
      <Container>
        <Card>
          <Screen 
            text={result}
            handleErase={() => eraseCharacter()}
            actionButtonText={actionButtonText}
            />
          <Keyboard
            handleCharacter={addCharacter} 
            handleResult={calculateResult}
          />
        </Card>
      </Container>
    </>
  )
}

export default App
