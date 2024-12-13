const { calculateNumber } = require('./utils');
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  console.log(`The total is ${calculateNumber('SUM', totalAmount, totalShipping)}`);
}

module.exports = sendPaymentRequestToApi
