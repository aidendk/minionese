import units from '../data/units.json';

const json = units;
export const getCurrentUnit = () => {
  for (let i = 0; i < json.length; i++) {
    const unit = json[i];
    if (unit.unitCompleted) {
      continue;
    } else if (!unit.unitCompleted) {
      return unit;
    } else {
      console.warn('There was an error.');
    }
  }
};

export const getUnitById = (id: string | undefined) => {
  for (let i = 0; i < json.length; i++) {
    const unit = json[i];
    const item = id;
    if (item?.toString() !== unit.unit.toString()) {
      continue;
    } else if (item.toString() === unit.unit.toString()) {
      return unit;
    } else {
      console.warn('There was an error');
    }
  }
};
