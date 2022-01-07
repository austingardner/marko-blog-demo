import template from "./template.marko";

export default (req, res) => {
  res.marko(template, {id: req.query.id});
};
