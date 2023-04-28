import Layout from '@/components/Layout/Layout';
import ColumnChart from '@/components/chart/ColumnChart';
import PieChart from '@/components/chart/PieChart';
import usePeople from '@/hooks/usePeople';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

export default function DetailPage() {
  const router = useRouter();
  const { year, county, town } = router.query as { year: string; county: string; town: string };
  const { peopleData, handleGetPeopleData } = usePeople();

  useEffect(() => {
    if (year && county && town) {
      handleGetPeopleData({
        year: year,
        params: {
          COUNTY: county,
          TOWN: town,
        },
      });
    }
  }, [year, county, town, handleGetPeopleData]);

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
