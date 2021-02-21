/***
 * @copyright EP-Apps 2021
 * @licence MIT
 * @license License text available at https://opensource.org/licenses/MIT
 *
 * This file is part of npm package react-native-calendar
 */

export default class CalendarHandler {
  markedDates = [];
  markedDatesConfig = [];
  startDate = null;
  minDate = null;
  maxDate = null;
  onMonthChangedListener = null;
  onDateClickedListener = null;

  /***
   * @param markedDates
   * @param markedDatesConfig
   * @param startDate
   * @param minDate
   * @param maxDate
   * @param onMonthChangedListener
   * @param onDateClickedListener
   */
  constructor(
    markedDates,
    markedDatesConfig,
    startDate,
    minDate,
    maxDate,
    onMonthChangedListener,
    onDateClickedListener,
  ) {
    if (markedDates !== null) {
      this.markedDates = markedDates;
    } else {
      this.markedDates = [];
    }

    if (markedDatesConfig !== null) {
      this.markedDatesConfig = markedDatesConfig;
    } else {
      this.markedDatesConfig = [];
    }

    // console.log(this.markedDatesConfig);

    if (startDate !== null) {
      this.startDate = new Date(startDate);
    } else {
      this.startDate = new Date(Date.now());
    }

    if (minDate !== null) {
      this.minDate = minDate;
    }

    if (maxDate !== null) {
      this.maxDate = maxDate;
    }

    if (onMonthChangedListener !== null) {
      this.onMonthChangedListener = onMonthChangedListener;
    }

    if (onDateClickedListener !== null) {
      this.onDateClickedListener = onDateClickedListener;
    }

    this._internalDate = new Date(this.startDate);
  }

  /***
   * Switching the month in calendar
   * Internal use
   * @param next
   * @returns {*}
   * @private
   */
  _switchMonth(next = false) {
    let previousMonth = new Date(this._internalDate).getMonth();
    let previousYear = new Date(this._internalDate).getFullYear();

    let currentMonth = this._internalDate.getMonth();

    let nextMonth = 0;

    if (next) {
      nextMonth = currentMonth + 1;
    } else {
      nextMonth = currentMonth - 1;
    }

    this._internalDate.setMonth(nextMonth);

    if (
      this.onMonthChangedListener !== undefined &&
      this.onMonthChangedListener !== null
    ) {
      this.onMonthChangedListener(
        previousMonth,
        previousYear,
        new Date(this._internalDate).getMonth(),
        new Date(this._internalDate).getFullYear(),
      );
    }

    return this._internalDate;
  }

  setCalendarDate(date) {
    this._internalDate = date;
  }

  /***
   * Switch to the next month in calendar
   */
  monthNext() {
    return this._switchMonth(true);
  }

  /***
   * Switch to previous month in calendar
   */
  monthPrevious() {
    return this._switchMonth(false);
  }

  /***
   * Returns a list of Objects in the following format:
   * {
   *     date:            ==date==        The date,
   *     markerDateData:  ==Object==      Contains the data from markedDates-Array for the specific date,
   *     markerType:      ==Object==      Contains the config for the marked date
   *     activated:       ==boolean==     Date is activated or not
   * }
   * @returns []
   */
  monthGetDates() {
    let month = new Date(this._internalDate).getMonth();
    let year = new Date(this._internalDate).getFullYear();

    let date = new Date(year, month, 1);
    let days = [];

    let firstDayOfMonth = date.getDay();

    if (firstDayOfMonth === 0) {
      firstDayOfMonth = 7;
    }

    if (firstDayOfMonth !== 1) {
      for (let i = firstDayOfMonth - 1; i > 0; i--) {
        let deactivatedDate = new Date(date).setDate(date.getDate() + -i);

        let data = this._getMarkedDataForDate(deactivatedDate);

        days.push({
          date: new Date(deactivatedDate),
          markedDateData: data.data,
          markerType: data.config,
          activated: false,
        });
      }
    }

    while (date.getMonth() === month) {
      let data = this._getMarkedDataForDate(date);

      let activated = true;

      if (this.minDate !== undefined) {
        if (date < new Date(this.minDate)) {
          activated = false;
        }
      }

      if (this.maxDate !== undefined) {
        if (date > new Date(this.maxDate)) {
          activated = false;
        }
      }

      days.push({
        date: new Date(date),
        markedDateData: data.data,
        markerType: data.config,
        activated: activated,
      });
      date.setDate(date.getDate() + 1);
    }

    let lastDayOfMonth = days[days.length - 1].date.getDay();

    if (lastDayOfMonth === 0) {
      lastDayOfMonth = 7;
    }

    if (lastDayOfMonth !== 7) {
      let futureDate = new Date(days[days.length - 1].date);

      for (let i = 0; i < 7 - lastDayOfMonth; i++) {
        futureDate.setDate(futureDate.getDate() + 1);

        let data = this._getMarkedDataForDate(futureDate);

        days.push({
          date: new Date(futureDate),
          markedDateData: data.data,
          markerType: data.config,
          activated: false,
        });
      }
    }

    return days;
  }

  /***
   * For internal use
   * @param date
   * @returns {{data, config}}
   * @private
   */
  _getMarkedDataForDate(date) {
    date = new Date(date);
    let marked;

    if (this.markedDates !== undefined) {
      marked = this.markedDates.find(
        (element) =>
          new Date(element.date).toDateString() === date.toDateString(),
      );
    }

    let markedDateConfig;

    if (marked !== undefined) {
      let markerType = 'default';

      if (marked.markerType !== undefined && marked.markerType !== null) {
        markerType = marked.markerType;
      }

      for (let i = 0; i < this.markedDatesConfig.length; i++) {
        if (this.markedDatesConfig[i].markerType === markerType) {
          markedDateConfig = this.markedDatesConfig[i];

          i = this.markedDatesConfig;
        }
      }
    }

    return {
      data: marked,
      config: markedDateConfig,
    };
  }
}
