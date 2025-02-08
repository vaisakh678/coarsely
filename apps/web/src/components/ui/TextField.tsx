import React from "react";
import { Input } from "./input";
import { cn } from "../../lib/utils";

interface TextFieldProps extends React.ComponentProps<typeof Input> {
	label?: React.ReactNode;
	error?: boolean;
	helperText?: string;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(({ label, error, helperText, ...rest }, ref) => {
	return (
		<div>
			{label ? <span className="mb-1 text-[13px] font-medium">{label}</span> : null}
			<Input {...rest} ref={ref} />
			{helperText ? <span className={cn("mt-1 text-xs", { "text-red-500": error })}>{helperText}</span> : null}
		</div>
	);
});

TextField.displayName = "TextField";

export default TextField;
