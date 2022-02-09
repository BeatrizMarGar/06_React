import FormField from "./formField"
import { useState } from "react";

export function Confirmation() {
    
    const [value, setValue] = useState ({conf: false})
    const handleChange = event => {
        setValue(prevState => ({
          ...prevState,
          [event.target.name]: event.target.value
        }));
    
      };
    return (
        <div>
            <form>
                <FormField
                    type="button"
                    name="true"
                    label='true'
                    value={value.conf}
                    onChange={handleChange}
                    autofocus
                />
                <FormField
                    type="button"
                    name="false"
                    label='false'
                    value={value.conf}
                    onChange={handleChange}
                    autofocus
                />
            </form>
        </div>
    )
}