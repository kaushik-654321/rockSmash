import React, { useEffect, useState } from "react";
import scissor from '../../assets/images/icon-scissors.svg';
import paper from '../../assets/images/icon-paper.svg';
import rock from '../../assets/images/icon-rock.svg';


interface PlayerChoiceProps {
    playerChoice: string;
    determineWinner: (playerChoice: string, computerChoice: string) => void;
    winner: string
}


const HousePick: React.FC<PlayerChoiceProps> = ({ playerChoice, determineWinner, winner }) => {
    const [computerChoice, setComputerChoice] = useState<string>();
    const choices = ["rock", "paper", "scissor"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    const [computerChoiceTyp, setComputerChoiceTyp] = useState<string>();
    const obj = {
        'rock': rock,
        'paper': paper,
        'scissor': scissor
    }
    useEffect(() => {
        let timeoutId = setTimeout(() => {
            let key: string = randomChoice;
            setComputerChoiceTyp(key);
            const choice = obj[key as keyof typeof obj];
            setComputerChoice(choice);
            determineWinner(playerChoice, randomChoice);
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        }
    }, [])
    return (
        <div className="stp-2-right">
            <span>THE HOUSE PICKED</span>
            {computerChoice ? (
                <div className={`right-${computerChoiceTyp}-outside ${winner === 'computer' && 'computer'}-outside `}>
                    <div className={`stp-2-right-${computerChoiceTyp}`}>
                        <div className="icon-bg-outside">
                            <div className="icon-bg">
                                <img src={computerChoice} alt="house-pick" />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className="icon-bg-outside">
                        <div className="icon-bg-blank"></div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HousePick;