import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addPicture, addName, addDesignation, addDescription } from '../Redux/Slices';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Data() {
    const [Picture, setPicture] = useState('public/Image1.png');
    const [Name, setName] = useState(null);
    const [Designation, setDesignation] = useState(null);
    const [description, setDescription] = useState(null);

    const dispatch = useDispatch();

    function setImage(e) {
        setPicture(URL.createObjectURL(e.target.files[0]));
    }

    function storeData() {
        dispatch(addPicture(Picture));
        dispatch(addName(Name));
        dispatch(addDesignation(Designation));
        dispatch(addDescription(description));
    }

    return (
        <>
            <div className="w-4/5 h-4/5 backgroundeffect rounded myeffect">
                <form className="h-full w-full flex flex-col ">
                    <div className="w-full flex justify-end" style={{ height: 'a0px' }}>
                        <Link to="/" className="text-2xl h-full rounded ">
                            <button className="text-2xl h-full rounded-bl-full pl-5 pr-2 pt-1 ">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </Link>
                    </div>
                    <div className="flex h-5/6 w-full">
                        <div className="basis-2/6" style={{ boxSizing: 'border-box' }}>
                            <label htmlFor="inputfile" className="text-5xl">
                                <img src={Picture} className="h-40 w-40 rounded-full ml-8" />
                            </label>
                            <input type="file" id="inputfile" accept="image/*" onChange={(e) => setImage(e)}></input>
                        </div>

                        <div className="flex flex-col items-center basis-4/6 mt-10">
                            <div className=" w-4/5 h-1/6">
                                <input
                                    type="text"
                                    className="text-3xl w-full h-4/5 px-5 rounded"
                                    placeholder="Name"
                                    onChange={(e) => setName(e.target.value)}
                                ></input>
                            </div>

                            <div className=" w-4/5 h-1/6">
                                <input
                                    className="text-3xl w-full h-4/5 px-5 rounded"
                                    placeholder="Designation"
                                    onChange={(e) => setDesignation(e.target.value)}
                                ></input>
                            </div>
                            <div className=" w-4/5 h-2/6">
                                <textarea
                                    className="text-3xl w-full h-4/5 px-5 rounded"
                                    placeholder="Designation description"
                                    onChange={(e) => setDescription(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className=" w-full h-1/6 flex justify-center ">
                        <Link to="/about">
                            <button className="text-xl w-full h-2/3 px-5 rounded  " onClick={storeData}>
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
