import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMonthPayThunk } from '../../redux/action/dataAction';
import { addSumThunk } from '../../redux/action/dataAction';
import './Calculation.scss';

function Calculation({ title }) {
  const dispatch = useDispatch();
  const rate = 0.035;
  const data = useSelector((store) => store.data);

  const [monthPay, setMonthPay] = useState();
  const [sum, setSum] = useState();
  useEffect(() => {
    setMonthPay(Math.ceil(((data.car_coast - data.initail_payment)
      * ((rate * (1 + rate) ** data.lease_term)
      / ((1 + rate) ** data.lease_term - 1)))));

    setSum(data.initail_payment + data.lease_term * data.monthly_payment_from);

    dispatch(addMonthPayThunk(monthPay));
    dispatch(addSumThunk(sum));
  }, [data.car_coast, data.lease_term, data.initail_payment_percent]);

  function beautifyPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  return (

    <li>

      <p className="form__label">{title}</p>

      {title === 'Сумма договора лизинга'
        ? (
          <p className="form__total">
            {' '}
            {beautifyPrice(Math.round(sum))}
            <span> &#8381;</span>
          </p>
        )
        : (
          <p className="form__total">
            {beautifyPrice(Math.round(monthPay))}
            <span> &#8381;</span>
          </p>
        )}
    </li>

  );
}

export default Calculation;
