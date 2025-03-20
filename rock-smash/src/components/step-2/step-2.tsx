import React from "react";
import logo from '../../assets/images/logo.svg';
import paper from '../../assets/images/icon-paper.svg';
import rock from '../../assets/images/icon-rock.svg';
import scissor from '../../assets/images/icon-scissors.svg';
import './step-2.css';

interface SecondStepProps{
    playerChoice: string
}


const SecondStep: React.FC<SecondStepProps> = ({playerChoice}) =>{

const obj =[playerChoice]

return(
    <>
    <div className="container">
        <div className="stp-1">
            <div className="first-section">
                <img src = {logo} />
            </div>
            <div className="right">
                <span className="score-text">score</span>
                <span className="score">12</span>
            </div>


        </div>

        <div className="stp-2">


            <div className="stp-2-left">
                <span>YOU PICKED</span>
                <div className="left-rock-outside">
                    <div className="stp-2-left-rock">
                        <div className="icon-bg-outside">
                            <div className="icon-bg">
                                <img src={obj[0]} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="stp-2-right">

                <span>THE HOUSE PICKED</span>

                <div>
                    <div>
                        <div className="icon-bg-outside">
                            <div className="icon-bg-blank">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="step-3">
            <div className="btn">
                RULES
            </div>
        </div>
    </div>
    </>
)
}

export default SecondStep;