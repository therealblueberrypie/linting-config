'use strict';

var copy = require('gently-copy');

copy('.editorconfig', process.env.INIT_CWD, { overwrite: true });
