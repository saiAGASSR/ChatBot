import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

const languages = [
  { label: 'English', code: 'en-IN' },
  { label: 'Hindi', code: 'hi-IN' },
  { label: 'Bengali', code: 'bn-IN' },
  { label: 'Telugu', code: 'te-IN' },
  { label: 'Marathi', code: 'mr-IN' },
  { label: 'Tamil', code: 'ta-IN' },
  { label: 'Urdu', code: 'ur-IN' },
  { label: 'Gujarati', code: 'gu-IN' },
  { label: 'Kannada', code: 'kn-IN' },
  { label: 'Odia', code: 'or-IN' },
  { label: 'Malayalam', code: 'ml-IN' },
  { label: 'Punjabi', code: 'pa-IN' },
  { label: 'Assamese', code: 'as-IN' },
  { label: 'Maithili', code: 'mai-IN' },
  { label: 'Sanskrit', code: 'sa-IN' },
  { label: 'Konkani', code: 'kok-IN' },
  { label: 'Manipuri', code: 'mni-IN' },
  { label: 'Bodo', code: 'brx-IN' },
  { label: 'Santhali', code: 'sat-IN' },
  { label: 'Kashmiri', code: 'ks-IN' },
  { label: 'Dogri', code: 'doi-IN' },
  { label: 'Sindhi', code: 'sd-IN' },
  { label: 'Nepali', code: 'ne-IN' }
];

export default function SelectLabels({setSelectedLanguageCode,selectedLanguageCode}) {

  const handleChange = (event) => {
    setSelectedLanguageCode(event.target.value);
    console.log('Selected language code:', event.target.value);
  };

  return (
            <FormControl
            size="small"
            sx={{
                minWidth: 50,
                height: 40,
                '& .MuiInputBase-root': {
                height: 36,
                fontSize: '0.875rem', // text-sm
                },
                '& .MuiInputLabel-root': {
                fontSize: '0.75rem', // text-xs
                top: '5px',
                },
                 mt: 1,
            }}
            >
            <InputLabel id="language-select-label">Language</InputLabel>
            <Select
                labelId="language-select-label"
                id="language-select"
                value={selectedLanguageCode}
                label="Language"
                onChange={handleChange}
            >
                <MenuItem value="English">
                <em>None</em>
                </MenuItem>
                {languages.map((lang) => (
                <MenuItem key={lang.code} value={lang.code}>
                    {lang.label}
                </MenuItem>
                ))}
            </Select>
            </FormControl>

  );
}
