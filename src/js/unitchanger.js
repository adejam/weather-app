/* eslint no-unused-expressions: ["error", { "allowTernary": true }] */
import changeUnits from './changeunits';

const unitChanger = ({ target: { id, classList } }) => {
  if (classList.contains('changer')) {
    const toImperial = ['.celcius', '.farenheit', '.toMetric', '.toImperial'];
    const toMetric = ['.farenheit', '.celcius', '.toImperial', '.toMetric'];
    id === 'toImperial' ? changeUnits(...toImperial) : changeUnits(...toMetric);
  }
};

export default unitChanger;
