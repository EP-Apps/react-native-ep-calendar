/***
 * @copyright EP-Apps 2021
 * @licence MIT
 * @license License text available at https://opensource.org/licenses/MIT
 *
 * This file is part of npm package react-native-calendar
 */

import React from 'react';

import Svg, {Path} from 'react-native-svg';

const ArrowRight = ({width, height, fill}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16">
      <Path
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        fill={fill}
      />
    </Svg>
  );
};

export default ArrowRight;
