const logger = (req, res, next) => {
  req.timestamp = Date.now();
  console.log({ method: req.method, url: req.url, timestamp: req.timestamp });
};

module.exports = { logger };
