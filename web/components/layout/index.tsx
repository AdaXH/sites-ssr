import React from 'react';
import { LayoutProps, SProps } from 'ssr-types-react';
import { createBrowserHistory, createMemoryHistory, createLocation } from 'history';
import App from './App';

// const history = createLocation();

const Layout = (props: LayoutProps) => {
  const { injectState } = props;
  const { injectCss, injectScript } = props.staticList!;
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="theme-color" content="#000000" />
        <title>Serverless Side Render</title>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "var w = document.documentElement.clientWidth / 3.75;document.getElementsByTagName('html')[0].style['font-size'] = w + 'px'",
          }}
        />
        {injectCss}
      </head>
      <body>
        <div id="app">
          <App {...props} />
        </div>
        {injectState}
        {injectScript}
      </body>
    </html>
  );
};

export default Layout;
