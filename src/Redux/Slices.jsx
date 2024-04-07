import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    picture: '',
    name: '',
    designation: '',
    email: '',
    number: '',
    linkdin: '',
    github: '',
    about: "",
    state: '',
    country: '',
    city: '',
    institute1:'',
    course1:'',
    time1:'',
    institute2:'',
    course2:'',
    time2:'',
    institute3:'',
    course3:'',
    time3:'',
    institute4:'',
    course4:'',
    time4:'',
    description:'',
    skills:[],
};
export const Slices = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addPicture: (state, action) => {
            state.picture = action.payload;
        },
        addName: (state, action) => {
            state.name = action.payload;
        },
        addDesignation: (state, action) => {
            state.designation = action.payload;
        },
        addEmail: (state, action) => {
            state.email = action.payload;
        },
        addNumber: (state, action) => {
            state.number = action.payload;
        },
        addLinkdin: (state, action) => {
            state.linkdin = action.payload;
        },
        addGithub: (state, action) => {
            state.github = action.payload;
        },
        addAbout: (state, action) => {
            state.about = action.payload;
        },
        addState: (state, action) => {
            state.state = action.payload;
        },
        addCountry: (state, action) => {
            state.country = action.payload;
        },
        addCity: (state, action) => {
            state.city = action.payload;
        },
        addInstitute1:(state,action)=>{
            state.institute1=action.payload;
        },
        addCourse1:(state,action)=>{
            state.course1=action.payload;
        },
        addTime1:(state,action)=>{
            state.time1=action.payload;
        },
        addInstitute2:(state,action)=>{
            state.institute2=action.payload;
        },
        addCourse2:(state,action)=>{
            state.course2=action.payload;
        },
        addTime2:(state,action)=>{
            state.time2=action.payload;
        },
        addInstitute3:(state,action)=>{
            state.institute3=action.payload;
        },
        addCourse3:(state,action)=>{
            state.course3=action.payload;
        },
        addTime3:(state,action)=>{
            state.time3=action.payload;
        },
        addInstitute4:(state,action)=>{
            state.institute4=action.payload;
        },
        addCourse4:(state,action)=>{
            state.course4=action.payload;
        },
        addTime4:(state,action)=>{
            state.time4=action.payload;
        },
        addDescription:(state,action)=>{
            state.description=action.payload;
        },
        addSkills:(state,action)=>{
            for(let i=0;i<action.payload.length;i++){
                state.skills.push(action.payload[i]);
            }
            
        }
    },
});

export const {
    addCity,
    addState,
    addCountry,
    addEmail,
    addNumber,
    addPicture,
    addName,
    addDesignation,
    addLinkdin,
    addGithub,
    addAbout,
    addCourse1,
    addCourse2,
    addCourse3,
    addCourse4,
    addInstitute1,
    addInstitute2,
    addInstitute3,
    addInstitute4,
    addTime1,
    addTime2,
    addTime3,
    addTime4,
    addDescription,
    addSkills,
} = Slices.actions;
export default Slices.reducer;
