const Utils = {
  calculateNumber: (type, a, b) => {
    if (type === "SUM") return Math.round(a) + Math.round(b);
    if (type === "SUBTRACT") return Math.round(a) - Math.round(b);
    if (type === "DIVIDE") {
      const roundA = Math.round(a);
      const roundB = Math.round(b);
      return roundB === 0 ? "Error" : roundA / roundB;
    }
  }
};


module.exports = Utils;
