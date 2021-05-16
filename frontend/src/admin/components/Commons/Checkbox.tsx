import * as React from "react";
import {Checkbox} from "@material-ui/core";

export const CustomCheckbox: React.FC = () =>  {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ 'aria-label': 'primary checkbox' }}
        />
    );
}