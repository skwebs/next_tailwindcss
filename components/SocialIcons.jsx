import { SocialIconsList } from '../constants'

const SocialIcons = () => {
    const iconColorStyle = `bg-gradient-to-bl from-transparent to-slate-100 text-slate-400 after:bg-gray-200 hover:text-slate-700 focus:text-slate-700 after:bg-gradient-to-tr after:from-slate-50`;
    return (
        <>
            {SocialIconsList.map((si, index) => (
                <a key={index} href={si.href} target='_blank' rel="noreferrer" type="button" className={`relative flex justify-center items-center outline-none w-[40px] h-[40px] no-underline rounded-full text-center shadow after:content-[''] after:absolute -after:top-1/2 -after:left-1/2 after:block after:w-0 after:h-0 after:rounded-full after:duration-200 hover:after:w-full hover:after:h-full focus:after:w-full focus:after:h-full ${iconColorStyle}`}>
                    {si.icon} <span className="sr-only">{si.text}</span>
                </a>
            ))}
        </>
    )
}

export default SocialIcons
