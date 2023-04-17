import Meta from '@/components/Meta';
import { styled } from '@mui/material';
import { useEffect } from 'react';
import usePeople from '@/hooks/usePeople';
import useYears from '@/hooks/useYears';
import { getCounty } from './api/govAPI';
import useCities from '@/hooks/useCountry';

export default function Home() {
  const { peopleData, handleGetPeopleData } = usePeople();
  const { yearsData, handleGetYears } = useYears();
  const { countryList, handleGeCountryList } = useCities();
  useEffect(() => {
    handleGetPeopleData({ year: 109 });
    handleGetYears();
    getCounty().then((res) => console.log(res));

    handleGeCountryList();
  }, []);

  console.log({ yearsData, peopleData, countryList });

  return (
    <>
      <Meta />
      <main>
        <h1></h1>
      </main>
    </>
  );
}
