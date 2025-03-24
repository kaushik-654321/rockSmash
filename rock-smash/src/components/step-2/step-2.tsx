import React, { useState } from "react";
import logo from '../../assets/images/logo.svg';
import paper from '../../assets/images/icon-paper.svg';
import rock from '../../assets/images/icon-rock.svg';
import scissor from '../../assets/images/icon-scissors.svg';
import './step-2.css';
import HousePick from "../step-3/step-3";

interface SecondStepProps {
    playerChoice: string;
}

const SecondStep: React.FC<SecondStepProps> = ({ playerChoice }) => {
    const [result, setResult] = useState<string>('');
    const [winner, setWinner] = useState<string>('');
    const obj = {
        'rock': rock,
        'paper': paper,
        'scissor': scissor
    }
    let key: string = playerChoice;
    const choice = obj[key as keyof typeof obj];

    const determineWinner = (playerChoice: string, computerChoice: string) => {
        if (playerChoice === computerChoice) {
            setResult("It's a Draw");
        }
        else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "scissors" && computerChoice === "paper") ||
            (playerChoice === "paper" && computerChoice === "rock")
        ) {

            setResult("YOU WIN");
            setWinner("player");
        } else {

            setResult("YOU LOSE");
            setWinner("computer");
        }
    }
    return (
        <>
            <div className="container">
                <div className="stp-1">
                    <div className="first-section">
                        <img src={logo} />
                    </div>
                    <div className="right">
                        <span className="score-text">score</span>
                        <span className="score">12</span>
                    </div>
                </div>
                <div className="stp-2">
                    <div className="stp-2-left">
                        <span>YOU PICKED</span>
                        <div className={`left-${playerChoice}-outside ${winner === 'player' && 'player'}-outside`} >
                            <div className={`stp-2-left-${playerChoice}`}>
                                <div className="icon-bg-outside">
                                    <div className="icon-bg">
                                        <img src={choice} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <HousePick
                        playerChoice={playerChoice}
                        determineWinner={determineWinner}
                        winner={winner}
                    />
                </div>

                {result && <div className="step-3">
                    <span>{result}</span>
                    <div className="btn">
                        PLAY AGAIN
                    </div>
                </div>}


                <div className="step-4">
                    <div className="btn">
                        RULES
                    </div>
                </div>
            </div>
        </>
    )
}

export default SecondStep;