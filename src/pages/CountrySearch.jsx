import {
  Container,
  SearchForm,
  Section,
  Heading,
  Loader,
  CountryList,
} from 'components';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchByRegion } from 'service/country-service';

export const CountrySearch = () => {
  const [countries, setContries] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');
  const onSubmit = region => {
    setSearchParams({ name: region });
  };

  useEffect(() => {
    if (!name) {
      return;
    }
    fetchByRegion(name)
      .then(data => setContries(data))
      .catch(err => console.log(err));
  }, [name]);

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
      </Container>
    </Section>
  );
};
