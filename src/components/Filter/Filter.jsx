import React from 'react';
import PropTypes from 'prop-types';
import { Div, Label, Input } from './Filter.styled';

// Компонент фільтрації контактів
function Filter({ value, onChangeFilter }) {
  return (
    <Div>
      <Label>
        <p>Find contacts by name</p>
        <Input type="text" value={value} onChange={onChangeFilter} />
      </Label>
    </Div>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;