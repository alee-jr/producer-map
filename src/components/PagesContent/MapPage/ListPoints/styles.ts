import styled from 'styled-components';

export const Container = styled.div`
    width: 344px;
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 20px;
    top: 10px;
`

export const HeaderTitle = styled.div`
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 100%;
    border-radius: 8px 8px 0px 0px;
    padding: 5px;

    > span {
        color: ${({ theme }) => theme.colors.primary};
        font-size: 12px;
        margin-left: 15px;
    }
`

export const Content = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 0px 0px 8px 8px;
    width: 100%;
   
    text-align: center;


`

export const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: start;
    padding: 10px 20px;
    cursor: pointer;

    .createdAt {
        color: #556476;
        font-size: 12px;
    }

    .defaultMessage {
        text-align: center;
        font-size: 12px;
        font-weight: 700;
    }

    &:nth-child(n + 2) {
        border-top: 1px solid #E7E8EF;
    }

    > div {
        display: flex;
        align-items: center;

        > svg {
            margin-right: 5px;
        }

        > span {
            color: #20252B;
            font-weight: 500;
            font-size: 14px;
        }
    }

    
`