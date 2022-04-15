import sanityClient from '@sanity/client';
const client = sanityClient({
    projectId: 'g48bk3yq',
    dataset: 'production',
    apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
    token: 'skTTwRiyMaAtKPK8fgkm6KUbJaGtsZAa2cPDkfNnTGz3lpFaRuJBTvvi1MYMpr3xlwg7YMzm2tAwD7WQZUan9n8zv80VhEi6wh1qgDhzWCHKlT3iOvGlXTrjfSwnXdjcSQ508VFau9mQJyoleqyIimNb5hUZcbxiTjlm4wE5gc01m9Sbt1cu', // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
  })

export default client;