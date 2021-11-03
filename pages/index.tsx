import type { NextPage } from 'next'
import React from 'react';
import Link from 'next/link'


const Home: NextPage = () => {
  return (
    <div className="bg-green-500">
      <p>Pagina de index</p>
      <Link href="/admin/usuarios">
        <a className="cursor-pointer">Ir a usuarios</a>
      </Link>
      <Link href="/test">
        <a className="cursor-pointer">Ir a test</a>
      </Link>
      
    </div>
  )
}

export default Home
