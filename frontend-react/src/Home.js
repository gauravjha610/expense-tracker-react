import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='Homepage'>

        <div className='showinfo'>
            <p>Total net balance:</p>
            <button>Show transactions</button>
        </div>

        <div className='editinfo'>
            <div className='addexpense'>

            </div>
            <div className='addincome'>

            </div>
        </div>
    </div>
  )
}

export default Home;