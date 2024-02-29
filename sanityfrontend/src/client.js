import {createClient} from '@sanity/client';
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId: 'vff6qtex' ,
  dataset: 'production',
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  token:'skiZAYWLFAL9k5KHFo7USFzfsQhmUriPsHanqDrapAfoS4S0kUragSemyPiX5juqVat9R42BFgaMhNEhLtA6VERr5Fc2I3hWm9Xmn7AXnZBljBiABcZc8It7VPJtADmIBQ4ihhiTB7rLd1D1dZt5naHdnZotQT15nIMqgo4buLT6S8t9jP2a'// Only if you want to update content with the client
});
export async function getName() {
    const posts = await client.fetch('*[_type == "name"]')
    return posts
  }
  
  export async function createName(name ) {
    const result = client.create(name)
    return result
  }
