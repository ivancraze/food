"use strict";

window.addEventListener('DOMContentLoaded', () => {
    const tabs = require('./modules/tabs'),
          modal = require('./modules/modal'),
          card = require('./modules/card'),
          forms = require('./modules/forms'),
          slider = require('./modules/slider'),
          timer = require('./modules/timer'),
          calc = require('./modules/calc');

          tabs();
          modal();
          card();
          forms();
          slider();
          timer();
          calc();
          
});
