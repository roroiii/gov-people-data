import { useState } from 'react';
import { getPeopleData } from '@/pages/api/govAPI';
import { PeopleData, UsePeopleState } from './types';
import _, { groupBy } from 'lodash-es';
import { getPeopleFormat } from '@/utils/format';

function usePeople(): UsePeopleState {
  const [peopleData, setPeopleData] = useState<UsePeopleState['peopleData']>(null);

  // 待完成
  const handleGetPeopleData: UsePeopleState['handleGetPeopleData'] = async (data) => {
    const res = await getPeopleData(data);
    console.log(res.data);
    if (res && res.status === 200) {
      const datas = res.data.responseData;
      const array = getPeopleFormat(datas);
      setPeopleData(array);
      const test = _.groupBy(array, (data: PeopleData) => data.county);
      console.log({ test });
    }
  };

  return {
    peopleData,
    handleGetPeopleData,
  };
}

export default usePeople;
