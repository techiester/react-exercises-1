import React, { useEffect, useState } from 'react';
import moment from "moment";

const Timer = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    let interval = setInterval(() => setTime(new Date()), 1000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div className="time">{moment(time).format('hh:mm:ss A')}</div>
  );
}

export default Timer;