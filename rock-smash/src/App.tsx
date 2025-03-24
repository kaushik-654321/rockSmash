import { useState } from 'react';

import FirstStep from './components/step-1/step-1';
import SecondStep from './components/step-2/step-2';


function App() {
  const [playerChoice, setPlayerChoice] = useState<string>('');
  const [score, setScore] = useState<number>(0);

  const backtoMain = () => {
    setPlayerChoice('');
  }

  return (
    <div className={playerChoice ? 'second-step-wrapper' : 'first-step-wrapper'}>
      {playerChoice ? (
        <SecondStep {...{ playerChoice, setScore, score, backtoMain }} />
      ) : (
        <FirstStep {...{ setPlayerChoice, score }} />
      )}
    </div>
  );


}

export default App
