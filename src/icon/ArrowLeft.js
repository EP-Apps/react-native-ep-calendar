/***
 * @copyright EP-Apps 2021
 * @licence MIT
 * @license License text available at https://opensource.org/licenses/MIT
 *
 * This file is part of npm package react-native-calendar
 */

import React from 'react';

import Svg, {Path} from 'react-native-svg';

const ArrowLeft = ({width, height, fill}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        fill={fill}
      />
    </Svg>
  );
};

export default ArrowLeft;
