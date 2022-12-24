const alert = require('./index.js');

alert();

alert({type: `success`, msg: `Everything finished!`, name: `Done`});
alert({type: `warning`, msg: `You didn't addd something!`});
alert({type: `info`, msg: `Steven is awesome!`});
alert({type: `error`, msg: `Something went wrong!`});


