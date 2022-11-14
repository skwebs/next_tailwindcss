import React from 'react'

const Select = () => {
  return (
    <>
      <div id="custom-select-animation"
        className="border-blue-gray-50 grid min-h-[140px] w-full scroll-mt-48 place-items-center overflow-x-scroll rounded-lg border bg-[#f8fafc] p-6 lg:overflow-visible">
        <div className="w-72">
          <div className="relative w-full min-w-[200px] h-10"><button type="button"
            className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal text-left outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all border-2 text-sm px-3 py-2.5 rounded-[7px] border-blue-500 border-t-transparent"
            aria-expanded="true" aria-haspopup="listbox" role="combobox" aria-controls=":R1td8m:" data-aria-hidden="true"
            aria-hidden="true"><span className="absolute top-2/4 -translate-y-2/4 left-3 pt-0.5"></span>
            <div
              className="grid place-items-center absolute top-2/4 right-2 pt-px w-5 h-5 text-blue-gray-400 rotate-0 -translate-y-2/4 transition-all rotate-180 mt-px">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg></div>
          </button><label
            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal transition-all -top-1.5 before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 before:rounded-tl-md before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 after:rounded-tr-md after:pointer-events-none after:transition-all peer-disabled:after:border-transparent text-[11px] peer-disabled:text-transparent before:border-t-2 before:border-l-2 after:border-t-2 after:border-r-2 leading-tight text-blue-500 before:border-blue-500 after:border-blue-500"
            data-aria-hidden="true" aria-hidden="true">Select Version</label><span tabindex="0" data-aria-hidden="true"
              aria-hidden="true" style={{ position: 'fixed', opacity: 0, pointerEvents: 'none', outline: '0px' }}></span>
            <ul tabindex="-1" role="listbox"
              className="w-full max-h-96 bg-white p-3 border border-blue-gray-50 rounded-md shadow-lg shadow-blue-gray-500/10 font-sans text-sm font-normal text-blue-gray-500 overflow-auto focus:outline-none"
              id=":R1td8m:" ariaOrientation="vertical"
              style={{ position: 'absolute', top: '45px', left: '0px', overflow: 'auto', opacity: 1, transformOrigin: 'center top', transform: 'none', width: '288px', zIndex: 99 }}
            >
              <li id="material-tailwind-select-0" role="option"
                className="pt-[9px] pb-2 px-3 rounded-md leading-tight cursor-pointer select-none hover:bg-blue-gray-50 focus:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 outline outline-0 transition-all"
                tabindex="1" aria-selected="false" data-selected="false">Material Tailwind HTML</li>
              <li id="material-tailwind-select-2" role="option"
                className="pt-[9px] pb-2 px-3 rounded-md leading-tight cursor-pointer select-none hover:bg-blue-gray-50 focus:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 outline outline-0 transition-all"
                tabindex="1" aria-selected="false" data-selected="false">Material Tailwind React</li>
              <li id="material-tailwind-select-4" role="option"
                className="pt-[9px] pb-2 px-3 rounded-md leading-tight cursor-pointer select-none hover:bg-blue-gray-50 focus:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 outline outline-0 transition-all"
                tabindex="1" aria-selected="false" data-selected="false">Material Tailwind Vue</li>
              <li id="material-tailwind-select-6" role="option"
                className="pt-[9px] pb-2 px-3 rounded-md leading-tight cursor-pointer select-none hover:bg-blue-gray-50 focus:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 outline outline-0 transition-all"
                tabindex="1" aria-selected="false" data-selected="false">Material Tailwind Angular</li>
              <li id="material-tailwind-select-8" role="option"
                className="pt-[9px] pb-2 px-3 rounded-md leading-tight cursor-pointer select-none hover:bg-blue-gray-50 focus:bg-blue-gray-50 hover:bg-opacity-80 focus:bg-opacity-80 hover:text-blue-gray-900 focus:text-blue-gray-900 outline outline-0 transition-all"
                tabindex="1" aria-selected="false" data-selected="false">Material Tailwind Svelte</li>
            </ul><span tabindex="0" data-aria-hidden="true" aria-hidden="true"
              style={{ position: 'fixed', opacity: 0, pointerEvents: 'none', outline: '0px' }}></span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Select