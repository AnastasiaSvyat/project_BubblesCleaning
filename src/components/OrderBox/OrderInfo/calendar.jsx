import React, { useState ,useRef,useEffect} from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import classes from '../../../Styles/order.module.css'

export const useOnOutsideClick = handleOutsideClick => {
  
  const innerBorderRef = useRef();
  const onClick = event => {
    if (
      innerBorderRef.current &&
      !innerBorderRef.current.contains(event.target)
    ) {
      handleOutsideClick();
    }
  };
useMountEffect(() => {
  document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
    };
  });
  return { innerBorderRef };
};
const useMountEffect = fun => useEffect(fun);
const CalendarNav = () => {
  const [date, setDate ] = useState(new Date());
  let dateMonth = date.getDate()
  let month = date.getMonth()
  let year = date.getFullYear()
  function onChange(date) {
    setDate(date);
  }
  const [open, setOpen] = useState(false);
  const { innerBorderRef } = useOnOutsideClick(() => setOpen(false));
  return (
    <div>
      <div className ={classes.calendardate} >
        <p className={classes.h}>{dateMonth}/{month + 1}/{year}</p>
          <img src="https://www.flaticon.com/svg/static/icons/svg/3079/3079026.svg" onClick={() => setOpen(true)}  alt=""/>
      </div>
        <p>Date</p>
        {open && (<div ref={innerBorderRef}>
          <Calendar   
            minDate = {new Date()}
            onChange={onChange}
            value={date}
          /> 
        </div>
        )}
    </div>
  );
};

export default CalendarNav;
