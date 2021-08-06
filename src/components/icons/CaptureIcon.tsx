import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

function CaptureIcon(props: SvgProps) {
  return (
    <Svg height={21} viewBox="0 0 21 21" width={21} {...props}>
      <Path
        d="M18.5 7.5V4.494a2 2 0 00-1.994-2L13.5 2.485m5 11.015v3a2 2 0 01-2 2h-3m-6-16.015l-3.006.01a2 2 0 00-1.994 2V7.5m5 11h-3a2 2 0 01-2-2v-3"
        fill="none"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default CaptureIcon;
