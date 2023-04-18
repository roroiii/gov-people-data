import { useEffect } from 'react';
import usePeople from '@/hooks/usePeople';
import useYears from '@/hooks/useYears';
import useCountry from '@/hooks/useCountry';
import useTown from '@/hooks/useTown';
import { Box, Button, Container, Typography } from '@mui/material';
import Layout from '@/components/Layout/Layout';
import SelectTown from '@/components/selector/SelectTown';
import SelectYear from '@/components/selector/SelectYear';
import SelectCountry from '@/components/selector/SelectCountry';
import styled from '@emotion/styled';
import useSelect from '@/hooks/useSelect';

const SelectBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 56px;
`;

export default function Home() {
  const { yearsList, handleGetYearsList } = useYears();
  const { countryList, handleGeCountryList } = useCountry();
  const { townList, handleGetTownList } = useTown();
  const { peopleData, handleGetPeopleData } = usePeople();

  console.log({ peopleData });

  const {
    year,
    handleChangeYearSelect,

    country,
    handleChangeCountrySelect,

    town,
    handleChangeTownSelect,
  } = useSelect();

  console.log({ year, country, town });

  const handleSubmit = () => {
    handleGetPeopleData({
      year: year,
      params: {
        COUNTY: country.slice(1),
        TOWN: town,
      },
    });
  };

  useEffect(() => {
    handleGetYearsList();
    handleGeCountryList();
  }, []);

  useEffect(() => {
    if (country) handleGetTownList(country[0]);
  }, [country]);

  return (
    <Layout>
      <Container fixed sx={{ pt: 3 }}>
        <Typography variant="h1" textAlign="center">
          人口數、戶數按戶別及性別統計
        </Typography>

        <SelectBox>
          {yearsList && <SelectYear value={year} handleChange={handleChangeYearSelect} selectList={yearsList} />}
          {countryList && (
            <SelectCountry value={country} handleChange={handleChangeCountrySelect} selectList={countryList} />
          )}
          {townList && (
            <SelectTown
              value={town}
              handleChange={handleChangeTownSelect}
              selectList={townList}
              disabled={country === '0'}
            />
          )}
          <Button
            onClick={handleSubmit}
            variant="contained"
            disabled={country === '0' && town === '0'}
            sx={{ maxHeight: 40, m: '6px', fontFamily: 'Ubuntu', fontWeight: 700 }}
          >
            Submit
          </Button>
        </SelectBox>
      </Container>
    </Layout>
  );
}
