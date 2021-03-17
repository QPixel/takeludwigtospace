import { Typography } from '@material-ui/core';
import Link from 'next/link'
import Layout from '../components/Layout';
// import Typography from ""

const IndexPage = () => (
  <Layout title="Take Ludwig to the moon!">
	<Typography variant="h1" component="h1">
		Coming Soon
	</Typography>
    <p>
      <Link href="https://qpixel.me">
        <a>Personal Site</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
