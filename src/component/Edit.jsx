import { Link, Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faUserGraduate, faSkiing, faFlask } from '@fortawesome/free-solid-svg-icons';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Edit() {
    const [picture, setpicture] = useState(useSelector((state) => state.picture));
    const [name, setname] = useState(useSelector((state) => state.name));
    const [email, setemail] = useState(useSelector((state) => state.email));
    const [number, setnumber] = useState(useSelector((state) => state.number));
    const [designation, setDesignation] = useState(useSelector((state) => state.designation));
    const [description, setDescription] = useState(useSelector((state) => state.description));
    const [about, setabout] = useState(useSelector((state) => state.about));
    const [state, setstate] = useState(useSelector((state) => state.state));
    const [country, setcountry] = useState(useSelector((state) => state.country));
    const [city, setcity] = useState(useSelector((state) => state.city));

    const [institute1, setinstitute1] = useState(useSelector((state) => state.institute1));
    const [course1, setcourse1] = useState(useSelector((state) => state.course1));
    const [time1, settime1] = useState(useSelector((state) => state.time1));

    const [institute2, setinstitute2] = useState(useSelector((state) => state.institute2));
    const [course2, setcourse2] = useState(useSelector((state) => state.course2));
    const [time2, settime2] = useState(useSelector((state) => state.time2));

    const [institute3, setinstitute3] = useState(useSelector((state) => state.institute3));
    const [course3, setcourse3] = useState(useSelector((state) => state.course3));
    const [time3, settime3] = useState(useSelector((state) => state.time3));

    const [institute4, setinstitute4] = useState(useSelector((state) => state.institute4));
    const [course4, setcourse4] = useState(useSelector((state) => state.course4));
    const [time4, settime4] = useState(useSelector((state) => state.time4));

    const skill = useSelector((state) => state.skills);

    const [color, setcolor] = useState('white');
    const pdfRef = useRef();
    const [direction, setdirection] = useState('right');

    useEffect(() => {
        document.getElementById('container').style.background = color;
    }, [color]);

    return (
        <>
            <div className="w-full h-screen flex flex-col ">
                <div className=" w-full h-1/6 bg-black flex flex-col border-4  border-solid border-black">
                    <div className="bg-gray-600 h-2/6">
                        
                    </div>
                    <div className=" h-4/6">
                    <button
                            className="ml-2"
                            style={{ backgroundColor: 'white' }}
                            onClick={() => {
                                setcolor('white');
                            }}
                        ></button>
                        <button
                            className="ml-2"
                            style={{ backgroundColor: '#C0C0C0' }}
                            onClick={() => {
                                setcolor('#C0C0C0');
                            }}
                        ></button>
                        <button
                            className="ml-2"
                            style={{ backgroundColor: '#CBD7BF' }}
                            onClick={() => setcolor('#CBD7BF')}
                        ></button>

                        <button
                            className="ml-2"
                            style={{ backgroundColor: '#FAE3B9' }}
                            onClick={() => setcolor('#FAE3B9')}
                        ></button>
                        <button
                            className="ml-2"
                            style={{ backgroundColor: '#ebdbfd' }}
                            onClick={() => setcolor('#ebdbfd')}
                        ></button>
                        <button
                            className="ml-2"
                            style={{ backgroundColor: '#E7FFCE' }}
                            onClick={() => setcolor('#E7FFCE')}
                        ></button>
                        <button
                            className="ml-2"
                            style={{ backgroundColor: '#FFF5ED' }}
                            onClick={() => setcolor('#FFF5ED')}
                        ></button>

                        <button
                            className="ml-2"
                            style={{ backgroundColor: '#CAF0F8' }}
                            onClick={() => setcolor('#CAF0F8')}
                        ></button>
                        <button
                            className="ml-2"
                            style={{ backgroundColor: '#e0d6ff' }}
                            onClick={() => setcolor('#e0d6ff')}
                        ></button>
                        
                        
                    </div>

                    
                </div>
                <div className=" w-full h-5/6 flex bg-gray-600 items-center justify-around rounded-b-4 border-4  border-solid border-black  ">
                    <div className="bg-black" style={{ width: '23%', height: '98%' }}>
                        <div className="bg-black"></div>
                    </div>
                    <div className="flex " style={{ width: '58%', height: '98%' }}>
                        <div ref={pdfRef} className="flex w-full overflow-y-auto " style={{ backgroundColor: color }}>
                            <div id="container" className="h-fit w-full text-black rounded p-4 px-10 ">
                                <div className=" flex w-full h-30">
                                    <div className="basis-5/6">
                                        <h1 className="mt-5 font-bold ">{name}</h1>
                                        <h4 className="font-bold">
                                            {' '}
                                            Address:{' '}
                                            <span className="font-normal">
                                                {city},{state},{country}
                                            </span>{' '}
                                        </h4>
                                        <h4 className="font-bold">
                                            {' '}
                                            Phone number: <span className="font-normal">{number}</span>{' '}
                                        </h4>
                                        <h4 className="font-bold">
                                            {' '}
                                            Email: <span className="font-normal">{email}</span>{' '}
                                        </h4>
                                    </div>
                                    <div>
                                        <img src={picture} className=" mt-4 w-40 h-40 rounded-full " />
                                    </div>
                                </div>

                                
                                <div className="mt-2">
                                    <h1 className="text-3xl ">
                                        <FontAwesomeIcon icon={faUser} /> <span className="ml-4 font-semibold">Profile</span>
                                    </h1>
                                    <hr className="mt-0.5 border-black"></hr>
                                    <p className="mt-1 ml-14">{about}</p>
                                </div>
                                <br></br>
                                <h1 className="text-3xl">
                                    <FontAwesomeIcon icon={faBriefcase} />{' '}
                                    <span className="ml-4 font-semibold">Work Experience</span>
                                </h1>
                                <hr className="mt-0.5 border-black"></hr>
                                <div className="mt-2">
                                    <h1 className="text-xl ml-14 font-medium underline">{designation}</h1>
                                    <p className="text-justify ml-20">{description}</p>
                                </div>
                                <br></br>
                                <h1 className="text-3xl font-semibold">
                                    <FontAwesomeIcon icon={faUserGraduate} />{' '}
                                    <span className="ml-4 font-semibold">Education</span>
                                </h1>
                                <hr className="mt-0.5 border-black"></hr>
                                
                                <div className='mt-1'>
                                    <h2 className="text-xl ml-14 font-medium">{institute1}</h2>
                                    <h3 className="ml-20">{course1}</h3>
                                    <h3 className="ml-20">{time1}</h3>
                                    
                                    <h2 className="text-xl ml-14 font-medium">{institute2}</h2>
                                    <h3 className="ml-20">{course2}</h3>
                                    <h3 className="ml-20">{time2}</h3>
                                    
                                    <h2 className="text-xl ml-14 font-medium">{institute3}</h2>
                                    <h3 className="ml-20">{course3}</h3>
                                    <h3 className="ml-20">{time3}</h3>
                                    
                                    <h2 className="text-xl ml-14 font-medium">{institute4}</h2>
                                    <h3 className="ml-20">{course4}</h3>
                                    <h3 className="ml-20">{time4}</h3>
                                </div>
                                <br></br>
                                <h1 className="text-3xl font-semibold">
                                    <FontAwesomeIcon icon={faFlask} /> <span className="ml-4 font-semibold">Skills</span>
                                </h1>
                                <hr className="mt-0.5 border-black"></hr>
                                <br></br>
                                <div className="grid grid-rows-2 grid-cols-4 gap-1 font-semibold " style={{color:color}}>
                                    <button className="ml-10">{skill[0]}</button>
                                    <button className="ml-10">{skill[1]}</button>
                                    <button className="ml-10">{skill[2]}</button>
                                    <button className="ml-10">{skill[3]}</button>
                                    <button className="ml-10">{skill[4]}</button>
                                    <button className="ml-10">{skill[5]}</button>
                                    <button className="ml-10">{skill[6]}</button>
                                    <button className="ml-10">{skill[7]}</button>
                                    <button className="ml-10">{skill[8]}</button>
                                    <button className="ml-10">{skill[9]}</button>
                                    <button className="ml-10">{skill[10]}</button>
                                    <button className="ml-10">{skill[11]}</button>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-black" style={{ width: '15%', height: '98%' }}>
                        <div className="bg-black">
                            <Link to="/template1">
                                <button>Download</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Edit;
