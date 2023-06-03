import React from 'react';
import Provider from '@theme-original/Layout/Provider';
import ThemeProvider from '@site/src/components/ThemeProvider';

export default function ProviderWrapper(props) {
  return (
    <Provider {...props}>
    <ThemeProvider> {props.children} </ThemeProvider>
    </Provider>
  );
}
