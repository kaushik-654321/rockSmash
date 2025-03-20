import { useState } from 'react';

import FirstStep from './components/step-1/step-1';
import SecondStep from './components/step-2/step-2';


function App() {
  const [playerChoice, setPlayerChoice] = useState<string>('');
  console.log(playerChoice)
  return (
    <>
      {playerChoice ? <SecondStep playerChoice={playerChoice} /> : <FirstStep setPlayerChoice={setPlayerChoice} />}


    </>
  )
}

export default App
