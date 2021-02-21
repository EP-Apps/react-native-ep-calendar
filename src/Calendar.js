/***
 * @copyright EP-Apps 2021
 * @licence MIT
 * @license License text available at https://opensource.org/licenses/MIT
 *
 * This file is part of npm package react-native-calendar
 */

import React, {useState, useEffect, useContext} from 'react';
import {useColorScheme} from 'react-native';
import Header from './components/Header';
import Content from './components/Content';
import LightTheme from './themes/LightTheme';
import DarkTheme from './themes/DarkTheme';
import CalendarHandler from './CalendarHandler';
import styles from './style/styles';

let calendarDate = React.createContext(null);

const Calender = ({
  startDate = new Date(),
  markerTypes = [],
  markedDates = [{date: new Date(), markerType: 'default'}],
  minDate = null,
  maxDate = null,
  onDayPress = null,
  onDayLongPress = null,
  onMonthChangeListener = null,
  lightTheme = null,
  darkTheme = null,
  localization = null,
  useDarkMode = true,
}) => {
  let defaultMarkerTypes = getDefaultMarkerTypes();
  const [marker, setMarker] = useState(markedDates);

  for (let i = 0; i < defaultMarkerTypes.length; i++) {
    markerTypes.push(defaultMarkerTypes[i]);
  }

  if (useContext(calendarDate) === null) {
    calendarDate = React.createContext(
      new Date(startDate ? startDate : Date.now()),
    );
  }

  const tempCalendarDate = useContext(calendarDate);

  if (darkTheme !== null) {
    Object.assign(DarkTheme, darkTheme);
  }
  if (lightTheme !== null) {
    Object.assign(LightTheme, lightTheme);
  }
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? DarkTheme : LightTheme;
  let monthString =
    tempCalendarDate.toLocaleString('default', {month: 'long'}) +
    ' ' +
    tempCalendarDate.getFullYear().toString();

  let [days, setDays] = useState([]);

  const handler = new CalendarHandler(
    markedDates ? markedDates : [],
    markerTypes ? markerTypes : [],
    startDate,
    minDate,
    maxDate,
    onMonthChangeListener,
    undefined,
  );

  useEffect(() => {
    handler.setCalendarDate(tempCalendarDate);
    setDays(handler.monthGetDates());
    setMarker(markedDates);
  }, [setDays, tempCalendarDate, markedDates, setMarker]);

  const pressedArrow = (next) => {
    if (next) {
      handler.setCalendarDate(new Date(tempCalendarDate));
      calendarDate = React.createContext(handler.monthNext());
      setDays([]);
    } else {
      handler.setCalendarDate(new Date(tempCalendarDate));
      calendarDate = React.createContext(handler.monthPrevious());
      setDays([]);
    }
  };

  return (
    <>
      <Header month={monthString} theme={theme} pressedArrow={pressedArrow} />
      <Content days={days} theme={theme} />
    </>
  );
};

const getDefaultMarkerTypes = () => {
  let activeStart = new MarkerType();
  activeStart.markerType = 'default';
  activeStart.markerColumnStyle = styles.activeColumn;
  activeStart.markerTouchableStyle = styles.activeBg;
  activeStart.markerTextStyle = styles.activeText;

  let activMiddle = new MarkerType();
  activMiddle.markerType = 'activMiddle';
  activMiddle.markerColumnStyle = styles.activeMiddleColumn;
  activMiddle.markerTouchableStyle = styles.activeMiddleBg;
  activMiddle.markerTextStyle = styles.activeText;

  return [activeStart, activMiddle];
};

export class MarkerType {
  markerType = '';
  markerColumnStyle = {};
  markerTouchableStyle = {};
  markerTextStyle = {};
}

export default Calender;
