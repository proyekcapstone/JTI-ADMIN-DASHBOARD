import axios from 'axios'
import React from 'react'
import Layout from '../../components/Layout'
import Table from '../../components/TableDestination'

const Destination = ({ destinations }: any) => {
  return (
    <Layout title="Destination">
      <Table destinations={destinations} />
    </Layout>
  )
}

export async function getServerSideProps() {
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
