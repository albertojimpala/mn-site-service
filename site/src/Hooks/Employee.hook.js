import { useCallback, useEffect, useState } from 'react';
import { message } from 'antd';
import { FIND, process } from '../Service/Api';

export const useFetchEmployees = (queries = '', skip = 0, limit = 10) => {
  const [data, setData] = useState({ data: [] });
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({ queries, skip, limit });

  const getEmployees = useCallback(async () => {
    setLoading(true);
    const response = await process(FIND, 'employees', {}, params);
    if (response?.ok) {
      setData(response.data);
    } else {
      message.error('Error al consultar clientes');
    }
    setLoading(false);
  }, [process, params]);

  useEffect(() => {
    getEmployees();
  }, [getEmployees]);

  const onChangeParams = (q = '', s = 0, l = 10) =>
    setParams({ queries: q, skip: s, limit: l });

  const update = () => getEmployees();

  return [data, loading, onChangeParams, update];
};
