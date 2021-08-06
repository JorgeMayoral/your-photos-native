import React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

function UploadIcon(props: SvgProps) {
  return (
    <Svg height={21} viewBox="0 0 21 21" width={21} {...props}>
      <G
        fill="none"
        fillRule="evenodd"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M6.5 7.753l4-4.232 4 4.191M10.5 3.5v11M4.5 17.5h12" />
      </G>
    </Svg>
  );
}

export default UploadIcon;
