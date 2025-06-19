import { BaseButtonStyles, ButtonSpinner, GoogleSignInButtonStyles, InvertedButtonStyles } from "./button.styles.jsx";

export const BUTTON_TYPE_CLASSES = {
	base: "base",
	google: "google-sign-in",
	inverted: "inverted",
};

const getButtonStyle = (buttonType = BUTTON_TYPE_CLASSES.base) => {
	switch (buttonType) {
		case BUTTON_TYPE_CLASSES.google:
			return GoogleSignInButtonStyles;
		case BUTTON_TYPE_CLASSES.inverted:
			return InvertedButtonStyles;
		default:
			return BaseButtonStyles;
	}
};

const Button = ({ children, buttonType = "default", isLoading, ...otherProps }) => {
	const ButtonStyle = getButtonStyle(buttonType);
	return (
		<ButtonStyle
			// className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
			disabled={isLoading}
			{...otherProps}
		>
			{isLoading ? <ButtonSpinner /> : children}
		</ButtonStyle>
	);
};

export default Button;
