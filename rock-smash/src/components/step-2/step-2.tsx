import React, { useState } from "react";
import logo from '../../assets/images/logo.svg';
import paper from '../../assets/images/icon-paper.svg';
import rock from '../../assets/images/icon-rock.svg';
import scissor from '../../assets/images/icon-scissors.svg';
import rules from '../../assets/images/image-rules.svg';
import close from '../../assets/images/icon-close.svg';
import './step-2.scss';
import HousePick from "../step-3/step-3";
import StyledModal from "../modal/modal";

interface SecondStepProps {
    playerChoice: string;
    setScore: (score: number) => void;
    score: number;
    backtoMain: () => void;
}

const SecondStep: React.FC<SecondStepProps> = ({ playerChoice, setScore, score, backtoMain }) => {
    const [result, setResult] = useState<string>('');
    const [winner, setWinner] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

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
            setScore(score += 1);
            setWinner("player");
        } else {

            setResult("YOU LOSE");
            if (score > 0) {
                setScore(score -= 1);
            }

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
                        <span className="score">{score}</span>
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
                    <div className={`btn ${winner === 'computer' ? 'text-red' : 'text-gray'}`} onClick={backtoMain}>
                        PLAY AGAIN
                    </div>
                </div>}


                <div className="step-4">
                    <div className="btn" onClick={() => setIsModalOpen(true)}>
                        RULES
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <StyledModal isOpen={isModalOpen}>
                    <div className="modal">
                        <div className="first-section">
                            <h1>Rules</h1>
                        </div>
                        <div className="second-section">
                        <img src={rules} alt="img-rule" width="240" height="240"/>
                        </div>
                        <div className="third-section" onClick={() => setIsModalOpen(false)}>
                        <img src={close} alt="close" width="20" height="20" />
                        </div>
                    </div>
                </StyledModal>
            )}
        </>
    )
}

export default SecondStep;