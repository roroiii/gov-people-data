import { useState } from 'react';
import { getPeopleData } from '@/pages/api/govAPI';
import { PeopleData, UsePeopleState } from './types';
import _, { groupBy } from 'lodash-es';
import { getPeopleFormat } from '@/utils/format';

export default function usePeople(): UsePeopleState {
  const [peopleData, setPeopleData] = useState<UsePeopleState['peopleData']>(null);

  // 待完成
  const handleGetPeopleData: UsePeopleState['handleGetPeopleData'] = async (data) => {
    console.log({ data });
    const res = await getPeopleData(data);
    console.log(res.data);
    if (res && res.status === 200 && res.data.responseCode === 'OD-0101-S') {
      const items = res.data.responseData;
      const array = getPeopleFormat(items);
      setPeopleData(array);
      const test = _.groupBy(array, (data: PeopleData) => data.county);
      // console.log({ test });
    }
  };

  return {
    peopleData,
    handleGetPeopleData,
  };
}
