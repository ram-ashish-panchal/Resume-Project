import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addGithub } from '../Redux/Slices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function Contact() {
    
    const [github, setgithub] = useState(null);

    const dispatch = useDispatch();
    function storeData() {
        
        dispatch(addGithub(github));
    }
    return (
        <>
            <div className=" bg-blue-100 rounded h-screen w-full ">
                <div className="w-full h-1/6 flex ">
                    <div className="basis-1/6">
                        <button>add</button>
                    </div>
                    <h1 className="text-center text-7xl h-full basis-4/6 text-black ">Contact</h1>
                    <div className="basis-1/6 h-4/5 flex justify-end">
                        <Link to="/" className="text-2xl h-full rounded ">
                            <button className="text-2xl h-1/2 rounded-bl-full pl-5 pr-2 pt-1 ">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </Link>
                    </div>
                </div>

                <form className="h-1/2 w-full flex flex-col justify-center align-center ">
                    <div className="h-full w-full flex flex-col ">
                        <div className=" w-full flex justify-center align-center mt-2" style={{ height: '55px' }}>
                            <input
                                type="email"
                                className="text-3xl w-3/5  px-5 rounded"
                                placeholder="Email Address"
                                onChange={(e) => setemail(e.target.value)}
                            ></input>
                        </div>

                        <div className=" w-full h-1/6 flex justify-center align-center mt-2" style={{ height: '55px' }}>
                            <input
                                type="text"
                                className="text-3xl w-3/5   px-5 rounded"
                                placeholder="Mobile Number"
                                onChange={(e) => setnumber(e.target.value)}
                            ></input>
                        </div>

                        <div className=" w-full h-1/6 flex justify-center align-center mt-2" style={{ height: '55px' }}>
                            <input
                                type="text"
                                className="text-3xl  w-3/5 px-5 rounded"
                                placeholder="Linkdin"
                                onChange={(e) => setlinkdin(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <br></br>
                    <div className=" w-full h-1/6 flex justify-center items-center">
                        <Link to="/services" className="flex justify-end basis-1/2 ">
                            <button className="text-xl w-1/2 h-5/6 px-5 rounded ">Back</button>
                        </Link>
                        <Link to="/skills" className="basis-1/2">
                            <button className="text-xl w-1/2 h-5/6 px-5 rounded ml-2 buttonclass2" onClick={storeData}>
                                Next
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Contact;
