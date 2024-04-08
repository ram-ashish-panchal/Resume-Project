import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addPicture, addName, addDesignation, addDescription, addAbout, addState, addCountry, addCity} from '../Redux/Slices';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Data() {
    const [Picture, setPicture] = useState('/Image1.png');
    const [Name, setName] = useState(null);
    const [Designation, setDesignation] = useState(null);
    const [description, setDescription] = useState(null);
    const [About, setAbout] = useState(null);
    const [State, setState] = useState(null);
    const [Country, setCountry] = useState(null);
    const [City, setCity] = useState(null);

    const dispatch = useDispatch();
    
    function storeData() {
        if(About==null){
            dispatch(addAbout(`Dedicated ${Designation} having deep understanding of HTML CSS and JavaScript. I am adept at collaborating with corss-functional teams to deliver high-quality projects on time. Seeking a challenging role where I can utilize my expertise to drive innovation and user engagement. `))
        }else{
            dispatch(addAbout(About));
        }
       if(Picture=='/Image1.png'){
        dispatch(addPicture(null));
       }else{
        dispatch(addPicture(Picture));
       }
        dispatch(addState(State));
        dispatch(addCountry(Country));
        dispatch(addCity(City));
        
        dispatch(addName(Name));
        dispatch(addDesignation(Designation));
        dispatch(addDescription(description));
    }

    

    function setImage(e) {
        setPicture(URL.createObjectURL(e.target.files[0]));
    }

    

    return (
        <>
            <div className=" bg-blue-100 rounded h-screen w-full ">
                <form className="h-full w-full flex flex-col pl-40">
                    <div className="w-full flex justify-end" style={{ height: '50px' }}>
                        <Link to="/" className="text-2xl h-full rounded ">
                            <button className="text-2xl h-full rounded-bl-full pl-5 pr-2 pt-1 ">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </Link>
                    </div>
                    <br></br>
                    <div className="h-4/6 w-full">
                        <div className=" flex h-1/2">
                            <div className="basis-2/6 h-full flex justify-center ">
                                <label htmlFor="inputfile" className="text-5xl">
                                    <img src={Picture} className="h-60 w-60 rounded-full ml-8" />
                                </label>
                                <input type="file" id="inputfile" accept="image/*" onChange={(e) => setImage(e)}></input>
                            </div>
                            <div className="basis-4/6  h-full flex flex-col justify-around">
                                <input
                                    type="text"
                                    className="text-3xl w-2/3 h-1/5 px-5 rounded"
                                    placeholder="Name"
                                    onChange={(e) => setName(e.target.value)}
                                ></input>
                                <input
                                    className="text-3xl w-2/3 h-1/5 px-5 rounded"
                                    placeholder="Designation"
                                    onChange={(e) => setDesignation(e.target.value)}
                                ></input>

                                <textarea
                                    className="text-3xl w-4/6 h-2/4 px-5 rounded"
                                    placeholder="Designation description"
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <br></br>
                        <div className="h-1/2">
                            <div className="h-3/6 flex justify-center items-center " style={{ width: '86.4%' }}>
                                <textarea
                                    className="w-4/5 h-full rounded px-4 py-2 text-3xl"
                                    onChange={(e) => setAbout(e.target.value)}
                                ></textarea>
                            </div>
                            <br></br>
                            <div className="flex h-1/4 justify-center" style={{ width: '86.4%' }}>
                                <div className="w-4/5 flex">
                                    <div className="text-3xl h-4/5 rounded flex ">
                                        <input
                                            type="text"
                                            className=" w-4/5 h-full px-5 rounded "
                                            placeholder="City"
                                            onChange={(e) => setCity(e.target.value)}
                                        ></input>
                                    </div>
                                    <div className="text-3xl h-4/5 rounded flex justify-center">
                                        <input
                                            type="text"
                                            className=" w-4/5 h-full px-5 rounded "
                                            placeholder="State"
                                            onChange={(e) => setState(e.target.value)}
                                        ></input>
                                    </div>

                                    <div className="text-3xl h-4/5 rounded flex justify-end">
                                        <input
                                            type="text"
                                            className=" w-4/5 h-full px-5 rounded "
                                            placeholder="Country"
                                            onChange={(e) => setCountry(e.target.value)}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full pl-28" style={{ height: '60px',width:"77.5%" }}>
                        <Link to="/services" className='flex justify-center'>
                            <button className="text-xl w-full h-full px-5 rounded  " onClick={storeData}>
                                Next
                            </button>
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Data;
