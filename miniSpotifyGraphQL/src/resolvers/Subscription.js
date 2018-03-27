const newPlaylist = {
  subscribe: (parent, args, ctx, info) => {
    return ctx.db.subscription.playlist(
      { },
      info,
    )
  },
}

const newVote = {
  subscribe: (parent, args, ctx, info) => {
    return ctx.db.subscription.vote(
      { },
      info,
    )
  },
}

module.exports = {
  newPlaylist,
  newVote,
}