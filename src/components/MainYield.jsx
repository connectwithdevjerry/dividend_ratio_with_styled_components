import React from 'react'
import CustomizedTables from './CustomTable'
import { useEffect } from 'react';

export const MainYield = () => {

  // const url = "https://mews-systems.gitbook.io/connector-api/operations/rates"

  // useEffect(() => {
  // })

  return (
    <>
        <CustomizedTables title="Final Advised Rates" />
        <CustomizedTables title="Overall Pace" />
        <CustomizedTables title="Today vs YearAgo" />
    </>
  )
}
