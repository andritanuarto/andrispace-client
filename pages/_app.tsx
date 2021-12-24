import React from "react";
import '../styles/globals.scss';
import { wrapper } from "../redux/store";
import type { AppProps } from 'next/app'

const MyApp = ({ Component, pageProps}: AppProps) => (
  <Component {...pageProps} />
);

export default wrapper.withRedux(MyApp);  