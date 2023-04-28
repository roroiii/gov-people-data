import React, { useEffect } from 'react';
import Layout from '@/components/Layout/Layout';
import ColumnChart from '@/components/chart/ColumnChart';
import PieChart from '@/components/chart/PieChart';
import { PeopleData } from '@/hooks/types';
import { useRouter } from 'next/router';
import { getCountyList, getPeopleDataList, getYearsList } from '@/api/getListData';
import { GetStaticPropsContext } from 'next';
import { useDispatch } from 'react-redux';
import { setLoading } from '@/redux/reducers/loadingReducer';

export default function DetailPage({ peopleData }: { peopleData: PeopleData }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { year, county, town } = router.query as { year: string; county: string; town: string };

  useEffect(() => {
    dispatch(setLoading(false));
  }, [dispatch, peopleData]);

  if (year && county && town) {
    const defaultProps = { defaultYear: year, defaultCounty: county, defaultTown: town };
    return (
      <Layout defaultProps={defaultProps}>
        <ColumnChart peopleData={peopleData} />
        <PieChart peopleData={peopleData} />
      </Layout>
    );
  }
  return <></>;
}

export async function getStaticPaths() {
  const yearList = await getYearsList();
  const countyList = await getCountyList();

  if (countyList) {
    const paths = [];

    for (let i = 0; i < yearList.length; i++) {
      for (let j = 0; j < countyList.length; j++) {
        paths.push({
          params: {
            year: yearList[i],
            county: countyList[j].name,
            town: '*',
          },
        });
      }
    }

    return {
      paths,
      fallback: 'blocking',
    };
  }
}

export async function getStaticProps(content: GetStaticPropsContext) {
  const { year, county, town } = content.params as {
    year: string;
    county: string;
    town: string;
  };

  const peopleData = await getPeopleDataList({
    year,
    params: {
      COUNTY: county,
      TOWN: town,
    },
  });

  return {
    props: {
      peopleData,
    },
  };
}
