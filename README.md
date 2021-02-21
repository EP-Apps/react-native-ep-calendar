# react-native-calendar

## 1. Installation

Run

`npm install react-native-calendar`

in your project. For iOS you need to install the pods:

`cd ios && pod install && cd ..`

## 2. Usage

The Calendar component takes some parameters, but they are all optional.

| Property              | Description                                                                               | Default                   |
| ----------------------|-------------------------------------------------------------------------------------------| --------------------------|
| darkTheme             | A style object defining the dark theme. See 3. Themes.                                    | null (predefined style).  |
| lightTheme            | A style object defining the light theme. See 3. Themes.                                   | null (predefined style).  |
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
