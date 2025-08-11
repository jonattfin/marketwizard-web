import Head from 'next/head';

export default async function News() {
  const request = await fetch("https://alpha-vantage.p.rapidapi.com/query?function=TIME_SERIES_DAILY&symbol=MSFT&outputsize=compact&datatype=json", {
    headers: {
      "x-rapidapi-key": `${process.env.REACT_APP_SECRET_KEY}`,
    }
  });
  const data = await request.json();

  // Or a custom loading skeleton component
  return (
    <>
      <Head>
        <title>About this page</title>
      </Head>
      <h3>News</h3>
      <p>{JSON.stringify(data)}</p>
    </>
  );
}