import { FaTwitter, FaYoutube } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { GrFacebookOption } from "react-icons/gr"


const AppNavLinks = [
    {
        'name': 'Home',
        'link': '/'
    },
    {
        'name': 'About Us',
        'link': 'about'
    },
    {
        'name': 'Contact Us',
        'link': 'contact'
    }, {
        'name': 'Register',
        'link': 'register'
    },
    {
        'name': 'Login',
        'link': 'login'
    },
    {
        'name': 'Sitemap',
        'link': 'sitemap'
    },

]
// const iconStyle = `w-full h-full mx-auto hover:bg-blue hover:fill-white duration-300 block leading-10`;
const iconStyle = 'relative z-[1] duration-300 text-[28] w-2/5 h-2/5';
const SocialIconsList = [
    { 'href': 'https://youtube.com/AnshuMemorialAcademy', 'icon': <FaYoutube className={iconStyle} />, 'text': 'YouTube Channel' },
    { 'href': 'https://facebook.com/AnshuMemorialAcademy', 'icon': <GrFacebookOption className={iconStyle} />, 'text': 'Facebook Page' },
    { 'href': 'https://twitter.com/AnshuMemorial', 'icon': <FaTwitter className={iconStyle} />, 'text': 'Twitter Page' },
    { 'href': 'https://instagram.com/AnshuMemorial', 'icon': <FiInstagram className={iconStyle} />, 'text': 'Instagram Page' },
]

export { AppNavLinks, SocialIconsList }