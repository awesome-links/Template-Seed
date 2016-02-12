'use strict';

var md = require('markdown').markdown;
var fs = require('fs');
var _ = require('lodash');

var content = fs.readFileSync(__dirname + '/testreadme.md', 'utf8');
var tokens = md.parse(content);
var final = {};
var heading = '';
tokens.forEach(function (item) {
  if( Array.isArray(item) &&  item[0] ){
    if( item[0] === 'header'){
      heading = item[2];
      final[heading] = [];
    }
    if(item[0] === 'bulletlist'){
      final[heading] = item.slice(1).map(function (listItem) {
        listItem = _.chain(listItem).flatten().without('listitem', 'link').value();
        return {
          heading: listItem[1],
          link: listItem[0].href,
          description: listItem[2].replace(/^\s+\-\s+/,'')
        };
      });
    }
  }
});

console.log(JSON.stringify(final));