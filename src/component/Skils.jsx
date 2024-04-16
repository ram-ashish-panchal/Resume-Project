import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { addSkills,addEmail, addNumber, addLinkdin } from '../Redux/Slices';
import { useState } from 'react';

function Skills() {
    const [skill1, setskill1] = useState(null);
    const [skill2, setskill2] = useState(null);
    const [skill3, setskill3] = useState(null);
    const [skill4, setskill4] = useState(null);
    const [skill5, setskill5] = useState(null);
    const [skill6, setskill6] = useState(null);
    const [skill7, setskill7] = useState(null);
    const [skill8, setskill8] = useState(null);
    
    

    const [email, setemail] = useState(null);
    const [number, setnumber] = useState(null);
    const [linkdin, setlinkdin] = useState(null);

    let count=0;

    const dispatch = useDispatch();
    const skill = [skill1, skill2, skill3, skill4, skill5, skill6,skill7,skill8];

    function addmyskills(){
        count=count+1
        if(count<3){
            const selecteddiv=document.getElementById('skills')
            const myinput1=document.createElement('input')
            const myinput2=document.createElement('input')
            myinput1.classList.add('skillinput1')
            myinput2.classList.add('skillinput2')
            
            selecteddiv.appendChild(myinput1)
            selecteddiv.appendChild(myinput2)

        }
       
        


    }

    function storeData() {
        dispatch(addSkills(skill));
        dispatch(addEmail(email));
        dispatch(addNumber(number));
        dispatch(addLinkdin(linkdin));
    }

    return (
        <>
            <div className=" bg-blue-100 rounded h-screen w-full ">
                <div className="w-full h-1/6 flex ">
                    <div className="basis-1/6 ">
                        <button onClick={addmyskills}>add</button>
                    </div>
                    <div className="basis-4/6 text-center">
                        <h1 className="w-full h-full text-7xl h-1/6 text-black ">Contact & Skills</h1>
                    </div>
                    <div className="basis-1/6 h-4/5 flex justify-end">
                        <Link to="/" className="text-2xl h-full rounded ">
                            <button className="text-2xl h-1/2 rounded-bl-full pl-5 pr-2 pt-1 ">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="h-4/6 w-full flex flex-col justify-center items-center myscroll ">
                    <div className="w-full flex flex-col ">
                        <div className=" w-full flex justify-center align-center mt-2" style={{ height: '55px' }}>
                            <input
                                type="email"
                                className="text-3xl w-3/5  px-5 rounded"
                                placeholder="Email Address"
                                onChange={(e) => setemail(e.target.value)}
                            ></input>
                        </div>

                        <div className=" w-full flex justify-center align-center mt-2" style={{ height: '55px' }}>
                            <input
                                type="text"
                                className="text-3xl w-3/5   px-5 rounded"
                                placeholder="Mobile Number"
                                onChange={(e) => setnumber(e.target.value)}
                            ></input>
                        </div>

                        <div className=" w-full flex justify-center align-center mt-2" style={{ height: '55px' }}>
                            <input
                                type="text"
                                className="text-3xl  w-3/5 px-5 rounded"
                                placeholder="Linkdin"
                                onChange={(e) => setlinkdin(e.target.value)}
                            ></input>
                        </div>
                    </div>
                    <br></br>
                    <div id='skills' className=" w-2/3 h-52 grid grid grid-rows-auto grid-cols-2 pl-14 myscroll">
                        <input
                            onChange={(e) => setskill1(e.target.value)}
                            className="text-3xl w-4/5  px-5 rounded mb-2 ml-8"
                            type="text"
                            style={{height:'50px'}}
                            
                        ></input>
                        <input
                            onChange={(e) => setskill2(e.target.value)}
                            type="text"
                            className="text-3xl w-4/5 px-5 rounded mb-2 "
                            style={{height:'50px'}}
                            
                        ></input>
                        <input
                            onChange={(e) => setskill3(e.target.value)}
                            type="text"
                            className="text-3xl w-4/5 px-5 rounded mb-2 ml-8"
                            style={{height:'50px'}}
                            
                        ></input>

                        <input
                            onChange={(e) => setskill4(e.target.value)}
                            className="text-3xl w-4/5 px-5 rounded mb-2"
                            style={{height:'50px'}}
                            type="text"
                            
                        ></input>
                        <input
                            onChange={(e) => setskill5(e.target.value)}
                            type="text"
                            className="text-3xl w-4/5 px-5 rounded mb-2 ml-8"
                            style={{height:'50px'}}
                        ></input>
                        <input
                            onChange={(e) => setskill6(e.target.value)}
                            type="text"
                            className="text-3xl w-4/5 px-5 rounded mb-2"
                            style={{height:'50px'}}
                            
                        ></input>
                    </div>
                    <div className=" w-full h-1/6 flex justify-center ">
                        <Link to="/services" className="self-center">
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
