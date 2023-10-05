module.exports = function (req, res, next) {
   const { directory } = req.body

   if (![directory].every(Boolean)) {
      return res.json('Missing Credentials')
   }

   console.log(directory)
   // else if (!validEmail(email)) {
   //    return res.json('Invalid Email')
   // }

   next()
}
