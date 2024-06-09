import React from 'react'
import { Button, Container } from '../components/index'

function Error() {
  return (
    <Container>
      
    <div className='mt-20'>
      <div>
        <p className='text-slate-400 font-primary'>Home / <span className='text-black font-medium '>404 Error</span></p>
      </div>
      <div className=' my-64 flex flex-col justify-center items-center gap-10'>
        <div className='text-8xl font-bold font-primary'>404 Not Found</div>
        <div className='mb-10 font-primary'>Your visted page not found. You may go home page</div>
        <Button  linkTo='/'>Back To Home Page</Button>
      </div>
    </div>
    </Container>
  )
}

export default Error