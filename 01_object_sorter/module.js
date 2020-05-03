/* MODULE */
function ObjSorter(array) {
  this.array = array;
  this.props = new Array();
  this.compare = (props, i = 0) => (a, b) => {
    const isAscending = props[i].isAscending;
    const aVal = a[props[i].prop];
    const bVal = b[props[i].prop];

    if (aVal < bVal) return isAscending ? -1 : 1;
    if (aVal > bVal) return isAscending ? 1 : -1;
    if (aVal === bVal) {
      return props[i + 1] ? this.compare(props, i + 1)(a, b) : 0;
    }
  };
}

// set Prop to sort by in DESCENDING order
ObjSorter.prototype.setPropDown = function (prop) {
  this.props.push({ prop: prop, isAscending: false });
  return this;
};

// set Prop to sort by in ASCENDING order
ObjSorter.prototype.setPropUp = function (prop) {
  this.props.push({ prop: prop, isAscending: true });
  return this;
};

// final sort function
ObjSorter.prototype.sort = function () {
  return this.array.sort(this.compare(this.props));
};

const moduleExport = {
  objSorter : (array) => new ObjSorter(array),
};

module.exports = moduleExport;