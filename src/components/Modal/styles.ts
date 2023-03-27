import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Overlay = styled.div`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
	align-items: center;
	z-index: 2;
	padding: 40px;
	@media (prefers-reduced-motion: no-preference) {
		animation-name: ${fadeIn};
		animation-fill-mode: backwards;
	}
`

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.tertiary};
	z-index: 1;
	position: relative;
	width: 320px;
	border-radius: 8px;
`

export const Header = styled.div`
	height: 32px;
	width: 100%;
	background-color: ${({ theme }) => theme.colors.secondary};
	color: ${({ theme }) => theme.colors.primary};
	display: flex;
	justify-content: flex-end;
	align-items: center;
	border-radius: 6px 6px 0px 0px;

	> button {
		margin-right: 10px;
		border: none;
		outline: none;
		background-color: transparent;
	}
`

export const Title = styled.div`
	display: flex;
	align-items: center;
	background-color: ${({ theme }) => theme.colors.primary};
	width: 100%;
	box-shadow: 0px 2px 1px rgba(65, 81, 100, 0.15);
	padding: 10px 0px;

	> h1 { 
		margin-left: 15px;
		font-family: ${({ theme }) => theme.fonts.body};
		font-size: 18px;
		margin-top: 0px;
		margin-bottom: 0px;
		font-weight: 600;
		color: #415164;
	}
`

export const AttentionText = styled.div`
	background-color: ${({ theme }) => theme.colors.primary};
	box-shadow: 0px 2px 1px rgba(65, 81, 100, 0.15);
	border-radius: 8px;
	padding: 16px;
	margin: 20px 0px;

	> h3 {
		font-size: 16px;
		color: #415164;
		font-weight: 700;
		font-family: ${({ theme }) => theme.fonts.text};
	}

	> p {
		margin: 5px 0px;
		font-size: 14px;
		font-family: ${({ theme }) => theme.fonts.text};
	}
`

export const ActionsButtons = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-around;
	align-items: center;
	border-top: 1px solid #C8CED8;
	background-color: ${({ theme }) => theme.colors.primary};
	height: 64px;
	border-radius: 0px 8px 8px 0px;
	
`

export const ExcludeButton = styled.button`
	border: 1px solid #FFD2D1;
	display: flex;
	align-items: center;
	outline: none;
	font-size: 12px;
	justify-content: center;
	height: fit-content;
	padding: 10px 0px;
	width: 113px;
	border-radius: 4px;
	font-family: ${({ theme }) => theme.fonts.text};
	background-color: ${({ theme }) => theme.colors.primary};
	color: ${({ theme }) => theme.colors.danger};


	> svg {
		margin-right: 5px;

		> path {
			fill: ${({ theme }) => theme.colors.danger};
		}
	}
`

export const CancelButton = styled.button`
	color: #415164;
	border: none;
	outline: none;
	background-color: transparent;
	font-size: 12px;
	text-decoration-line: underline;
	font-family: ${({ theme }) => theme.fonts.text};
`