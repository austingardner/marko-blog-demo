import fetch from 'node-fetch';

export default async (req, res) => {
  console.log(req);
  await fetch('http://localhost:5000/data', {method: 'POST', body: JSON.stringify({title: req.body.title, text: req.body.text})});
  //res.json(Promise.resolve({success: true}));
  res.redirect('/');
};