function feed(parent, args, context, info) {
    const { filter, first, skip } = args // destructure input arguments
    const where = filter
      ? { OR: [{ title_contains: filter }, { spotifyURI_contains: filter }] }
      : {}
  
    return context.db.query.playlists({ first, skip, where }, info)
  }
  
  module.exports = {
    feed,
  }