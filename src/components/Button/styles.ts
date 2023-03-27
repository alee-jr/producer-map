import styled from 'styled-components';

export interface ButtonProps {
    variant: 'primary' | 'danger';
}

export const Button = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding: 10px;
    outline: none;
    width: 170px;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 12px;
    ${props => props.variant === 'primary' ?
        `
            background-color: ${props.theme.colors.primary};
            color: #556476;
            border: 1px solid #C8CED8;
            border-radius: 4px;
        `
        :
        `
            background-color: ${props.theme.colors.danger};
            color: ${props.theme.colors.primary};
            border-radius: 4px;
        `
    }
`