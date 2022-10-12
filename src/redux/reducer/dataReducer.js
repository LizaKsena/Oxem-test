// eslint-disable-next-line default-param-last
const dataReducer = (state = {
  car_coast: 3300000,
  initail_payment_percent: 13,
  lease_term: 60,
  initail_payment: 429000,
  monthly_payment_from: 115095,
  total_sum: 7334700,
}, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD_PRICE':
      return {
        ...state,
        car_coast: Number(payload)
      };
    case 'ADD_PROCENT':
      return {
        ...state,
        initail_payment_percent: Number(payload),
      };
    case 'ADD_MONTH':
      return {
        ...state,
        lease_term: Number(payload)
      };
    case 'ADD_INITIAL':
      return {
        ...state,
        initail_payment: Number(payload)
      };
    case 'ADD_MONTHPAY':
      return {
        ...state,
        monthly_payment_from: Number(payload)
      };
    case 'ADD_SUM':
      return {
        ...state,
        total_sum: Number(payload)
      };
    default:
      return state;
  }
};

export default dataReducer;
