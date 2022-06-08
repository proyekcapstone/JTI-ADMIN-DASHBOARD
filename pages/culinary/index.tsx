import axios from 'axios'
import React from 'react'
import Layout from '../../components/Layout'
import TableCulinary from '../../components/TableCulinary'

const Culinary = ({ culinaries }: any) => {
  return (
    <Layout title="Culinary">
      <TableCulinary culinaries={culinaries} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await axios.get(`${process.env.API_URL}/culinary`)
  const culinaries = res.data

  return {
    props: {
      culinaries,
    },
  }
}

export default Culinary
