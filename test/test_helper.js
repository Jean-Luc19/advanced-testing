import jsdom from 'jsdom';

// Set up testing environment to run like a browser in the CLI
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>'); //equivalent to window.document
global.window = global.document.defaultView;

// Build renderComponent element that should render a given react Class


//Build helper for simulating events


// Set up chai-jquery
