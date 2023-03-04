const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');

request('https://example.com', (error, response, html) => {
  if (!error && response.statusCode == 200) {
    const $ = cheerio.load(html);
    const data = [];

    $('selector').each((i, el) => {
      // Extract data and add it to data array
    });

    fs.writeFile('output.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log('Data successfully written to file');
    });
  }
});
