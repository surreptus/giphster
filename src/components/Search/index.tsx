import React, { FC, ChangeEvent, useState } from 'react'

import './styles.css'

interface Props {
  onChange: (value: string) => void;
}

const Search: FC<Props> = ({ onChange }) => {
  const [value, setValue] = useState('')

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    onChange(event.target.value)
  }

  return (
    <input
      className='search'
      placeholder='Search ... e.g. Star Trek'
      type='text'
      value={value}
      onChange={handleChange}
    />
  )
}

export default Search
