import React from 'react';
import Svg, { SvgProps, G, Path } from 'react-native-svg';

const EditIcon = (props: SvgProps) => {
  return (
    <Svg height={15} viewBox="0 0 21 21" width={15} {...props}>
      <G
        fill="none"
        fillRule="evenodd"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <Path d="M17 4a2.121 2.121 0 010 3l-9.5 9.5-4 1 1-3.944 9.504-9.552a2.116 2.116 0 012.864-.125zM9.5 17.5h8M15.5 6.5l1 1" />
      </G>
    </Svg>
  );
};

export default EditIcon;
