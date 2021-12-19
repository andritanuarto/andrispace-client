import Head from 'next/head';
import MainHeader from '../components/main-header';

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <MainHeader />
      </div>
    </>
  )
};

export default Home;
