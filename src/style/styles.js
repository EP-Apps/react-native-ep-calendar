/***
 * @copyright EP-Apps 2021
 * @licence MIT
 * @license License text available at https://opensource.org/licenses/MIT
 *
 * This file is part of npm package react-native-calendar
 */

import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
  },
  datesRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    marginVertical: 5,
  },
  dayNameRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    marginBottom: 5,
  },
  column: {
    flex: 1,
    flexGrow: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  dateColumn: {
    flex: 5,
    flexGrow: 5,
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  dateText: {
    fontSize: 18,
    textAlign: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  centerIcon: {
    alignSelf: 'center',
  },
  activeText: {
    textAlign: 'center',
  },
  activeColumn: {
    flex: 1,
    flexGrow: 1,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  activeStartColumn: {
    flex: 1,
    flexGrow: 1,
    paddingLeft: 5,
    paddingVertical: 2,
  },
  activeEndColumn: {
    flex: 1,
    flexGrow: 1,
    paddingRight: 5,
    paddingVertical: 2,
  },
  activeMiddleColumn: {
    flex: 1,
    flexGrow: 1,
    paddingVertical: 2,
    paddingHorizontal: 10,
    position: 'relative',
  },
  activeBg: {
    paddingVertical: 8,
    borderRadius: 20,
  },
  activeStartBg: {
    paddingVertical: 8,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  activeMiddleBg: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    paddingVertical: 10,
  },
  activeEndBg: {
    paddingVertical: 8,
    borderBottomRightRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default styles;
