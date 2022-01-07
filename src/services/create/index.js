import template from "../../pages/index";

export default async (req, res) => {
  
  await fetch('localhost:5000/data', {method: 'POST', body: JSON.stringify({title: req.body.title, text: req.body.text})});
  //res.json(Promise.resolve({success: true}));
  res.redirect('/');
};