const routeRedirection = (req, resolvedUrl) => {
  const authenticated = req.cookies['gridsAppsToken'] || 'yes'

  const requireAuthRoutes = ['/cart'];
  const requireNoAuthRoutes = ['/anything'];

  const requireAuth = requireAuthRoutes.find(route => route === resolvedUrl)
  const requireNoAuth = requireNoAuthRoutes.find(route => route === resolvedUrl)

  if (requireAuth && !authenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  } else if (requireNoAuth && authenticated) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return false
}

export default routeRedirection;