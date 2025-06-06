import styled from "styled-components";
export const AuthContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 0 16px;
	gap: 48px;
	@media (min-width: 992px) {
		min-width: 900px;
		flex-direction: row;
		justify-content: center;
		margin: 0 auto;
		padding: 0 32px;
	}
`;
