import React from "react";
import '../styles/globals.scss';
import { wrapper } from "../redux/store";

const MyApp = ({ Component, pageProps}) => (
  <>
    <style jsx>{`
      body {
        padding: 0;
      }
    `}</style>
    <Component {...pageProps} />
  </>
)

export default wrapper.withRedux(MyApp);  