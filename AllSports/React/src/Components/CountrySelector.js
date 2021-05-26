
import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

export default function CountrySelector() {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler = value => {
      console.log(options);
      setValue(value)
    }
  
    return <Select options={options} value={value} onChange={changeHandler}/>
  }
