// import { useState } from "react";
// import Switcher from "./Components/Switcher";
// import { useTranslation } from "react-i18next";
// import Layout from "./Layout/Layout";
// import Home from "./pages/Home/Home";
// import Pakupat from "./pages/pakupat/Pakupat";
// import Price from './pages/prices/Prices'
// import Raspradaj from "./pages/raspradaj/Raspradaj";
// import Help from "./pages/Help/Help";
// import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, addTitleinp,addDescinp, addcheck, deltodo, editUser, setEditDesc, setEditObj, setEditTitle, setSearch } from "./reducers/todolist/todoSlice";
import { Backdrop, Box, Fade, FormControl, Input, InputLabel, MenuItem, Modal, Select, TextField, styled } from "@mui/material";
import { useState } from "react";


const App = () => {
  // let [age, setAge] = useState(localStorage.getItem('i18nextLng'));
  // let { t, i18n } = useTranslation();

  // console.log(age);
  // function handleClick(event) {
  //   setAge(event.target.value)
  //   i18n.changeLanguage(event.target.value)
  // }

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout/>,
  //     children: [
  //       {
  //         index: true,
  //         element: <Home/>,
  //       },
  //       {
  //         path: "/pakupat",
  //         element: <Pakupat/>,
  //       },
  //       {
  //         path: "/prices",
  //         element: <Price/>,
  //       },
  //       {
  //         path: "/raspradaj",
  //         element: <Raspradaj/>,
  //       },
  //       {
  //         path: "/help",
  //         element: <Help/>,
  //       },
  //     ],
  //   },
  // ]);

  const [opens, setOpens] = useState(false);
  const handleOpens = () => setOpens(true);
  const handleCloses = () => setOpens(false);

const search = useSelector(state => state.todoSlice.search)
  const[select , setSelect] = useState("")
const handleChanges = (event) =>{
  setSelect(event.target.value)
}


  const data = useSelector((state) => state.todoSlice.data);
  const data2 = useSelector((state) => state.todoSlice.data2);
  
  const editTitle = useSelector((state) => state.todoSlice.editTitle);
  const editDesc = useSelector((state) => state.todoSlice.editDesc);

  const addTitle = useSelector((state)=>state.todoSlice.addTitle)
  const addDesc = useSelector((state)=>state.todoSlice.addDesc)
  const addcheck = useSelector((state)=>state.todoSlice.addstatus)

  const Adduser = () =>{
    dispatch(addTodo({
      id:Date.now().toLocaleString(),
      title:addTitle,
      desc:addDesc,
      status:addcheck,
    }))
  }

  const dispatch = useDispatch()



  return (
    <div>
      {/* <RouterProvider router={router} /> */}

   <div className="flex flex-wrap  justify-around">
   <div className="flex flex-wrap justify-around items-center w-[50%] mb-[50px]">
    <input className="w-[200px] p-[10px] h-[50px] border-[1px] border-[black] rounded-xl mr-[20px] ml-[20px]" onChange={(e)=>dispatch(addTitleinp(e.target.value))}></input>
    <input className="w-[200px] p-[10px] h-[50px] border-[1px] border-[black] rounded-xl" onChange={(e)=>dispatch(addDescinp(e.target.value))}></input>

      <Button onClick={()=>Adduser()}>Add</Button>

    </div>
      <TextField value={search} onChange={(el) => dispatch( setSearch(el.target.value))} size="small" sx={{width:"30%"}} label="Search"/>

   </div>
      <div className="flex flex-wrap  justify-around items-center ">
        {data2.map((el) => {
         return(
          <div className="border-[1px] border-[black] rounded-3xl w-[300px] h-[550px] p-[20px] ">
             <h1>{el.id}</h1>
             <img src={el.img} alt="" />
            <h1>{el.title}</h1>
            <h1>{el.desc}</h1>
            <h1>{el.date}</h1>  
            <h1>{el.status}</h1>  
             

            <Button onClick={()=> dispatch(deltodo(el.id))}>Delete</Button>
            <Button variant="contained" onClick={()=> {handleOpens(), dispatch(setEditObj({idx:el.id ,title:el.title , desc:el.desc}))} }>EDIT</Button> 
          </div>
         )
        })
        // .filter(el=>{
        //   return el.status.toString().includes(select)
        // })
        }
       
     

       


        
         <Modal
            sx={{backdropFilter:"blur(10px)"}}
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={opens}
        onClose={handleCloses}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        
      >
        <Fade in={opens}>
          <Box sx={styled} className="flex flex-col gap-5 rounded-xl">
              {/* <TextField value={img} onChange={(el) => setImg(el.target.value)} size="small" sx={{width:"100%"}} label="Title"/> */}
              <TextField value={editTitle} onChange={(el) => dispatch(setEditTitle(el.target.value))} size="small" sx={{width:"100%"}} label="Title"/>
              <TextField value={editDesc} onChange={(el) => dispatch(setEditDesc(el.target.value))} size="small" sx={{width:"100%"}} label="Email"/>
              <Button variant="contained" onClick={()=> {dispatch(editUser()) , handleCloses()}}>Save</Button>
          </Box>
        </Fade>
    </Modal>
    

      </div>
    </div>
  );
};

export default App;
