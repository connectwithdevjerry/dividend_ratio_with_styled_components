import React from 'react'
import { MainYield } from '../components/MainYield'
import { Box } from '@mui/material'
import { Navbar } from '../components/navbar'

export const Home = () => {
  return (
    <>
      <Navbar />
      <Box sx={{padding: "10px 30px"}}>
        <MainYield />
      </Box>
    </>
  )
}
