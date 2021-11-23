import { useEffect, useState, useRef, Ref } from 'react';

export function useDidMount(callback: Function) {
  useEffect(() => {
    callback();
  }, []);
}

export function useUnmount(callback: Function) {
  useEffect(() => {
    return () => callback();
  }, []);
}

export function useInterval(callback: Function, delay: Number) {
  const savedCallback: Ref<Function> = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return () => {};
  }, [delay]);
}

export function useLoop<T extends (...args: any[]) => any>(request: T, timeout: Number) {
  const [result, setResult] = useState();
  const [error, setError] = useState();

  useInterval(async () => {
    try {
      const res = await request();
      setResult(res);
    } catch (e: any) {
      setError(e?.message);
    }
  }, timeout);

  return [error, result];
}

export function useDebounce(value: any, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

export function useLoading<T extends (...args: any[]) => any>(cb: T): any {
  const [loading, setLoading] = useState<Boolean>(false);
  const arg = useRef<any[]>([]);
  useEffect(() => {
    async function work() {
      try {
        await cb(...arg.current);
      } catch (error) {
        // ingore
      } finally {
        setLoading(false);
      }
    }
    if (loading) {
      work();
    }
  }, [loading]);
  return [
    loading,
    (...args: any[]) => {
      arg.current = args;
      setLoading(true);
    },
  ];
}
