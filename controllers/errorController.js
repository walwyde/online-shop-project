exports.getErrorPage = (req, res) => {
  res.render('404', {docTitle: 'error', path: ''})
}