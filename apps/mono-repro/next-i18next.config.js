const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de', 'nl', 'fr'],
    ns: 'mrb-framework',
    defaultNS: 'mrb-framework',
  },
  localePath: path.resolve(`apps/mrb-orderpicker/public/locales`),
};
