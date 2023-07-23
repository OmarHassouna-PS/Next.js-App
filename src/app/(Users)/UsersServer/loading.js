'use client';
import React from 'react'
import { Dna } from 'react-loader-spinner';
import '@/app/globals.css'

export default function Loader() {
  return (
    <div className="Loader">
    <Dna
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
    />
</div>
  )
}