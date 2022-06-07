import axios from 'axios'
import React from 'react'
import Layout from '../../components/Layout'
import TableHotel from '../../components/TableHotel'

const Hotel = ({ hotels }: any) => {
  return (
    <Layout title="Hotel">
      <TableHotel hotels={hotels} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await axios.get(`${process.env.API_URL}/hotel`)
  const hotels = res.data

  return {
    props: {
      hotels,
    },
  }
}

export default Hotel
