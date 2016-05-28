import chai from 'chai';
import jsdom from 'jsdom';
import chaiImmutable from 'chai-immutable';

chai.use(chaiImmutable);

//Create a 'virtual DOM' for unit testing >> recuired for renderIntoDocument method
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
    if (!(key in global)) {
        global[key] = window[key];
    }
});


// Prevent mocha from interpreting CSS @import files
require.extensions['.css'] = noop;

function noop() {
  return null;
}
