import refs from './refs.js';

const { increment, discrement, number, total, select } = refs;

const COST_SELECT_700 = 780;
const COST_SELECT_500 = 560;
const COST_SELECT_300 = 340;
const COST_SELECT_150 = 170;
const COST_SELECT_100 = 120;

let count = 1;
let sum = 0;
let selectValue = Number(select.value);

total.value = COST_SELECT_700 + 'грн';

select.addEventListener('change', () => {
  selectValue = Number(select.value);
  sumTotal(selectValue);
  count = 1;
  number.value = count;
});

const sumTotal = num => {
  switch (num) {
    case 700:
      sum = COST_SELECT_700 * count;
      total.value = COST_SELECT_700 + 'грн';
      break;
    case 500:
      sum = COST_SELECT_500 * count;
      total.value = COST_SELECT_500 + 'грн';
      break;
    case 300:
      sum = COST_SELECT_300 * count;
      total.value = COST_SELECT_300 + 'грн';
      break;
    case 150:
      sum = COST_SELECT_150 * count;
      total.value = COST_SELECT_150 + 'грн';
      break;
    case 100:
      sum = COST_SELECT_100 * count;
      total.value = COST_SELECT_100 + 'грн';
      break;
    default:
      sum = 0;
      break;
  }
};

increment.addEventListener('click', () => {
  count += 1;
  number.value = count;
  sumTotal(selectValue);
  total.value = sum + 'грн';
});

discrement.addEventListener('click', () => {
  if (count <= 1) {
    return;
  }
  count -= 1;
  number.value = count;
  sumTotal(selectValue);
  total.value = sum + 'грн';
});
