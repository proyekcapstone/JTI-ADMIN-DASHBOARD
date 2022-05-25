import type { NextPage } from 'next'
import Banner from '../components/Banner'
import CardInfo from '../components/CardInfo'
import Layout from '../components/Layout'

const Home: NextPage = () => {
  return (
    <Layout title="Dashboard">
      <CardInfo />
      <Banner />
    </Layout>
  )
}

export default Home
