import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Box, Button, Divider, Typography } from '@mui/material';
import styled from '@emotion/styled';
import NavbarAppBar from '@/components/Navbar';
import Meta from './Meta';
import LoadingBox from './LoadingBox';
import TaiwanBox from '../TaiwanBox';
import SelectYear from '../selector/SelectYear';
import SelectCounty from '../selector/SelectCounty';
import SelectTown from '../selector/SelectTown';
import theme from '@/utils/theme';
import { selectLoading, setLoading } from '@/redux/reducers/loadingReducer';
import useYears from '@/hooks/useYears';
import useCounty from '@/hooks/useCounty';
import useTown from '@/hooks/useTown';
import useSelect from '@/hooks/useSelect';
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
  children?: JSX.Element[] | JSX.Element;
  defaultProps?: useSelectProps;
}

export default function Layout({ children, defaultProps }: LayoutProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const { yearsList, handleGetYearsList } = useYears();
  const { countyList, handleGetCountyList } = useCounty();
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
    const newUrl = `/${year}/${county}/${town}`;
    const isSamePage = newUrl === decodeURIComponent(router.asPath);

    if (!isSamePage) {
      dispatch(setLoading(true));
      router.push(newUrl);
    }
  };

  useEffect(() => {
    handleGetYearsList();
    handleGetCountyList();
  }, [handleGetYearsList, handleGetCountyList]);

  useEffect(() => {
    if (county && countyList) {
      const countyCode = countyList.filter((item) => item.name === county);
      handleGetTownList(countyCode[0]?.code);
    }
  }, [county, countyList, handleGetTownList]);

  useEffect(() => {
    if (defaultProps && countyList) {
      const countyCode = countyList.filter((item) => item.name === defaultProps.defaultCounty);
      handleGetTownList(countyCode[0]?.code);
    }
  }, [defaultProps, countyList, handleGetTownList]);

  return (
    <>
      <Meta />
      <NavbarAppBar />
      {isLoading && <LoadingBox />}
      <Container fixed sx={{ position: 'relative', minHeight: '100vw', pt: 3, pl: { xs: 2 }, pr: { xs: 2 } }}>
        <TaiwanBox />

        <Typography variant="h1" textAlign="center">
          人口數、戶數按戶別及性別統計
        </Typography>

        <SelectBox>
          {yearsList && <SelectYear value={year} handleChange={handleChangeYearSelect} selectList={yearsList} />}

          {countyList && (
            <SelectCounty value={county} handleChange={handleChangeCountySelect} selectList={countyList} />
          )}

          <SelectTown
            value={town}
            handleChange={handleChangeTownSelect}
            selectList={townList}
            disabled={county === ''}
          />

          <SubmitButton onClick={handleSubmit} variant="contained" disabled={county === '' || town === ''}>
            Submit
          </SubmitButton>
        </SelectBox>

        <DividerBox>
          <DividerTitle>
            <p>搜尋結果</p>
          </DividerTitle>
          <Divider sx={{ background: theme.palette.secondary.light }} />
        </DividerBox>

        {children}
      </Container>
    </>
  );
}
