import { SocialIconsList } from '../constants'

const SocialIcons = () => {

    const iconColorStyle = `bg-gradient-to-bl from-transparent to-slate-200 text-slate-500  before:bg-gray-200 hover:text-slate-700 hover:from-slate-200 hover:to-transparent before:bg-gradient-to-tr before:from-slate-200`;
    const darkIconColorStyle = `dark:bg-gradient-to-bl dark:from-transparent dark:to-slate-800 dark:text-slate-400 dark:before:bg-gray-700 dark:hover:text-slate-200 dark:focus:text-slate-200 dark:before:bg-gradient-to-tr dark:before:from-slate-800 dark:hover:from-slate-800 dark:hover:to-transparent `;

    return (
        <>
            {SocialIconsList.map((si, index) => (
                <a key={index} href={si.href} target='_blank' rel="noreferrer" type="button" className={`relative flex justify-center items-center outline-none w-[40px] h-[40px] no-underline rounded-full text-center shadow before:absolute -before:top-1/2 -before:left-1/2 before:block before:w-0 before:h-0 before:rounded-full before:duration-200 hover:before:w-full hover:before:h-full focus:before:w-full focus:before:h-full ${iconColorStyle} ${darkIconColorStyle}`}>
                    {si.icon} <span className="sr-only">{si.text}</span>
                </a>
            ))}
        </>
    )
}

export default SocialIcons
