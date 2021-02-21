/***
 * @copyright EP-Apps 2021
 * @licence MIT
 * @license License text available at https://opensource.org/licenses/MIT
 *
 * This file is part of npm package react-native-calendar
 */

import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from '../style/styles';
import ArrowLeft from '../icon/ArrowLeft';
import ArrowRight from '../icon/ArrowRight';

const Header = ({month, theme, pressedArrow}) => {
  return (
    <>
      <View style={styles.row}>
        <View style={styles.column}>
          <TouchableOpacity
            onPress={() => {
              pressedArrow(false);
            }}>
            <View style={styles.centerIcon}>
              <ArrowLeft height={18} width={18} fill={theme.arrowColor} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.dateColumn}>
          <Text style={[theme.dateColor, styles.dateText]}>
            {month.toString()}
          </Text>
        </View>
        <View style={styles.column}>
          <TouchableOpacity
            onPress={() => {
              pressedArrow(true);
            }}>
            <View style={styles.centerIcon}>
              <ArrowRight height={18} width={18} fill={theme.arrowColor} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={[theme.dayOfWeekString, styles.centerText]}>Mo</Text>
        </View>
        <View style={styles.column}>
          <Text style={[theme.dayOfWeekString, styles.centerText]}>Di</Text>
        </View>
        <View style={styles.column}>
          <Text style={[theme.dayOfWeekString, styles.centerText]}>Mi</Text>
        </View>
        <View style={styles.column}>
          <Text style={[theme.dayOfWeekString, styles.centerText]}>Do</Text>
        </View>
        <View style={styles.column}>
          <Text style={[theme.dayOfWeekString, styles.centerText]}>Fr</Text>
        </View>
        <View style={styles.column}>
          <Text style={[theme.dayOfWeekString, styles.centerText]}>Sa</Text>
        </View>
        <View style={styles.column}>
          <Text style={[theme.dayOfWeekString, styles.centerText]}>So</Text>
        </View>
      </View>
    </>
  );
};

export default Header;
