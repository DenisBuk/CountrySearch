import { Section, Container, CountryInfo, /*Loader*/ } from 'components';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import {fetchCountry} from "service/country-service"

export const Country = () => {
  const [country, setCountry]= useState({})
 const {countryId} = useParams();
 const location = useLocation();
 const goBackLink = location?.state?.from ?? "/"

 useEffect(()=>{
  fetchCountry(countryId).then(data=> setCountry(data)).catch(err=> console.log(err))

 }, [countryId])

  return (
    <Section>
      <Container>
      <div
          style={{
            marginBottom: '60px',
            color: '#f2f2f2',
            letterSpacing: '0.06em',
            textDecoration: 'underline',

            borderColor: 'gray',
          }}
        >
          <Link to={goBackLink}>Back to Countries</Link>
        </div>
        <CountryInfo country={country}/>
      </Container>
    </Section>
  );
};
