import { Link, NavLink, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faDownload, faPenToSquare, faUsers } from '@fortawesome/free-solid-svg-icons';

function Basic() {
    return (
        <>
            <div className="w-full h-screen flex flex-col ">
                <div id="header" className=" h-1/6 flex text-3xl pt-4 w-full">
                    <div className=" w-full h-1/6 flex">
                        <div className='basis-1/6'>
                            <Link to="/contentcreator">
                                <FontAwesomeIcon
                                    icon={faUsers}
                                    style={{
                                        width: '60px',
                                        height: '80px',
                                        paddingLeft: '10px',
                                    }}
                                />
                            </Link>
                        </div>
                        <div className='basis-5/6'>
                            <ul className="h-full flex justify-around ">
                                <li>
                                    <NavLink
                                        to="/"
                                        className={({ isActive }) => `${isActive ? 'text-blue-800' : 'text-white'}`}
                                    >
                                        <FontAwesomeIcon icon={faHouse} />
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/edit">
                                        <FontAwesomeIcon icon={faPenToSquare} />
                                    </NavLink>
                                </li>
                                <li>
                                    <Link to="">
                                        <FontAwesomeIcon icon={faDownload} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <FontAwesomeIcon icon={faDownload} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="">
                                        <FontAwesomeIcon icon={faDownload} />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className=" h-5/6 w-full flex items-center justify-center">
                    <div className="flex border-2 mx-4 p-14 justify-center shadow-lg">
                        <div className="basis-2/6 justify-self-end">
                            <img src="../resume.jpg"></img>
                        </div>
                        <div className="basis-3/6 pl-10">
                            <h1>Try your Professional Resume builder now!</h1>
                            <br></br>
                            <p>
                                Save time with our easy 3-step resume builder. No more writer's block or formatting difficulties
                                in Word. Rapidly make a perfect resume.
                            </p>
                            <br></br>
                            <div>
                                <Link to='/data'><button className='buttonclass1 bg-blue-700'>Create My Resume</button></Link>
                                <button className="ml-2 ">Resume Examples</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Basic;
