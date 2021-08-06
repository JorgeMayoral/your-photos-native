import React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

function FlashOffIcon(props: SvgProps) {
  return (
    <Svg height={21} viewBox="0 0 21 21" width={21} {...props}>
      <G
        fill="none"
        fillRule="evenodd"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M8.5 18.5h4M10.5 5a4.5 4.5 0 012.001 8.532l-.001.968a2 2 0 11-4 0v-.968A4.5 4.5 0 0110.5 5z" />
      </G>
    </Svg>
  );
}

export default FlashOffIcon;
