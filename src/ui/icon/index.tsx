import * as React from 'react';
import * as CSSModule from 'react-css-modules';

const styles = require('./icon.css');

export enum IconType {
  Plus,
  Minus,
  Home,
  Bookmark,
  Bookmarks,
  Stack,
  Cog,
  IncreaseIndent,
  DecreaseIndent
}

export interface IconProps {
  title?: string
  type: IconType
}

const iconStyle = {
  display: 'flex',
  width: '1em',
  height: '1em'
};

const paths = { // Unless otherwise noted, taken from IcoMoon.io
  [IconType.Plus]: 'M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z',
  [IconType.Minus]: 'M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z',
  [IconType.Home]: 'M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z',
  [IconType.Bookmark]: 'M6 0v32l10-10 10 10v-32z',
  [IconType.Bookmarks]: 'M8 4v28l10-10 10 10v-28zM24 0h-20v28l2-2v-24h18z',
  [IconType.Stack]: 'M32 10l-16-8-16 8 16 8 16-8zM16 4.655l10.689 5.345-10.689 5.345-10.689-5.345 10.689-5.345zM28.795 14.398l3.205 1.602-16 8-16-8 3.205-1.602 12.795 6.398zM28.795 20.398l3.205 1.602-16 8-16-8 3.205-1.602 12.795 6.398z',
  [IconType.Cog]: 'M29.181 19.070c-1.679-2.908-0.669-6.634 2.255-8.328l-3.145-5.447c-0.898 0.527-1.943 0.829-3.058 0.829-3.361 0-6.085-2.742-6.085-6.125h-6.289c0.008 1.044-0.252 2.103-0.811 3.070-1.679 2.908-5.411 3.897-8.339 2.211l-3.144 5.447c0.905 0.515 1.689 1.268 2.246 2.234 1.676 2.903 0.672 6.623-2.241 8.319l3.145 5.447c0.895-0.522 1.935-0.82 3.044-0.82 3.35 0 6.067 2.725 6.084 6.092h6.289c-0.003-1.034 0.259-2.080 0.811-3.038 1.676-2.903 5.399-3.894 8.325-2.219l3.145-5.447c-0.899-0.515-1.678-1.266-2.232-2.226zM16 22.479c-3.578 0-6.479-2.901-6.479-6.479s2.901-6.479 6.479-6.479c3.578 0 6.479 2.901 6.479 6.479s-2.901 6.479-6.479 6.479z',
  [IconType.IncreaseIndent]: 'M0 2h32v4h-32zM12 8h20v4h-20zM12 14h20v4h-20zM12 20h20v4h-20zM0 26h32v4h-32zM0 22v-12l8 6z',
  [IconType.DecreaseIndent]: 'M0 2h32v4h-32zM12 8h20v4h-20zM12 14h20v4h-20zM12 20h20v4h-20zM0 26h32v4h-32zM8 10v12l-8-6z',
};

export default CSSModule(({ title, type }) =>
  <svg styleName="icon" viewBox="0 0 32 32" role="img">
    <path d={paths[type]}></path>
  </svg>,
  styles
);