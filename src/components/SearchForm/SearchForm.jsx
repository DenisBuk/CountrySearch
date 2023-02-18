import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { BtnSearch, Select, SearchFormStyled } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const [contry, setContry] = useState('');
  const onChangeForm = e => {
    setContry(e.target.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit(contry);
  };

  return (
    <SearchFormStyled onSubmit={onSubmitForm}>
      <BtnSearch type="submit">
        <FiSearch size="16px" />
      </BtnSearch>
      <Select
        aria-label="select"
        name="region"
        required
        onChange={onChangeForm}
        defaultValue="DEFAULT"
      >
        <option value="DEFAULT" disabled>
          Select a region and press enter
        </option>
        <option value="africa">Africa</option>
        <option value="america">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </Select>
    </SearchFormStyled>
  );
};
