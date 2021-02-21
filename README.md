# react-native-ep-calendar

## 1. Installation

react-native-ep-calendar requires react-native >= 0.63.4. It also uses react-native-svg to display icons.
To install simply run

`npm install react-native-ep-calendar`

in your project. For iOS you need to install the pods:

`cd ios && pod install && cd ..`

## 2. Usage

The Calendar component takes some parameters, but they are all optional.

| Property              | Description                                                                               | Default                   |
| ----------------------|-------------------------------------------------------------------------------------------| --------------------------|
| darkTheme             | A style object defining the dark theme. See 4. Themes.                                    | null (predefined style).  |
| lightTheme            | A style object defining the light theme. See 4. Themes.                                   | null (predefined style).  |
| localization          | Currently unused                                                                          | null                      |
| markedDates           | Array of Objects containing a date property and a markerType as string                    | today with default marker |
| markerTypes           | Array of Objects containing a string property markerType as identifier and a style object | empty array               |
| maxDate               | Max date the user can see.                                                                | null                      |
| minDate               | Min date the user can see                                                                 | null                      |
| onDayLongPress        | Callback for a long press on  a day                                                       | null                      |
| onDayPress            | Callback for a normal press on a day                                                      | null                      |
| onMonthChangeListener | Callback when changing the displayed month & year                                         | null                      |
| startDate             | Starting date of the calendar component                                                   | today                     |
| useDarkMode           | Darkmode for calendar allowed?                                                            | true                      |

### 2.1 markedDates

Needs an array of objects containing a date and a markerType, for example:

```javascript
let markedDates = [
  {
    date: new Date(Date.now()),
    markerType: 'myMarker'
  },
];
```

### 2.2 markerTypes

Needs an array of objects containg a markerType and some style objects:

```javascript
let markerTypes = [
  {
    markerType: 'myMarker',
    markerTextStyle: {color: 'red'}.
    markerTouchableStyle = {backgroundColor: 'transparent'},
    markerColumnStyle = null
  },
];
```

### 2.3 onMonthChangeListener

This callback gets fired, when the users changes the displayed month. The callback receives four parameters:
1. previousMonth
2. previousYear
3. month
4. year

In our example that callback is used to load the data for the new month.

## 3. Example

An example with some properties set:

```
                <Calendar
                  markerTypes={[missMarker]}
                  markedDates={[...checkedMarker, ...missedMarkers]}
                  darkTheme={{
                    markerColor: habit.Color,
                    markerTextColor: getTextColorForBgHex(habit.Color),
                  }}
                  lightTheme={{
                    markerColor: habit.Color,
                    markerTextColor: getTextColorForBgHex(habit.Color),
                  }}
                  onMonthChangeListener={(
                    previousMonth,
                    previousYear,
                    month,
                    year,
                  ) => {
                    getTimelineData(
                      habit,
                      month,
                      year,
                      setCheckedMarker,
                      setMissedMarker,
                    );
                  }}
                />          
```

![alt text][logo]

[logo]: https://github.com/EP-Apps/Calendar/blob/main/examples/images/example1.png "Example 1"

## 4. Themes

## 5. License

This component is licensed under MIT
