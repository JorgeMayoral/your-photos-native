import React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

const CameraIcon = (props: SvgProps) => {
  return (
    <Svg height={40} viewBox="0 0 21 21" width={40} {...props}>
      <G
        fill="none"
        fillRule="evenodd"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M2.5 14.5v-6a2 2 0 012-2h2l2.079-2h3.92l1.92 2H16.5a2 2 0 012 2v6a2 2 0 01-2 2h-12a2 2 0 01-2-2z" />
        <Path d="M13.5 11.5a3 3 0 10-6 0 3 3 0 006 0z" />
      </G>
    </Svg>
  );
};

export default CameraIcon;
