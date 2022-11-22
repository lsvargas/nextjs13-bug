import Link from 'next/link'

function Home () {
  return (
    <div>
      <Link href='/day/1' className='mt-[2rem]'>
        <button>
          Click to go to test route
        </button>
      </Link>
    </div>
  )
}

export default Home
