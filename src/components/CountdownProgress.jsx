import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import ReactFontLoader from 'react-font-loader';
import { hookMemo } from '../hook';
import Colors from '../constants/Colors';
import '../theme/countdown-progress.css';

class CountdownProgress extends Component {
  constructor(props) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      date ? this.setState(date) : this.stop();
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear countdown when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros(value) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  mapNumber(number, in_min, in_max, out_min, out_max) {
    return ((number - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }

  render() {
    const { days, hours, min, sec } = this.state || {};
    const daysRadius = this.mapNumber(days, 30, 0, 0, 360);
    const hoursRadius = this.mapNumber(hours, 24, 0, 0, 360);
    const minutesRadius = this.mapNumber(min, 60, 0, 0, 360);
    const secondsRadius = this.mapNumber(sec, 60, 0, 0, 360);

    return (
      <div>
        <div>
          <ReactFontLoader url="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" />
        </div>
        <div className="countdown-wrapper">
          <div className="countdown-item">
            {/* <SVGCircle radius={daysRadius} /> */}
            {this.addLeadingZeros(days)}
            <span>{days <= 1 ? 'day' : 'days'}</span>
          </div>
          <div className="countdown-item">
            {/* <SVGCircle radius={hoursRadius} /> */}
            {this.addLeadingZeros(hours)}
            <span>{hours <= 1 ? 'hour' : 'hours'}</span>
          </div>
          <div className="countdown-item">
            {/* <SVGCircle radius={minutesRadius} /> */}
            {this.addLeadingZeros(min)}
            <span>min</span>
          </div>
          <div className="countdown-item">
            {/* <SVGCircle radius={secondsRadius} /> */}
            {this.addLeadingZeros(sec)}
            <span>sec</span>
          </div>
        </div>
      </div>
    );
  }
}

const SVGCircle = hookMemo(({ radius }) => {
  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const describeArc = (x, y, radius, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, radius, endAngle);
    const end = polarToCartesian(x, y, radius, startAngle);

    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';

    return ['M', start.x, start.y, 'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y].join(' ');
  };

  return (
    <svg className="countdown-svg">
      <path fill="none" stroke="#018667" stroke-width="4" d={describeArc(50, 50, 48, 0, radius)} />
    </svg>
  );
});

export default CountdownProgress;
