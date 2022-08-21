import React from 'react';
import { ButtonProps } from './Button.props';
import cn from 'classnames';
import styles from './Button.module.scss';

export default function Button({ children, type = 'button', variant = 'filled', ...props }: ButtonProps) {
    const classes = cn(styles.button, {
        [styles.button_filled]: variant === 'filled',
        [styles.button_outlined]: variant === 'outlined',
    });

    return (
        <button type={type} className={classes} {...props}>{children}</button>
    );
}
