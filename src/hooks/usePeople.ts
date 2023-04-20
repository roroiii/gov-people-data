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
    const res = await getPeopleData(data);

    if (res instanceof Error) {
      dispatch(setLoading(false));
      return;
    }

    if (res && res.status === 200) {
      dispatch(setLoading(false));
      if (res.data.responseCode === 'OD-0101-S') {
        const items = res.data.responseData;
        const result = getPeopleFormat(items);
        setPeopleData(result);
      }
    }
  };

  return {
    peopleData,
    handleGetPeopleData,
  };
}
