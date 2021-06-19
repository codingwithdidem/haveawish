import React from 'react';
import { css } from '@emotion/react';
import BeatLoader from 'react-spinners/BeatLoader';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%',
};

type LoaderProps = {
  color: string;
  size: number;
};

const Loader: React.FC<LoaderProps> = ({ color, size }) => {
  return (
    <div className="sweet-loading" style={style as React.CSSProperties}>
      <BeatLoader color={color} css={override} size={size} />
    </div>
  );
};

export default Loader;
