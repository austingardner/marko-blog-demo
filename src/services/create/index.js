import fetch from 'node-fetch';

export default async (req, res) => {
  await fetch('http://localhost:5000/data', {method: 'POST', headers: {'content-type': 'application/json'}, body: JSON.stringify({title: req.body.title, text: req.body.text})});
  //res.json(Promise.resolve({success: true}));
  res.redirect('/');
};