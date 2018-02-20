const fs = require('fs');

module.exports.init = function(tmpl) {
  return fs.readFileSync(tmpl).toString();
};

module.exports.compile = function(tmpl, data) {
  return Object.keys(data).reduce((acc, k) => {
    return acc.replace(new RegExp(`{{\\s+${k}\\s+}}`), m => {
      // return m.replace(/[{{\s}}]/g, '');
      return data[k];
    });
  }, tmpl);
};
