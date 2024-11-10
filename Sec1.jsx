import React from 'react'

function Sec1() {
    const cm = new URL('../assets/cmimage.png', import.meta.url).href;

    return (
        
        <div className='grid grid-cols-2 p-10 items-center justify-items-center'>
            <div>
                <h1 className='text-blue-900 text-3xl font-bold'>“We have set ourselves an ambitious target of becoming a $1 Trillion economy by 2030”</h1>
                <h3 className='text-gray-500 text-xl font-semibold'>- Thiru. M.K. Stalin</h3>
                <p className='text-gray-500 text-l font-light'>Hon'ble Chief Minister of Tamil Nadu</p>
            </div>
            <div>
                <img src={cm} />
            </div>
        </div>
    )
}

export default Sec1