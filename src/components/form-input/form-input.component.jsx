import { FormInputStyles } from "./form-input.styles.jsx";

const FormInput = ({ label, inputOptions }) => {
	return (
		<FormInputStyles>
			<input className="form-input" {...inputOptions} />

			{label && (
				<label
					className="form-input-label"
					shrink={inputOptions.value.length ? "shrink" : ""}
				>
					{label}
				</label>
			)}
		</FormInputStyles>
	);
};

export default FormInput;
