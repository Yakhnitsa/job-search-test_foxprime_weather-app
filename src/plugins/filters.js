const dateFormat = require('dateformat');

import Vue from 'vue';

Vue.filter('formatDate', date => {
    return new Date(date).toLocaleDateString()
});

Vue.filter('formatTime', date => {
    return dateFormat(new Date(date), "dddd, mmmm dS, yyyy, h:MM:ss TT");
});