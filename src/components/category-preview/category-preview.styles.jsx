import styled from "styled-components";
export const CategoryPreviewContainerStyles = styled.div`
	display: flex;
	flex-direction: column;
	margin-bottom: 30px;

	.title {
		font-size: 28px;
		margin-bottom: 25px;
		cursor: pointer;
	}

	.preview {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		column-gap: 20px;
	}
`;
