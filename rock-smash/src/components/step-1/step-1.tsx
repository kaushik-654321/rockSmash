import React, { useState, useEffect } from 'react';
import logo from '../../assets/images/logo.svg';
import paper from '../../assets/images/icon-paper.svg';
import rock from '../../assets/images/icon-rock.svg';
import scissor from '../../assets/images/icon-scissors.svg';
import rules from '../../assets/images/image-rules.svg';
import close from '../../assets/images/icon-close.svg';
import StyledModal from "../modal/modal";
import "./step-1.scss";

interface FirstStepProps {
  setPlayerChoice: (choice: string) => void;
  score: number
}


const FirstStep: React.FC<FirstStepProps> = ({setPlayerChoice, score}) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(true);
    const handleChoice = (type: string)=>{
      setPlayerChoice(type);
    }
    const preloadImage = (url: string) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.as = "image";
      link.href = url;
      document.head.appendChild(link);
    };



    useEffect(() => {
      preloadImage(rules); // Update with correct path
    }, []);
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
            <span className="score">{score}</span>
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
        <div className="step-3">
          <button className="btn" onClick={() => setIsModalOpen(true)}>RULES</button>
        </div>
      </div>
      {/* Modal as Overlay */}
      {isModalOpen && score < 1 && (
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
  );
};

export default FirstStep;
