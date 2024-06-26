import logo from "../assets/logo.svg";
import pluse from "../assets/icons/pluse.svg";
import logoDark from "../assets/logo-for-dark.svg";
import ThemeSwitcher from "../components/ThemeSwitcher/ThemeSwitcher";
import { Link } from "react-router-dom";

export default function Navbar() {
    const logoStyle = {
        width: '50px',
        height: 'auto'
    };

    return (
        <header>
            <div className="lg:border-b lg:border-b-gray-500/10 dark:lg:border-b-gray-300/10">
                <nav className="flex justify-center lg:justify-between lg:items-center container">
                    <div className="inline-flex lg:flex items-center space-x-3 py-3 md:py-0">
                        <Link to="/">
                            <img className="dark:hidden" src={logo} alt="logo" />
                            <img className="hidden dark:inline-block" src={logoDark} alt="logo" />
                        </Link>
                        <div className="lg:hidden mt-5 absolute right-6 top-0"><ThemeSwitcher /></div>
                        <span className="mt-5 text-sm hidden lg:inline-block dark:text-gray-200">Dubai</span>
                    </div>

                    <ul className="hidden lg:flex space-x-8 items-center">
                        <ThemeSwitcher />
                    </ul>
                    <Link className="p-3 space-y-1 dark:text-gray-200 flex flex-col items-center text-xs" to="/place-an-ad">
                        <img src={pluse} alt="ad-place-icon" />
                        <span>Place an Ad</span>
                    </Link>
                </nav>
            </div>
        </header>
    );
}
