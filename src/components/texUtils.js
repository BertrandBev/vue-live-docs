import _ from 'lodash'

function format(val) {
  return `${val}`.length < 5 ? `${val}` : val.toFixed(3);
}

function getTex(val) {
  if (_.isPlainObject(val)) {
    const list = [];
    _.forEach(val, (sub, key) => {
      list.push(`\\text{${key}:} ${getTex(sub)}`);
    });
    return list.join(", ");
  }
  if (Array.isArray(val)) {
    return val.map(getTex).join(", ");
  } else if (typeof val === "number") {
    return `${format(val)}`;
  } else if (typeof val === "string") {
    return `${val}`;
  } else if (val) {
    const constructor = val.constructor;
    return `${constructor ? constructor.name : typeof val}`;
  } else {
    return `${val}`;
  }
}

export { getTex }