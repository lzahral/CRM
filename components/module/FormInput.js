import { TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

function FormInput({ name, label, type, value, onChange }) {
    return (
        <>
            {name === "address" ? (
                <TextField
                    variant='outlined'
                    label={label}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                    multiline
                    rows={4}
                />
            ) : name === "date" ? (
                <LocalizationProvider dateAdapter={AdapterMoment}>
                    <DatePicker
                        inputFormat='YYYY/MM/DD'
                        orientation='portrait'
                        label={label}
                        id={name}
                        value={value}
                        onChange={onChange}
                        name={name}
                        renderInput={(props) => (
                            <TextField {...props} error={false} />
                        )}
                    />
                </LocalizationProvider>
            ) : (
                <TextField
                    required={label == "Name"}
                    variant='outlined'
                    label={label}
                    type={type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={onChange}
                />
            )}
        </>
    );
}
export default FormInput;
