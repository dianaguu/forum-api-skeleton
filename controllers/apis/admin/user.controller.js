/* eslint-disable */
const userServices = requireWrapper('services/user.services')
/* eslint-enable */

const userController = {
  getUsers: (req, res, next) => {
    userServices.getUsers((err, data) => {
      if (err) return next(err)
      return res.json({
        status: 'success',
        data: {
          count: Object.keys(data.users).length,
          users: data.users
        }
      })
    })
  },
  getUser: (req, res, next) => {
    const reqUserId = req.user.id
    const reqParamsId = req.params.id
    userServices.getUser(reqUserId, reqParamsId, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  },
  patchUser: (req, res, next) => {
    const reqParamsId = req.params.id
    userServices.patchUser(reqParamsId, (err, data) => err ? next(err) : res.json({ status: 'success', data }))
  }
}

module.exports = userController
