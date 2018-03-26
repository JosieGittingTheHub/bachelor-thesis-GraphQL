const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

function post(parent, { title, spotifyURI }, context, info) {
  const userId = getUserId(context)
  return context.db.mutation.createPlaylist(
    { data: { title, spotifyURI, postedBy: { connect: { id: userId } } } },
    info,
  )
}
async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.db.mutation.createUser({
    data: { ...args, password },
  })

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}
async function login(parent, args, context, info) {
  const user = await context.db.query.user({ where: { email: args.email } })
  if (!user) {
    throw new Error(`Could not find user with email: ${args.email}`)
  }

  const valid = await bcrypt.compare(args.password, user.password)
  if (!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user,
  }
}
async function vote(parent, args, context, info) {
  const userId = getUserId(context)
  const { playlistId } = args
  const playlistExists = await context.db.exists.Vote({
    user: { id: userId },
    playlist: { id: playlistId },
  })
  if (playlistExists) {
    throw new Error(`Already voted for playlist: ${playlistId}`)
  }

  return context.db.mutation.createVote(
    { where: { id: playlistId } },
    info,
  )
}
function remove(parent, args, context, info) {
  const { playlistId } = args

  return context.db.mutation.deletePlaylist(
    { where: { id: playlistId } },
    info,
  )
}

module.exports = {
  post,
  signup,
  login,
  remove
}
