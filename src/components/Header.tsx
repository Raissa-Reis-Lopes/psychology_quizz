import React from "react";
import styled from "styled-components";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import useModal from "../hooks/useModal";

const HeaderStyled = styled.div`
    position: fixed;
    top: 0;
    padding: 20px 10px;
    padding-right: 90px;
    width: 100%;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    color: #000546;
`;
const RowAlign = styled.div`
    width: 50%;
    height: fit-content;
    display: flex;
    justify-content: end;
    align-items: end;
`;

const Welcome = styled.h1`
    font-family: "Playfair Display", serif;
    font-size: 40px;
    font-weight: 800;
    width: 100%;
    margin-left: 80px;
`;

interface HeaderProps {
    title: string;
    children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ title, children }) => {
    const { user } = useUser();
    const navigate = useNavigate();
    const { isOpen, openModal, closeModal } = useModal();

    return (
        <HeaderStyled>
            <Welcome>{title}</Welcome>
            <RowAlign>
                {children}
            </RowAlign>
        </HeaderStyled>
    );
};

export default Header;
