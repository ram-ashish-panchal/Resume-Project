import { Link, Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faUserGraduate } from '@fortawesome/free-solid-svg-icons';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Template1() {
    const [picture, setpicture] = useState(useSelector((state) => state.picture));
    const [name, setname] = useState(useSelector((state) => state.name));
    const [email, setemail] = useState(useSelector((state) => state.email));
    const [number, setnumber] = useState(useSelector((state) => state.number));
    const [designation, setDesignation] = useState(useSelector((state) => state.designation));
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

    const [color, setcolor] = useState('#C0C0C0');
    const pdfRef = useRef();

    function downloadPDF() {
        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm');

            pdf.addImage(imgData, 0, 0, 210, 300);
            pdf.save('Ashish.pdf');
        });
    }
    return (
        <>
            <div className="flex justify-center items-center">
                <div ref={pdfRef} className="flex w-full  " style={{ backgroundColor: color, width: '55%', height: '98%' }}>
                    <div id="container" className="h-fit w-full text-black rounded  px-10 " onDoubleClick={downloadPDF}>
                        <div className=" flex w-full">
                            <div className="basis-5/6">
                                <h1 className="mt-3 font-bold ">{name}</h1>
                                <h4 className="font-bold">
                                    Address:
                                    <span className="font-normal">
                                        {city},{state},{country}
                                    </span>
                                </h4>
                                <h4 className="font-bold">
                                    Phone number: <span className="font-normal">{number}</span>
                                </h4>
                                <h4 className="font-bold">
                                    Email: <span className="font-normal">{email}</span>
                                </h4>
                            </div>
                            <div className="basis-1/6">
                                <img src={picture} className=" mt-4 w-32 h-32 rounded-full " />
                            </div>
                        </div>

                        <br></br>
                        <div className="">
                            <h1 className="text-3xl ">
                                <FontAwesomeIcon icon={faUser} /> <span className="ml-4 font-semibold">Profile</span>
                            </h1>
                            <hr className="mt-0.5 border-black"></hr>
                            <p className="mt-1 ml-14">{about}</p>
                        </div>
                        <br></br>
                        <h1 className="text-3xl">
                            <FontAwesomeIcon icon={faBriefcase} /> <span className="ml-4 font-semibold ">Work Experience</span>
                        </h1>
                        <hr className="mt-0.5 border-black"></hr>
                        <div className="mt-2">
                            <h1 className="text-xl ml-14 font-medium underline">{designation}</h1>
                            
                                    <p className="text-justify"></p>
                            
                        </div>
                        <br></br>
                        <h1 className="text-3xl font-semibold">
                            <FontAwesomeIcon icon={faUserGraduate} /> <span className="ml-4 mt-0 font-semibold">Education</span>
                        </h1>
                        <hr className="mt-0.5 border-black"></hr>

                        <div>
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
                            <br></br>
                            <h1 className="text-3xl font-semibold">
                                <FontAwesomeIcon icon={faUserGraduate} /> <span className="ml-4 font-semibold">Skills</span>
                            </h1>
                            <hr className="mt-0.5 border-black"></hr>
                            <br></br>
                            <div className="grid grid-rows-2 grid-cols-3 gap-1 text-white mb-4">
                                <button className="ml-20">{skill[0]}</button>
                                <button className="ml-20">{skill[1]}</button>
                                <button className="ml-20">{skill[2]}</button>
                                <button className="ml-20">{skill[3]}</button>
                                <button className="ml-20">{skill[4]}</button>
                                <button className="ml-20">{skill[5]}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Template1;
