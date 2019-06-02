import express from 'express';
import child_process from 'child_process';

const { exec } = child_process;
const app:express.Application = express();
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
