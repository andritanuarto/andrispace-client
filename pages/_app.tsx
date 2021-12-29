import React from "react";
import '../styles/globals.scss';
import { wrapper } from "../redux/store";
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router'

const MyApp = ({ Component, pageProps}: AppProps) => {

  // const router = useRouter();
  return (
    <Component {...pageProps} />
  );
};

export default wrapper.withRedux(MyApp);  