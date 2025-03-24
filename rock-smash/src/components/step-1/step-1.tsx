import React, { useState } from 'react';
import logo from '../../assets/images/logo.svg';
import paper from '../../assets/images/icon-paper.svg';
import rock from '../../assets/images/icon-rock.svg';
import scissor from '../../assets/images/icon-scissors.svg';
import rules from '../../assets/images/image-rules.svg';
import close from '../../assets/images/icon-close.svg';
import StyledModal from "../modal/modal";
import "./step-1.css";

interface FirstStepProps {
  setPlayerChoice: (choice: string) => void;
}


const FirstStep: React.FC<FirstStepProps> = ({setPlayerChoice}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
    const handleChoice = (type: string)=>{
      setPlayerChoice(type);
    }


  return (
    <>
      <div className="container">
        {/* Step 1: Header */}
        <div className="stp-1">
          <div className="first-section">
            <img src={logo} alt="Logo" />
          </div>
          <div className="right">
            <span className="score-text">score</span>
            <span className="score">12</span>
          </div>
        </div>

        {/* Step 2: Game Options */}
        <div className="stp-2">
          <div className="triangle-container">
            <div className="paper-div-outside"  onClick={()=>handleChoice('paper')}>
              <div className="corner-text paper-div">
                <div className="icon-bg-outside">
                  <div className="icon-bg">
                    <img src={paper} alt="Paper" />
                  </div>
                </div>
              </div>
            </div>
            <div className="scissors-div-outside" onClick={()=>handleChoice('scissor')}>
              <div className="corner-text scissors-div">
                <div className="icon-bg-outside">
                  <div className="icon-bg">
                    <img src={scissor} alt="Scissors" />
                  </div>
                </div>
              </div>
            </div>
            <div className="rock-div-outside"  onClick={()=>handleChoice('rock')}>
              <div className="corner-text rock-div">
                <div className="icon-bg-outside">
                  <div className="icon-bg">
                    <img src={rock} alt="Rock" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Step 3: Rules Button */}
        <div className="stp-3">
          <button className="btn" onClick={() => setIsModalOpen(true)}>RULES</button>
        </div>
      </div>
      {/* Modal as Overlay */}
      {isModalOpen && (
        <StyledModal isOpen={isModalOpen}>
          <div className="modal">
            <div className="first-section">
              <h1>Rules</h1>
            </div>
            <div className="second-section">
              <img src={rules} alt="img-rule" />
            </div>
            <div className="third-section" onClick={() => setIsModalOpen(false)}>
              <img src={close} alt="close" />
            </div>
          </div>
        </StyledModal>
      )}

    </>
  );
};

export default FirstStep;
