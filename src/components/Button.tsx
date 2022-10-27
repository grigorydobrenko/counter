import React from 'react';
import s from "./Counter.module.css";

type ButtonPropsType = {
    onClick: () => void
    disabled: boolean
    value: string
}


const Button:React.FC<ButtonPropsType> = (props) => {

    const {
        onClick,
        disabled,
        value} = props

    return (
        <div>
            <button className={s.btn}
                    onClick={onClick}
                    disabled={disabled}
            >{value}</button>
        </div>
    );
};

export default Button;