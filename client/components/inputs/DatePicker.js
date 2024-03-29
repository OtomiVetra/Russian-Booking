import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTheme } from '@mui/material';

export default function DatePickers({
  onDatesChange = () => { }
}) {
  const theme = useTheme()
  const [startDate, setStartDate] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  React.useEffect(() => {
    onDatesChange({
      startDate,
      endDate
    })
  }, [startDate, endDate])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="data-pickers">
        <DatePicker

          label="Дата заезда"
          value={startDate}
          onChange={(newValue) => {
            setStartDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        <DatePicker
          label="Дата выезда"
          value={endDate}
          onChange={(newValue) => {
            setEndDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </LocalizationProvider>

  );
}