import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Honey Badgers!</h1>
    <img 
      src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/146/badger_1f9a1.png" 
      srcSet="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/146/badger_1f9a1.png 2x" 
      alt="Badger on Google Android 9.0" width="120" height="120" />
  </Layout>
)

export default IndexPage
