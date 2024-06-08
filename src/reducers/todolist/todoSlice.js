import { createSlice } from "@reduxjs/toolkit";
import Search from "antd/es/transfer/search";
import { data } from "autoprefixer";

const initialState = {
  value: 0,
};

export const todoSlice = createSlice({
  name: "todolist",
  initialState: {
    data: [
      {
        id: "1",
        img:"https://i.pinimg.com/736x/ab/cd/88/abcd880982bc61104ec9d2036642ed95.jpg",
        title: "Title1",
        desc: "Desc1",
        status:" true"
      },
      {
        id: "2",
        img:"https://i.pinimg.com/736x/ab/cd/88/abcd880982bc61104ec9d2036642ed95.jpg",
        title: "Title2",
        desc: "Desc1",
        status: "false"
      },

      {
        id: "3",
        img:"https://i.pinimg.com/736x/ab/cd/88/abcd880982bc61104ec9d2036642ed95.jpg",
        title: "Title3",
        desc: "Desc3",
        status: "true"
      },
    ],

    data2 : [
      {
        id: "1",
        img:"https://i.pinimg.com/736x/ab/cd/88/abcd880982bc61104ec9d2036642ed95.jpg",
        title: "Title1",
        desc: "Desc1",
        status:" true"
      },
      {
        id: "2",
        img:"https://i.pinimg.com/736x/ab/cd/88/abcd880982bc61104ec9d2036642ed95.jpg",
        title: "Title2",
        desc: "Desc1",
        status: "false"
      },

      {
        id: "3",
        img:"https://i.pinimg.com/736x/ab/cd/88/abcd880982bc61104ec9d2036642ed95.jpg",
        title: "Title3",
        desc: "Desc3",
        status: "true"
      },
    ],

  },
  
  editTitle:"",
  editDesc:"",
  idx: null,

  addTitle:"",
  addDesc:"",
  addstatus:"",
  idx: null,
  search : "",
  reducers: {
   deltodo:(state,action) =>{
      state.data2 = state.data2.filter((el)=>{
         return el.id != action.payload
      })
   },
   sarche : (state , action) =>{
    state.data = state.data2.filter((elem) =>{
      return elem.title.toLowerCase().trim().includes(action.payload.toLowerCase().trim())
    })
   },


   addTodo : (state,action) =>{
    state.data2.push(action.payload)
   },

   addTitleinp : (state,action) => {
    state.addTitle = action.payload
   },

   addcheck : (state,action) => {
    state.addcheck = action.payload
   },

   addDescinp : (state,action) =>{
    state.addDesc = action.payload
   },

  //  Search:(state,action) =>{
  //   // state.search = action.payload
  //   // data2 =  data.filter((el)=>{
  //   //   if(el.title.includes( action.payload) ){
  //   //     return el
  //   //   }
  //   // })
  //  },

   editUser:(state) =>{
    state.data2.filter(el=>{
      if(el.id == state.idx){
        el.title = state.editTitle
        el.desc = state.editDesc
      }
    })
   },
   setEditObj:(state,action) =>{
    console.log(action.payload);
    state.editTitle = action.payload.title
    state.editDesc = action.payload.desc
    state.idx = action.payload.idx
   },
   setEditTitle:(state,action) =>{
    state.editTitle =action.payload
   },
   setEditDesc:(state,action) =>{
    state.editDesc =action.payload
   },

   setSearch : (state,action) => {
    state.search =action.payload
    state.data2 =state.data.filter((el)=>el.title.includes(action.payload))
   }

  },
});

   export const { deltodo, editUser, setEditObj , setEditTitle , setEditDesc,addTodo,addDescinp,addTitleinp,addcheck , setSearch } = todoSlice.actions

export default todoSlice.reducer;
