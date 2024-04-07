import { Link, Outlet } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
    faDownload,
    faWandMagicSparkles,
    faPenToSquare,
    faLayerGroup,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';

function Basic() {
    return (
        <>
            <div className="w-full h-screen flex  ">
                <div id="header" className=" h-full flex flex-col text-3xl pt-4" style={{ width: '8%' }}>
                    <div className=" w-full h-1/5 ">
                        <FontAwesomeIcon
                            icon={faUsers}
                            style={{
                                width: '60px',
                                height: '80px',
                                paddingLeft: '10px',
                            }}
                        />
                    </div>
                    <div className="w-1/5 h-3/5 bg-transparent ml-3 ">
                        <ul className="h-full flex flex-col flex-auto justify-between ">
                            <li>
                                <Link to="">
                                    <FontAwesomeIcon icon={faHouse} />
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/edit">
                                    <FontAwesomeIcon icon={faPenToSquare} />
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <FontAwesomeIcon icon={faDownload} />
                                </Link>
                            </li>
                            <li>
                                <Link to="/data">
                                    <FontAwesomeIcon icon={faLayerGroup} />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div id="content" className=" h-full w-5/6 flex items-center justify-center">
                    <Outlet />
                </div>

               
            </div>
        </>
    );
}

export default Basic;
