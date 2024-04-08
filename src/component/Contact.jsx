import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addEmail, addNumber, addLinkdin, addGithub } from '../Redux/Slices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function Contact() {
    const [email, setemail] = useState(null);
    const [number, setnumber] = useState(null);
    const [linkdin, setlinkdin] = useState(null);
    const [github, setgithub] = useState(null);

    const dispatch = useDispatch();
    function storeData() {
        dispatch(addEmail(email));
        dispatch(addNumber(number));
        dispatch(addLinkdin(linkdin));
        dispatch(addGithub(github));
    }
    return (
        <>
            <div className=" bg-blue-100 rounded h-screen w-full ">
                <div className="w-full h-1/6 flex ">
                    <div>
                        <button>add</button>
                    </div>
                    <h1 className="text-center text-7xl h-full basis-5/6 text-black ">
                        Contact
                    </h1>
                    <div className="basis-1/6 h-4/5 flex justify-end">
                        <Link to="/" className="text-2xl h-full rounded ">
                            <button className="text-2xl h-1/2 rounded-bl-full pl-5 pr-2 pt-1 ">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </Link>
                    </div>
                </div>

                <form className="h-5/6 w-full flex flex-col justify-center align-center ">
                    <br></br>
                    <div className=" w-full h-1/6 flex justify-center align-center">
                        <input
                            type="email"
                            className="text-3xl w-4/5 h-4/5  px-5 rounded"
                            placeholder="Email Address"
                            onChange={(e) => setemail(e.target.value)}
                        ></input>
                    </div>
                    <br></br>
                    <div className=" w-full h-1/6 flex justify-center align-center">
                        <input
                            type="text"
                            className="text-3xl w-4/5 h-4/5  px-5 rounded"
                            placeholder="Mobile Number"
                            onChange={(e) => setnumber(e.target.value)}
                        ></input>
                    </div>
                    <br></br>
                    <div className=" w-full h-1/6 flex justify-center align-center">
                        <input
                            type="text"
                            className="text-3xl  w-4/5 h-4/5   px-5 rounded"
                            placeholder="Linkdin"
                            onChange={(e) => setlinkdin(e.target.value)}
                        ></input>
                    </div>
                    <br></br>
                    <div className=" w-full h-1/6 flex justify-center align-center">
                        <input
                            type="text"
                            className="text-3xl w-4/5 h-4/5 px-5 rounded"
                            placeholder="Github"
                            onClick={(e) => setgithub(e.target.value)}
                        ></input>
                    </div>
                    <br></br>
                    <div className=" w-full h-1/6 flex justify-center align-center">
                        <Link to="/services">
                            <button className="text-xl w-full h-5/6 px-5 rounded">Back</button>
                        </Link>
                        <Link to="/skills">
                            <button className="text-xl w-full h-5/6 px-5 rounded ml-4" onClick={storeData}>
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
