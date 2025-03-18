import React from "react";
import "./modal.css";

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const StyledModal: React.FC<ModalProps> = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        {children}
        
      </div>
    </div>
  );
};

export default StyledModal;
