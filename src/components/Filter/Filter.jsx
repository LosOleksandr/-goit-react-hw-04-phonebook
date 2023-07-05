import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import { FilterContainer, FilterLabel, FilterInput } from './Filter.styled';

const searchId = shortid.generate();

export default function Filter({ value, onChange }) {
  return (
    <FilterContainer>
      <FilterLabel htmlFor={searchId}>Search</FilterLabel>
      <FilterInput
        id={searchId}
        name="search"
        type="text"
        value={value}
        onChange={evt => onChange(evt.target.value)}
      />
    </FilterContainer>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
