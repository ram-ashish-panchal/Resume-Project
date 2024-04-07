import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { addSkills } from "../Redux/Slices";
import { useState } from "react";



function Skills() {

    const [skill1,setskill1]=useState(null);
    const [skill2,setskill2]=useState(null);
    const [skill3,setskill3]=useState(null);
    const [skill4,setskill4]=useState(null);
    const [skill5,setskill5]=useState(null);
    const [skill6,setskill6]=useState(null);

    const dispatch = useDispatch();
    const skill=[skill1,skill2,skill3,skill4,skill5,skill6];


    
    function storeData() {
       dispatch(addSkills(skill))
    }

    return (
        <>
            <div
                id="services"
                className="w-4/5 h-4/5 backgroundeffect rounded border-2 border-solid border-blue-400 shadow-xl myeffect "
            >
                <div className="w-full h-1/6 flex ">
                    <div className="basis-1/6 "></div>
                    <div className="basis-4/6 text-center">
                        <h1 className="w-full h-full text-7xl h-1/6  ">Skills</h1>
                    </div>
                    <div className="basis-1/6 h-3/5 flex justify-end">
                        <Link to="/" className="text-2xl h-full rounded ">
                            <button className="text-2xl h-full rounded-bl-full pl-5 pr-2 pt-1 ">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="h-4/6 w-full flex flex-col myscroll ">
                    
                        <div className=" w-full h-full flex flex-col items-center justify-between">
                            <input
                                onChange={(e) => setskill1(e.target.value)}
                                
                                className="text-3xl w-4/5 px-5 rounded mb-2"
                                type="text"
                                style={{ height: '30%' }}
                            ></input>
                            <input
                                onChange={(e) => setskill2(e.target.value)}
                                
                                type="text"
                                className="text-3xl w-4/5 px-5 rounded mb-2"
                                style={{ height: '30%' }}
                            ></input>
                            <input
                                onChange={(e) => setskill3(e.target.value)}
                               
                                type="text"
                                className="text-3xl w-4/5 px-5 rounded mb-2"
                                style={{ height: '30%' }}
                            ></input>
                            
                            <input
                                onChange={(e) => setskill4(e.target.value)}
                             
                                className="text-3xl w-4/5 px-5 rounded mb-2"
                                type="text"
                                style={{ height: '30%' }}
                            ></input>
                            <input
                                onChange={(e) => setskill5(e.target.value)}
                               
                                type="text"
                                className="text-3xl w-4/5 px-5 rounded mb-2"
                                style={{ height: '30%' }}
                            ></input>
                            <input
                                onChange={(e) => setskill6(e.target.value)}
                                
                                type="text"
                                className="text-3xl w-4/5 px-5 rounded mb-2"
                                style={{ height: '30%' }}
                            ></input>
                        </div>
                        <div className=" w-full h-1/6 flex justify-center ">
                            <Link to="/contact" className="self-center">
                                <button className="text-xl w-full h-4/6 px-5 rounded">Back</button>
                            </Link>
                            <Link to="/edit" className="self-center">
                                <button className="text-xl w-full h-4/6 px-5 rounded ml-4" onClick={storeData}>
                                    Generate
                                </button>
                            </Link>
                        </div>
                    
                </div>
            </div>
        </>
    );
}

export default Skills;
