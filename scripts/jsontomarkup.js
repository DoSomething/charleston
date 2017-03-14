'use strict';

const fs = require('fs');
const he = require('he');
const input = require(__dirname + '/input.json');

he.encode.options.useNamedReferences = true;

const markup = input.map(function(row) {
  return (
    `<li>
      ${he.encode(row.Quote)}
      <cite class="footnote">&mdash; ${he.encode(row.Name)}, ${he.encode(row.Age)}</cite>
    </li>`
  );
});

fs.writeFileSync(__dirname + '/output.html', markup.join('\n'));
console.log('Wrote output to `output.html`');
