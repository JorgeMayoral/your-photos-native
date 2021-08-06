import React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

function DeleteIcon(props: SvgProps) {
  return (
    <Svg height={15} viewBox="0 0 21 21" width={15} {...props}>
      <G
        fill="none"
        fillRule="evenodd"
        stroke="red"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M5.5 4.5h10v12a2 2 0 01-2 2h-6a2 2 0 01-2-2zm5-2a2 2 0 011.995 1.85l.005.15h-4a2 2 0 012-2zM3.5 4.5h14M8.5 7.5v8M12.5 7.5v8" />
      </G>
    </Svg>
  );
}

export default DeleteIcon;
