(function (d) {
  'use strict';

  var ui,
    styleObjects = [],
    stylesheetUL;

  function initialize() {
    createUI();
  }

  // Helper Funtctions

  function createUI() {
    var div = d.createElement('div');
    div.className = 'my-ui';
    div.style.minWidth = '150px';
    div.style.padding = '4px';
    div.style.position = 'fixed';
    div.style.bottom = '10px';
    div.style.right = '10px';
    div.style.background = 'red';
    div.style.color = 'white';

    // Text
    div.innerHTML = '<h2>Stylesheets:</2><ul class=\'stylesheet-list\'></ul><button id=\'add-stylesheet\' type=\'button\'>Add stylesheet</button>';

    d.querySelector('body').appendChild(div);
    requestStylesheetUrl();
    getCurrentStylesheets();
  }

  function requestStylesheetUrl() {
    var addStylesheetButton = d.querySelector('#add-stylesheet');
    addStylesheetButton.onclick = function (e) {
      var linkToNewStylesheet = window.prompt('Add link to stylesheet');
      addStylesheet(linkToNewStylesheet);
    }
  }

  function addStylesheet(url) {
    var stylesheetTag = 'link';
    stylesheetTag = d.createElement(stylesheetTag);
    stylesheetTag.rel = 'stylesheet';
    stylesheetTag.href = url;
    var newStylesheet = {
      fileName: url,
      visible: true,
      file: stylesheetTag
    };
    styleObjects.push(newStylesheet);
    printCurrentStylesheets();
    addStyling();
  }

  function getCurrentStylesheets() {
    var s = d.querySelectorAll('link[rel=stylesheet]');
    [].slice.call(s).forEach(function (stylesheet) {
      styleObjects.push({ fileName: stylesheet.attributes.href.value, file: stylesheet, visible: true });
    });

    printCurrentStylesheets();
  }

  function printCurrentStylesheets() {
    stylesheetUL = d.querySelector('.my-ui ul.stylesheet-list');
    stylesheetUL.innerHTML = '';
    styleObjects.forEach(function (style, index) {
      var li = d.createElement('li');
      li.innerHTML = style.fileName;
      li.attributes.fileName = style.fileName;
      li.attributes.file = style.file;
      li.attributes.index = index;
      li.onclick = function (e) {
        style.visible = !style.visible;
        style.visible ? addStyling() : removeStyling(style)
      };
      stylesheetUL.appendChild(li)
    });

    resetMyUICss();
  }

  function removeStyling(style) {
    d.head.removeChild(style.file);
  }

  function addStyling() {
    styleObjects.forEach(function (s) {
      if (s.visible) {
        d.head.appendChild(s.file);
      }
    });
  }

  function resetMyUICss() {
    ui = d.querySelector('.my-ui');
    [].slice.call(ui.getElementsByTagName('*'))
      .forEach(function (element) {
        element.style.margin = '0px';
        element.style.padding = '0px';
        element.style.color = 'white';
        element.style.fontSize = '14px';
        element.style.textTransform = 'none';
        element.style.fontStyle = 'normal';
        element.style.border = '0';
        element.style.listStyleType = 'none';
        element.style.display = 'block';

        if (element.tagName === 'LI') {
          element.style.cursor = 'pointer';
        }
      });

  }


  // initialize

  initialize();

})(window.document);
