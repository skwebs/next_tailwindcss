import CircularProgress from './CircularProgress';

const OverlayCircularProgress = ({ message }) => {
    return (
        <>
            <div className='fixed inset-0 z-[999] bg-white/80 dark:bg-slate-900/50 backdrop-blur-[1px] flex justify-center items-center'>
                <div className=' flex items-center whitespace-nowrap bg-white dark:bg-slate-900  shadow shadow-gray-500 rounded-xl'>
                    <div className='p-4'>
                        <CircularProgress className='stroke-slate-700 dark:stroke-slate-300' color={`darkgray`} size={30} /></div>
                    <div className='pr-4 text-slate-700 dark:text-slate-300 font-semibold'>{message}</div>
                </div>
            </div>
        </>
    )
}

export default OverlayCircularProgress
