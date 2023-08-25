import Image from "next/image";
import logo from "../../assets/images/dream-tech-logo.png"
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas, faHome, faMicrochip, faBolt, faMemory, faDisplay, faGears, faHardDrive, faServer } from "@fortawesome/free-solid-svg-icons";
// import { library } from "@fortawesome/fontawesome-svg-core";





const Navbar = () => {
    const dropDownItems = (
        <>
            <li>
                <Link href="cpu">
                    <button>
                        <FontAwesomeIcon className="mr-2 text-secondary" icon={faMicrochip}></FontAwesomeIcon>
                        <span className="btm-nav-label">CPU / Processor</span>
                    </button>
                </Link>
            </li>
            <li>
                <Link href="cpu">
                    <button>
                        <FontAwesomeIcon className="mr-2 text-secondary" icon={faServer}></FontAwesomeIcon>
                        <span className="btm-nav-label">Motherboard</span>
                    </button>
                </Link>
            </li>
            <li>
                <Link href="cpu">
                    <button>
                        <FontAwesomeIcon className="mr-2 text-secondary" icon={faHardDrive}></FontAwesomeIcon>
                        <span className="btm-nav-label">Ram</span>
                    </button>
                </Link>
            </li>
            <li>
                <Link href="cpu">
                    <button>
                        <FontAwesomeIcon className="mr-2 text-secondary" icon={faBolt}></FontAwesomeIcon>
                        <span className="btm-nav-label">Power Supply Unit</span>
                    </button>
                </Link>
            </li>
            <li>
                <Link href="cpu">
                    <button>
                        <FontAwesomeIcon className="mr-2 text-secondary" icon={faMemory}></FontAwesomeIcon>
                        <span className="btm-nav-label">Storage Device</span>
                    </button>
                </Link>
            </li>
            <li>
                <Link href="cpu">
                    <button>
                        <FontAwesomeIcon className="mr-2 text-secondary" icon={faDisplay}></FontAwesomeIcon>
                        <span className="btm-nav-label">Monitor</span>
                    </button>
                </Link>
            </li>
            <li>
                <Link href="cpu">
                    <button>
                        <FontAwesomeIcon className="mr-2 text-secondary" icon={faGears}></FontAwesomeIcon>
                        <span className="btm-nav-label">Others</span>
                    </button>
                </Link>
            </li>
        </>
    );
    return (
        <div className="navbar bg-neutral sticky top-0 border-b-2 border-secondary z-30 backdrop-blur bg-transparent shadow-lg text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52">
                        {dropDownItems}
                    </ul>
                </div>
                <Link href="/">
                    <Image src={logo} width={80} height={80} alt="logo" />
                </Link>
            </div>
            <div className="navbar-center">
                {/* no element */}
            </div>
            <div className="navbar-end">
                <Link href="/pc-builder">
                    <button className="btn btn-nutral border border-primary hover:bg-gradient-to-r from-primary to-secondary text-white">Pc Builder</button>
                </Link>
                <button className="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Navbar;