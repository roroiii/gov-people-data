import { useState } from 'react';
import { getPeopleData } from '@/pages/api/govAPI';
import { UsePeopleState } from './types';
import { getPeopleFormat } from '@/utils/format';
import { useDispatch } from 'react-redux';
import { setLoading } from '@/redux/reducers/loadingReducer';

export default function usePeople(): UsePeopleState {
  const dispatch = useDispatch();
  const [peopleData, setPeopleData] = useState<UsePeopleState['peopleData']>(null);

  // 待完成
  const handleGetPeopleData: UsePeopleState['handleGetPeopleData'] = async (data) => {
    dispatch(setLoading(true));
    console.log({ data });
    const res = await getPeopleData(data);

    if (res instanceof Error) {
      dispatch(setLoading(false));
      console.log(res);
      return;
    }

    if (res && res.status === 200 && res.data.responseCode === 'OD-0101-S') {
      dispatch(setLoading(false));
      console.log(res.data);
      const items = res.data.responseData;
      const result = getPeopleFormat(items);
      console.log({ result });

      setPeopleData(result);
    }
  };

  return {
    peopleData,
    handleGetPeopleData,
  };
}
