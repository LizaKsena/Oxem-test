export const addPrice = (payload) => ({
  type: 'ADD_PRICE',
  payload,
});

export const addProcent = (payload) => ({
  type: 'ADD_PROCENT',
  payload,
});

export const addMonth = (payload) => ({
  type: 'ADD_MONTH',
  payload,
});

export const addInitial = (payload) => ({
  type: 'ADD_INITIAL',
  payload,
});

export const addMonthPay = (payload) => ({
  type: 'ADD_MONTHPAY',
  payload,
});

export const addSum = (payload) => ({
  type: 'ADD_SUM',
  payload,
});

export const addPriceThunk = (payload) => async (dispath) => {
  dispath(addPrice(payload));
};

export const addProcentThunk = (payload) => async (dispath) => {
  dispath(addProcent(payload));
};

export const addMonthThunk = (payload) => async (dispath) => {
  dispath(addMonth(payload));
};

export const addInitialThunk = (payload) => async (dispath) => {
  dispath(addInitial(payload));
};

export const addMonthPayThunk = (payload) => async (dispath) => {
  dispath(addMonthPay(payload));
};

export const addSumThunk = (payload) => async (dispath) => {
  dispath(addSum(payload));
};
