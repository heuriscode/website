import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'ux19eccq', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: '2022-04-28', // use a UTC date string
});
