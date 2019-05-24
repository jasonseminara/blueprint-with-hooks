const express = require('express');
const { exec } = require('child_process');
const app = express();
const port = 3001;

app.get('/words', (req, res) => {
  const {search:word} = req.query;
  exec(`cat /usr/share/dict/words | grep ${word}`, (err, stdout, stderr) => {
    if (err || stderr) return res.json([]);
    const words = stdout.trim().split(/\n/);
    res.json(words);
  });

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
