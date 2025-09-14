import moment from "moment";
import numeral from "numeral";

export function toFixed(value, digit = 0) {
    if (!digit) return numeral(value).format('0,0');
    if (digit === 1) return numeral(value).format('0,0.0');
    return numeral(value).format('0,0.00');
}

export function getYearOld(value) {
    if (!value) return '';
    return moment().diff(moment(value), "years");
}

export function getDate(value) {
  if (!value) return '';
  return moment(value).format('DD/MM/YYYY');
}

export function getGender(value) {
  if (value === 'MALE') return 'ชาย';
  if (value === 'FEMALE') return 'หญิง';
  return value;
}

export function getRequestAccess() {
  return {
    access: isMobile() ? "mobile" : "web",
    appversion: process.env.REACT_APP_VISION,
    os: (navigator.appVersion || "").split(" ")?.[0] || "-",
    device: detectOS(),
    deviceid: uuidv4(),
    lat: "",
    long: "",
  };
}

export function fDate(date) {
    return date ? moment(date).format('DD/MM/yyyy') : "";
}

export function setDate(date) {
  if (!date) return "";
  return date.split(' ')?.[0] || '';
}


function isMobile() {
  const regex =
    /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
  return regex.test(navigator.userAgent);
}

function detectOS() {
  let userAgent = navigator.userAgent,
    platform = navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "Mac OS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "IOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (!os && /Linux/.test(platform)) {
    os = "Linux";
  }
  return os;
}

function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const MONTH_LIST = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function toDateStr(dateFrom, dateTo) {
  if (!dateFrom) return "";

  const _dateFrom = moment(dateFrom);

  const yearFrom = _dateFrom.year();
  const monthFrom = _dateFrom.month();
  const dayFrom = _dateFrom.date();

  if (!dateTo) {
    return `${dayFrom} ${MONTH_LIST[monthFrom]} ${yearFrom}`;
  }

  const _dateTo = moment(dateTo);
  const yearTo = _dateTo.year();
  const monthTo = _dateTo.month();
  const dayTo = _dateTo.date();

  if (yearFrom !== yearTo) {
    return `${dayFrom} ${MONTH_LIST[monthFrom]} ${yearFrom} - ${dayTo} ${MONTH_LIST[monthTo]} ${yearTo}`;
  } else if (yearFrom === yearTo && monthFrom !== monthTo) {
    return `${dayFrom} ${MONTH_LIST[monthFrom]} - ${dayTo} ${MONTH_LIST[monthTo]} ${yearFrom}`;
  }
  return `${dayFrom} - ${dayTo} ${MONTH_LIST[monthFrom]} ${yearFrom}`;
}


export function getFilterDate(criteria) {
  const formatDate = 'YYYY-MM-DD';
  let startDate = criteria.startDate;
  let endDate = criteria.endDate;

  if (startDate) {
      startDate = moment(startDate).format(formatDate);
  }
  if (endDate) {
      endDate = moment(endDate).format(formatDate);
  }

  if (!startDate && !endDate) {
      if (criteria.customType === 'month') {
          startDate = moment().add('days', -30).format(formatDate);
          endDate = moment().format(formatDate);
      }
      else if (criteria.customType === 'week') {
          startDate = moment().add('days', -7).format(formatDate);
          endDate = moment().format(formatDate);
      }
      else if (criteria.customType === 'today') {
          startDate = moment().add('days', -1).format(formatDate);
          endDate = moment().add('days', -1).format(formatDate);
      }
  }
  return {
    startDate,
    endDate
  }
}

export function getFilterMinMax(values) {
  const list = [];

  (values || []).forEach((m) => {
    const splits = m.split('-');

    const min = parseInt((splits?.[0] || '').replace(/,/g, ""), 10);
    const max = parseInt((splits?.[1] || '').replace(/,/g, ""), 10);

    list.push({
      min,
      max
    })
  })
  return list;
}