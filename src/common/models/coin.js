

// Coin default structure
class Coin {
  code = ''
  color1 = ''
  color2 = ''
  confirmCount = 0
  enable = false
  id = null
  inOutEnable = false
  minOut = 0.001
  name = "비트코인"
  outFee = 0.001
  sort = 2
  trackUrl = "https://btc.com/@transaction-id"

  constructor(data = {}) {
    for (let key in data) {
      const value = data[key];
      switch (key.toLowerCase()) {
        case 'enable': 
        case 'inOutEnable':
          data[key] = (value === 'Y' || value === true);
          break;
        default:
          this[key] = value;
      }
    }
  }

}

export { Coin }