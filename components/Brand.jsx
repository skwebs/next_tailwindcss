const Brand = ({ className }) => {

    return (

        <div className={`${className} font-bold flex justify-center items-center`}>

            <div className='text-sky-500 '>
                <span className="hidden lg:inline-block">Anshu Memorial</span>
                <span className="lg:hidden">AM</span>
            </div>
            <div className='text-fuchsia-600'>
                <span className="hidden md:inline-block">&nbsp;Academy</span>
                <span className="inline-block md:hidden">A</span>
            </div>
        </div>
    )
}

export default Brand
