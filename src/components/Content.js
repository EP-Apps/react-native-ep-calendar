/***
 * @copyright EP-Apps 2021
 * @licence MIT
 * @license License text available at https://opensource.org/licenses/MIT
 *
 * This file is part of npm package react-native-calendar
 */

import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from '../style/styles';

const GetDateRowDays = (daysData, startIndex, theme) => {
  let rows = [];

  for (let i = startIndex; i < startIndex + 7; i++) {
    if (i < daysData.length) {
      let columnStyle = {};
      let touchableStyle = {};
      let textStyle = {};

      //Date is marked
      if (
        daysData[i].markedDateData !== undefined &&
        daysData[i].markedDateData !== null
      ) {
        if (daysData[i].markerType === undefined) {
          console.warn(
            'MarkerType with identifier ' +
              daysData[i].markedDateData.markerType +
              ' was not found!',
          );

          columnStyle = styles.column;
          touchableStyle = {};
          textStyle = styles.centerText;
        } else {
          //Column style
          if (daysData[i].markerType.markerColumnStyle !== undefined) {
            columnStyle = [
              styles.column,
              daysData[i].markerType.markerColumnStyle,
            ];
          }

          //Touchable style
          if (daysData[i].markerType.markerTouchableStyle !== undefined) {
            touchableStyle = [
              {backgroundColor: theme.markerColor},
              daysData[i].markerType.markerTouchableStyle,
            ];
          }

          //Text style
          if (daysData[i].markerType.markerTextStyle !== undefined) {
            textStyle = [
              theme.dayOfMonthNumber,
              {color: theme.markerTextColor},
              styles.centerText,
              daysData[i].markerType.markerTextStyle,
            ];
          }
        }
      } else {
        columnStyle = styles.column;
        touchableStyle = {};
        textStyle = [theme.dayOfMonthNumber, styles.centerText];
      }

      rows.push(
        <View style={columnStyle} key={daysData[i].date}>
          <TouchableOpacity style={touchableStyle}>
            <Text style={textStyle}>{daysData[i].date.getDate()}</Text>
          </TouchableOpacity>
        </View>,
      );
    }
  }

  return (
    <View style={styles.datesRow} key={startIndex}>
      {rows}
    </View>
  );
};

const Content = ({days, theme}) => {
  const [daysData, setDaysData] = useState(days);
  useEffect(() => {
    setDaysData(days);
  }, [days]);

  const rows = [];

  let rowCount = daysData.length / 7 + (daysData.length % 7 === 0 ? 0 : 1);

  for (let i = 0; i < rowCount; i++) {
    rows.push(GetDateRowDays(daysData, i * 7, theme));
  }

  return <>{rows}</>;
};

export default Content;
