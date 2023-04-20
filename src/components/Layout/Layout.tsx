import { useSelector } from 'react-redux';
import Meta from './Meta';
import NavbarAppBar from '@/components/Navbar';
import { selectLoading } from '@/redux/reducers/loadingReducer';
import LoadingBox from './LoadingBox';
import TaiwanBox from '../TaiwanBox';
import { Container, Box, Button, Divider, Typography } from '@mui/material';
import styled from '@emotion/styled';
import theme from '@/utils/theme';
import useYears from '@/hooks/useYears';
import useCounty from '@/hooks/useCounty';
import useTown from '@/hooks/useTown';
import SelectYear from '../selector/SelectYear';
import SelectCounty from '../selector/SelectCounty';
import useSelect from '@/hooks/useSelect';
import SelectTown from '../selector/SelectTown';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelectProps } from '@/hooks/types';

const SelectBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 56px;
  z-index: 2;

  ${theme.breakpoints.down('md')} {
    flex-direction: column;
    align-items: start;
    margin-left: -8px;
    margin-right: 8px;
  }
`;

const SubmitButton = styled(Button)`
  max-height: 40px;
  margin-left: 6px;
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

interface LayoutProps {
  children: JSX.Element[] | JSX.Element;
  defaultProps?: useSelectProps;
}

export default function Layout({ children, defaultProps }: LayoutProps) {
  const router = useRouter();
  const isLoading = useSelector(selectLoading);
  const { yearsList, handleGetYearsList } = useYears();
  const { countyList, handleGeCountyList } = useCounty();
  const { townList, handleGetTownList } = useTown();
  const {
    year,
    handleChangeYearSelect,

    county,
    handleChangeCountySelect,

    town,
    handleChangeTownSelect,
  } = useSelect(defaultProps);

  const handleSubmit = () => {
    router.push(`/${year}/${county}/${town}`);
  };

  useEffect(() => {
    handleGetYearsList();
    handleGeCountyList();
  }, []);

  useEffect(() => {
    if (county && countyList) {
      const countyCode = countyList.filter((item) => item.name === county);
      handleGetTownList(countyCode[0]?.code);
    }
  }, [county, countyList]);

  useEffect(() => {
    if (defaultProps && countyList) {
      const countyCode = countyList.filter((item) => item.name === defaultProps.defaultCounty);
      handleGetTownList(countyCode[0]?.code);
    }
  }, [defaultProps]);

  return (
    <>
      <Meta />
      <NavbarAppBar />
      {isLoading && <LoadingBox />}
      <Container fixed sx={{ position: 'relative', minHeight: '100vw', pt: 3 }}>
        <TaiwanBox />

        <Typography variant="h1" textAlign="center">
          人口數、戶數按戶別及性別統計
        </Typography>

        <SelectBox>
          {yearsList && <SelectYear value={year} handleChange={handleChangeYearSelect} selectList={yearsList} />}
          {countyList && (
            <SelectCounty value={county} handleChange={handleChangeCountySelect} selectList={countyList} />
          )}
          {townList && (
            <SelectTown
              value={town}
              handleChange={handleChangeTownSelect}
              selectList={townList}
              disabled={county === '0'}
            />
          )}
          <SubmitButton onClick={handleSubmit} variant="contained" disabled={county === '0' || town === '0'}>
            Submit
          </SubmitButton>
        </SelectBox>

        <DividerBox>
          <DividerTitle>
            <p>搜尋結果</p>
          </DividerTitle>
          <Divider color="#C29FFF" />
        </DividerBox>

        {children}
      </Container>
    </>
  );
}
