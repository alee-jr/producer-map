import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
`

export const SideBar = styled.div`
    background-color: ${({ theme }) => theme.colors.darker};
    width: 15%;
    height: 100%;
`

export const Content = styled.div`
    width: 85%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const Title = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    padding: 20px 15px;

    > h1 {
        margin: 0;
        color: #20252B;
        font-size: 24px;
        font-weight: 700;
    }
`