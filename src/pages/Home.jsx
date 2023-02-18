import { Container, CountryList, /*Heading, Loader,*/ Section } from 'components';
import { getCountries } from 'service/country-service';
import { useState, useEffect } from 'react';



export const Home = () => {
  const [country, setCountry] = useState([]);
  
  useEffect(() => { 
    getCountries()
      .then(data => { setCountry(data);})
            .catch(console.log);
  }, [])
  
  return (
    <Section>
      <Container>
        <CountryList countries={country} />
        
      </Container>
    </Section>
  );
};
