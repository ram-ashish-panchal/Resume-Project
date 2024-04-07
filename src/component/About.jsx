import { useState } from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import { addAbout, addState, addCountry, addCity } from '../Redux/Slices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function About() {
    const [About, setAbout] = useState(null);
    const [State, setState] = useState(null);
    const [Country, setCountry] = useState(null);
    const [City, setCity] = useState(null);
    const [designation, setDesignation] = useState(useSelector((state) => state.designation));
    const dispatch = useDispatch();
    function storeData() {
        if(About==null){
            dispatch(addAbout(`Dedicated ${designation} having deep understanding of HTML CSS and JavaScript. I am adept at collaborating with corss-functional teams to deliver high-quality projects on time. Seeking a challenging role where I can utilize my expertise to drive innovation and user engagement. `))
        }else{
            dispatch(addAbout(About));
        }
       
        dispatch(addState(State));
        dispatch(addCountry(Country));
        dispatch(addCity(City));
    }
    return (
        <>
            <div className="w-4/5 h-4/5 backgroundeffect rounded border-2 border-solid border-blue-400 shadow-xl myeffect ">
                <div className="w-full h-1/6 flex ">
                    <h1 className="text-center text-7xl h-full basis-5/6">
                        <pre className="ml-20"> About</pre>
                    </h1>
                    <div className="basis-1/6 h-3/5 flex justify-end">
                        <Link to="/" className="text-2xl h-full rounded ">
                            <button className="text-2xl h-full rounded-bl-full pl-5 pr-2 pt-1 ">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </Link>
                    </div>
                </div>
                <form className="h-4/6 w-full flex flex-col ">
                    <div className="w-full h-3/6 flex justify-center items-center ">
                        <textarea
                            className="w-4/5 h-full rounded px-4 py-2 text-3xl"
                            onChange={(e) => setAbout(e.target.value)}
                        ></textarea>
                    </div>
                    <br></br>
                    <div className="flex h-1/4  w-full">
                        <div className="text-3xl h-3/5 rounded flex justify-end">
                            <input
                                type="text"
                                className=" w-4/5 h-full px-5 rounded "
                                placeholder="City"
                                onChange={(e) => setCity(e.target.value)}
                            ></input>
                        </div>
                        <div className="text-3xl h-3/5 rounded flex justify-center">
                            <input
                                type="text"
                                className=" w-4/5 h-full px-5 rounded "
                                placeholder="State"
                                onChange={(e) => setState(e.target.value)}
                            ></input>
                        </div>

                        <div className="text-3xl h-3/5 rounded flex justify-start">
                            <input
                                type="text"
                                className=" w-4/5 h-full px-5 rounded "
                                placeholder="Country"
                                onChange={(e) => setCountry(e.target.value)}
                            ></input>
                        </div>
                    </div>

                    <div className="w-full h-1/6 flex justify-center items-center ">
                        <Link to="/data">
                            <button className="text-xl w-full h-1/2 px-5 rounded ">Back</button>
                        </Link>
                        <Link to="/services">
                            <button className="text-xl w-full h-1/2 px-5 rounded ml-4" onClick={storeData}>
                                Next
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default About;
