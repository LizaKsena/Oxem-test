/* eslint-disable no-restricted-globals */
/* eslint-disable no-constant-condition */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addInitialThunk, addPriceThunk, addProcentThunk } from '../../redux/action/dataAction';
import { addMonthThunk } from '../../redux/action/dataAction';
import './Input.scss';

function Input(
  {
    min,
    max,
    step,
    initialValue,
    disabled,
    text,
    sign,
  }
) {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.data);

  const [value, setValue] = useState(initialValue);
  const [initialPrice, setInitiatPrice] = useState(initialValue);

  const getBackgroundColor = () => ({ backgroundSize: `${((value / max) * 100) - 4}%` });
  useEffect(() => {
    setValue(value);
    setInitiatPrice(Math.round(data.car_coast * (data.initail_payment_percent / 100)));

    if (text === 'Стоимость автомобиля') {
      dispatch(addPriceThunk(value));
    } if (text === 'Срок лизинга') {
      dispatch(addMonthThunk(value));
    } if (text === 'Первоначальный взнос') {
      dispatch(addProcentThunk(value));
      dispatch(addInitialThunk(initialPrice));
    }
  }, [value, data.car_coast, data.initail_payment_percent]);

  function beautifyPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }
  return (
    // <div>
    <li className="form__input-item">
      <label className="form__label">{text}</label>

      {text === 'Первоначальный взнос'
        ? (
          <div
            className={`form__input form__input_initial ${
              disabled ? 'form__input_disabled' : ''
            }`}
          >
            <div className="form__text-wrpr">
              <p className="form__text">
                {beautifyPrice(initialPrice)}
                {' '}
                &#8381;
              </p>
              <div className="form__text form__text_initial">
                <input
                  disabled={disabled}
                  className="form__text_initial-input"
                  type="text"
                  value={beautifyPrice(value)}
                  onChange={(e) => {
                    const inputValue = Number(e.target.value);
                    if (isNaN(inputValue)) {
                      setValue(inputValue);
                    } else {
                      setValue(inputValue);
                    }
                  }}
                  onBlur={() => {
                    if (value < min) {
                      setValue(min);
                    } else if (value > max) {
                      setValue(max);
                    } else {
                      setValue(value);
                    }
                  }}
                />
                <p>%</p>
              </div>
            </div>
            <input
              className="form__range"
              type="range"
              min={min}
              max={max}
              step={step}
              value={value}
              disabled={disabled}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </div>
        )
        : (
          <div
            className={`form__input ${disabled ? 'form__input_disabled' : ''}`}
          >
            <div className="form__text-wrpr">
              <input
                disabled={disabled}
                className="form__text"
                type="text"
                value={beautifyPrice(value)}
                onChange={(e) => {
                  const inputValue = Number(e.target.value.split(' ').join(''));
                  if (isNaN(inputValue)) {
                    setValue(inputValue);
                  } else {
                    setValue(inputValue);
                  }
                }}
                onBlur={() => {
                  if (value < min) {
                    setValue(min);
                  } else if (value > max) {
                    setValue(max);
                  } else {
                    setValue(value);
                  }
                }}
              />
              <p className="form__text">{sign}</p>
            </div>

            <input
              className="form__range"
              type="range"
              min={min}
              max={max}
              step={step}
              value={value}
              disabled={disabled}
              style={getBackgroundColor()}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
          </div>
        ) }
    </li>

  );
}

export default Input;
