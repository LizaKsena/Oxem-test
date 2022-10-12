/* eslint-disable no-restricted-globals */
import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../Button/Button';
import Calculation from '../Calculation/Calculation';
import Input from '../Input/Input';
import { sendData } from '../../api/api';

function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const data = useSelector((store) => store.data);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        setIsLoading(true);
        sendData({
          data,
        })
          .then((res) => {
            console.log(res);
            setIsLoading(false);
          })
          .catch((err) => {
            console.log(`Ошибка! ${err}`);
            setIsLoading(false);
          });
      }}
    >
      <ul className="form__inputs">
        <Input
          min={1000000}
          max={6000000}
          step={100000}
          text="Стоимость автомобиля"
          sign="&#8381;"
          initialValue={3300000}
          disabled={isLoading}
        />
        <Input
          min={10}
          max={60}
          step={1}
          text="Первоначальный взнос"
          initialValue={13}
          sign="%"
          disabled={isLoading}
        />
        <Input
          min={1}
          max={60}
          step={1}
          text="Срок лизинга"
          sign="мес."
          initialValue={60}
          disabled={isLoading}
        />
      </ul>
      <div className="form__totals-wrpr">
        <ul className="form__totals">
          <Calculation
            title="Сумма договора лизинга"
          />
          <Calculation
            title="Ежемесячный платеж от"
          />
        </ul>
        <Button
          disabled={isLoading}
        />
      </div>
    </form>
  );
}

export default Form;
