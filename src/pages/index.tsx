import { useEffect } from 'react';
import usePeople from '@/hooks/usePeople';
import useYears from '@/hooks/useYears';
import useCountry from '@/hooks/useCountry';
import useTown from '@/hooks/useTown';
import useSelect from '@/hooks/useSelect';
import styled from '@emotion/styled';
import { Box, Button, Container, Divider, Typography } from '@mui/material';
import Layout from '@/components/Layout/Layout';
import SelectTown from '@/components/selector/SelectTown';
import SelectYear from '@/components/selector/SelectYear';
import SelectCountry from '@/components/selector/SelectCountry';
import ColumnChart from '@/components/chart/ColumnChart';
import PieChart from '@/components/chart/PieChart';
import theme from '@/utils/theme';

const SelectBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 56px;

  ${theme.breakpoints.down('md')} {
    flex-direction: column;
    align-items: start;
    margin-left: -8px;
    margin-right: 8px;
  }
`;

const SubmitButton = styled(Button)`
  max-height: 40px;
  margin: 6px;
  font-family: 'Ubuntu';
  font-weight: 700;

  ${theme.breakpoints.down('md')} {
    width: 100%;
  }
`;

const DividerBox = styled('div')`
  position: relative;
  width: 100%;
  margin-top: 42px;
  margin-bottom: 42px;
`;

const DividerTitle = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 10px;
  background-color: #ffffff;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.palette.secondary.main};
    white-space: nowrap;
    font-size: 13px;
    padding: 8px 13px;
    border: 1px ${theme.palette.secondary.main} solid;
    border-radius: 16px;
    max-width: 78px;
    max-height: 32px;
  }
`;

export default function Home() {
  const { yearsList, handleGetYearsList } = useYears();
  const { countyList, handleGeCountryList } = useCountry();
  const { townList, handleGetTownList } = useTown();
  const { peopleData, handleGetPeopleData } = usePeople();

  console.log({ peopleData });

  const {
    year,
    handleChangeYearSelect,

    county,
    handleChangeCountrySelect,

    town,
    handleChangeTownSelect,
  } = useSelect();

  console.log({ year, county, town });

  const handleSubmit = () => {
    handleGetPeopleData({
      year: year,
      params: {
        COUNTY: county.slice(1),
        TOWN: town,
      },
    });
  };

  useEffect(() => {
    handleGetYearsList();
    handleGeCountryList();
  }, []);

  useEffect(() => {
    if (county) handleGetTownList(county[0]);
  }, [county]);

  return (
    <Layout>
      <Container fixed sx={{ pt: 3 }}>
        <Typography variant="h1" textAlign="center">
          人口數、戶數按戶別及性別統計
        </Typography>

        <SelectBox>
          {yearsList && <SelectYear value={year} handleChange={handleChangeYearSelect} selectList={yearsList} />}
          {countyList && (
            <SelectCountry value={county} handleChange={handleChangeCountrySelect} selectList={countyList} />
          )}
          {townList && (
            <SelectTown
              value={town}
              handleChange={handleChangeTownSelect}
              selectList={townList}
              disabled={county === '0'}
            />
          )}
          <SubmitButton onClick={handleSubmit} variant="contained" disabled={county === '0' && town === '0'}>
            Submit
          </SubmitButton>
        </SelectBox>

        <DividerBox>
          <DividerTitle>
            <p>搜尋結果</p>
          </DividerTitle>
          <Divider color="#C29FFF" />
        </DividerBox>

        <ColumnChart peopleData={peopleData} />
        <PieChart peopleData={peopleData} />
      </Container>
    </Layout>
  );
}
