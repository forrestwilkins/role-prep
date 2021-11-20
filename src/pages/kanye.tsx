// TODO: Remove or replace with actual feature. This is only a template.

import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { getKanyeQuote, kanyeQuoteSelector } from "../store/kanye";

const Counter = () => {
  const dispatch = useAppDispatch();
  const { data, pending, error } = useAppSelector(kanyeQuoteSelector);

  return (
    <>
      <h2>Generate random Kanye West quote</h2>
      {pending && <p>Loading...</p>}
      {data && <p>{data.quote}</p>}
      {error && <p>Oops, something went wrong</p>}
      <button onClick={() => dispatch(getKanyeQuote())} disabled={pending}>
        Generate Kanye Quote
      </button>
    </>
  );
};

export default Counter;
