const React = require('react');
const { hydrate, render } = require('react-dom-lite');
const AppElement = require('./app-element');

hydrate(AppElement, document.getElementById('react-root'));
// render(AppElement, document.getElementById('react-root'));
