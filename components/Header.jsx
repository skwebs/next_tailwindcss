import { useState, useEffect } from 'react'

const Header = () => {
  const [dateState, setDateState] = useState(new Date());
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
    const intervalId = setInterval(() => {
      console.log('watching');
      setDateState(new Date());
    }, 1000);
    return function cleanUp() {
      clearInterval(intervalId)
    };
  }, []);
  return (
    <>
      <div className=' p-1 border-b'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            {/* left side */}
            <div>Left side</div>
            {/* right side */}
            <div className='text-slate-900 font-semibold w-44'>
              {domLoaded ?
                dateState.toLocaleString('en-GB', {
                  timeZone: 'Asia/Kolkata',
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  hour: 'numeric',
                  minute: 'numeric',
                  second: 'numeric',
                  hour12: true,
                }) : ""
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header