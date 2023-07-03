import React from 'react'
import CardImg from '../assets/images/illustration-hero.svg'
import MusicIcon from '../assets/images/icon-music.svg'

function OrderSummaryCard() {
  return(
       <div className='w-[340px] h-[85%] bg-white rounded-3xl shadow-slate-300 shadow-lg'>
         <div className='rounded-t-lg'>
            <img className='rounded-t-3xl' src={CardImg} alt="card image" />
        </div>
        <div className='p-6 text-center'>
            <div>
                <p className='font-bold text-2xl'>Order Summary</p>
                <p className='text-sm opacity-50 pt-4'>
                You can now listen to millions of songs, audiobooks and podcasts on any device anywhere you like!
                </p>
            </div>
            <div className='flex justify-between items-center gap-2 bg-[#f5f7ff] p-3 px-4 rounded-xl mt-5'>
                <img src={MusicIcon} alt="music image" />
                <div>
                <p className='font-bold text-sm'>Annual Plans</p>
                <p className='text-sm opacity-50 font-bold'>$59.99/year</p>
                </div>
                <a className='underline text-blue-600 text-sm' href="#">Change</a>
            </div>
            <div>
                <button className='bg-[#3829e0] px-4 py-2 mt-4 w-[100%] rounded-lg font-bold text-sm shadow-slate-300 shadow-lg cursor-pointer text-white'>
                    Proceed to Payment
                </button>
            </div>
            <div className='mt-4 cursor-pointer'>
                <p>Cancel Order</p>
            </div>
        </div>
       </div>
  )
}

export default OrderSummaryCard