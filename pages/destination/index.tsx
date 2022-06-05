import axios from 'axios'
import React from 'react'
import Layout from '../../components/Layout'
import Table from '../../components/Table'

const Destination = ({ destinations }: any) => {
  return (
    <Layout title="Destination">
      <Table destinations={destinations} />
    </Layout>
  )
}

export async function getStaticProps() {
  const res = await axios.get(`${process.env.API_URL}/destination`)
  const destinations = res.data
  console.log(destinations)

  return {
    props: {
      destinations,
    },
  }
}

export default Destination
