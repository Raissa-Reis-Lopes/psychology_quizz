import React, { ComponentProps } from "react";
import './Button.css'

interface ButtonProps extends ComponentProps<'div'> {}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
    return (
        <div className="box-1" {...props}>
            <div className="btn btn-one">
                <span>{children}</span>
            </div>
        </div>
    )
}

export default Button;
