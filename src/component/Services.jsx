import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCourse1, addCourse2, addCourse3, addCourse4, addInstitute1, addInstitute2, addInstitute3, addInstitute4, addTime1, addTime2, addTime3, addTime4 } from '../Redux/Slices';

function Services() {
    const [institute1,setinstitute1]=useState(null);
    const [course1,setcourse1]=useState(null);
    const [time1,settime1]=useState(null);

    const [institute2,setinstitute2]=useState(null);
    const [course2,setcourse2]=useState(null);
    const [time2,settime2]=useState(null);

    const [institute3,setinstitute3]=useState(null);
    const [course3,setcourse3]=useState(null);
    const [time3,settime3]=useState(null);

    const [institute4,setinstitute4]=useState(null);
    const [course4,setcourse4]=useState(null);
    const [time4,settime4]=useState(null);
    let count=-1;

    let array=[[setinstitute3,setcourse3,settime3],[setinstitute4,setcourse4,settime4]]


    function addfield(){
        count=count+1
        if(count<3){
            const selecteddiv=document.getElementById('createdElements')
        const mydiv=document.createElement('div')
        const myinput1=document.createElement('input')
        const myinput2=document.createElement('input')
        const myinput3=document.createElement('input')
        const mybr=document.createElement('br')
        
        let i=0;

        mydiv.classList.add('educationfield')
        myinput1.classList.add('educationinput')
        myinput1.addEventListener("change",(e)=>{array[count][i](e.target.value)})
        
        myinput1.type="text"
        myinput1.placeholder="Name of Institute"
        myinput2.classList.add('educationinput')
        myinput2.addEventListener("change",(e)=>{array[count][++i](e.target.value)})
        
        myinput2.type="text"
        myinput2.placeholder="course"

        myinput3.classList.add('educationinput')
        myinput3.addEventListener("change",(e)=>{array[count][++i](e.target.value)})
        
        myinput3.type="text"
        myinput3.placeholder="time period"

        

        selecteddiv.append(mydiv)
        mydiv.appendChild(myinput1)
        mydiv.appendChild(myinput2)
        mydiv.appendChild(myinput3)
        selecteddiv.appendChild(mybr)
        }else{
            console.log('to much education details')
        }
        
        

        

    }
    
    
    const dispatch=useDispatch()

    function storeData(){
        dispatch(addInstitute1(institute1))
        dispatch(addCourse1(course1))
        dispatch(addTime1(time1))

        dispatch(addInstitute2(institute2))
        dispatch(addCourse2(course2))
        dispatch(addTime2(time2))

        dispatch(addInstitute3(institute3))
        dispatch(addCourse3(course3))
        dispatch(addTime3(time3))

        dispatch(addInstitute4(institute4))
        dispatch(addCourse4(course4))
        dispatch(addTime4(time4))
    }
    
    return (
        <>
            <div
                className=" bg-blue-100 rounded h-screen w-full "
            >
                <div className="w-full h-1/6 flex ">
                    <div className="basis-1/6 ">
                        <button onClick={addfield}>add</button>
                    </div>
                    <div className="basis-4/6 text-center">
                        <h1 className="w-full h-full text-7xl h-1/6 text-black ">Education</h1>
                    </div>
                    <div className="basis-1/6 h-4/5 flex justify-end">
                        <Link to="/" className="text-2xl h-full rounded ">
                            <button className="text-2xl h-1/2 rounded-bl-full pl-5 pr-2 pt-1 ">
                                <FontAwesomeIcon icon={faXmark} />
                            </button>
                        </Link>
                    </div>
                </div>
                <div className="h-3/5 w-full flex flex-col myscroll ">
                    <div id='createdElements'>
                        <div className=" w-full flex flex-col items-center justify-between" style={{height:'190px'}}>
                            <input onChange={(e)=>setinstitute1(e.target.value)} placeholder='Name of Institute' className="text-3xl w-4/5 px-5 rounded" type="text" style={{ height: '30%' }}></input>
                            <input onChange={(e)=>setcourse1(e.target.value)} placeholder='Course' type="text" className="text-3xl w-4/5 px-5 rounded" style={{ height: '30%' }}></input>
                            <input onChange={(e)=>settime1(e.target.value)} placeholder='Time period' type="text" className="text-3xl w-4/5 px-5 rounded" style={{ height: '30%' }}></input>
                        </div>
                        <br></br>
                        <div className=" w-full flex flex-col items-center justify-between" style={{height:'190px'}}>
                            <input onChange={(e)=>setinstitute2(e.target.value)} placeholder='Name of Institute' className="text-3xl w-4/5 px-5 rounded" type="text" style={{ height: '30%' }}></input>
                            <input onChange={(e)=>setcourse2(e.target.value)} placeholder='Course' type="text" className="text-3xl w-4/5 px-5 rounded" style={{ height: '30%' }}></input>
                            <input onChange={(e)=>settime2(e.target.value)} placeholder='Time period' type="text" className="text-3xl w-4/5 px-5 rounded" style={{ height: '30%' }}></input>
                        </div>
                        
                        
                        
                        
                        
                        <br></br>
                    </div>
                </div>
                <div className=" w-full h-1/6 flex justify-center">
                    <Link to="/data" className="self-center basis-1/3">
                        <button className="text-xl w-full h-4/6 px-5 rounded">Back</button>
                    </Link>
                    <Link to="/skills" className="self-center basis-1/3">
                        <button className="text-xl w-full h-4/6 px-5 rounded ml-2 buttonclass2" onClick={storeData}>Next</button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Services;
