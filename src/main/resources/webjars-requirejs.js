/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        "x-editable": [ 'webjars!bootstrap.js' ]
    }
});
