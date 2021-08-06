import React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

function FlipIcon(props: SvgProps) {
  return (
    <Svg height={21} viewBox="0 0 21 21" width={21} {...props}>
      <G
        fill="none"
        fillRule="evenodd"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M13 8h5V3" />
        <Path d="M18 8c-2.837-3.333-5.67-5-8.5-5S4.17 4 2 6" />
        <G>
          <Path d="M6.5 11.5h-5v5" />
          <Path d="M1.5 11.5c2.837 3.333 5.67 5 8.5 5s5.33-1 7.5-3" />
        </G>
      </G>
    </Svg>
  );
}

export default FlipIcon;
