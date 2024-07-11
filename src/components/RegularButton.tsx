import React, { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'>{}

const RegularButton: React.FC<ButtonProps> = ({children, ...props}) => {
    return(
        <button {...props}>{children}</button>
    )
}

export default RegularButton;