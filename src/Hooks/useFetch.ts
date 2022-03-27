import { useEffect, useState } from "react";

export const useFetch = <T>(apiCallback: (prop?: any) => Promise<any>) => {
  const [resData, setResData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const initialData = async () => {
    setLoading(true)
    try {
      const data = await apiCallback();
      setResData(data)
      setLoading(false)
    } catch (e) {
      setError(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    initialData()
  }, []);

  return {resData, loading, error}
}