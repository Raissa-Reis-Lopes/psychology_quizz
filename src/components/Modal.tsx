import React from "react";
import styled from 'styled-components';



const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
`

const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`


interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) =>{

    if(!isOpen) return null;

    return(
        <ModalBackground>
            <ModalContent onClick={(e) => e.stopPropagation}>
                {children}
            </ModalContent>
        </ModalBackground>       
    )
}

export default Modal;