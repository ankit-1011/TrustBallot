declare module 'react-awesome-loaders' {
  import * as React from 'react';

  interface LoaderProps {
    loading?: boolean;
    text?: string;
    color?: string;
    background?: string;
    [key: string]: any;
  }

  export class ScatterBoxLoader extends React.Component<LoaderProps> {}
  export class PuffLoader extends React.Component<LoaderProps> {}
  export class CircleLoader extends React.Component<LoaderProps> {}
  // Add any other loaders you use
}
