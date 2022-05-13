
// // import React, { Component } from "react";
// //import Header from "./pages/component/header";
// //import Header from "./pages/component/footer";
// //import Header from "./pages/component/content";
// //Bài tập Props
// // function App() {

// //   return (
// //       <div className="container">
// //           <Content></Content> 
// //       </div>
// //   );
// // }
// //Bài tập States
// // import ColorBox from "./pages/component/ColorBox";
// // import Counter from "./pages/component/Counter";
// import One from "./pages/component/One";
// import State from "./pages/component/state"
// //import TodoFeature from "./pages/component/Todo/pages";
// // import ExamState from "./pages/component/ExamState";
// // import GetdataState from "./pages/component/GetdataSta
// // import Right from "./pages/component/content/Right/Right";
//  function App() { 
//   return (
//     <div className="App">
//       {/* <One></One>
//       <State></State> */}
//       {/* <Counter></Counter>
//       <ColorBox></ColorBox> */}
//       {/* <GetdataState></GetdataState> */}
//       {/* <ExamState></ExamState> */}
//       {/* Gọi lại folder chứa nó */}
//       </div>
//   );
// }
// export default App;
import React, { useState } from 'react';
import Data from '../../../data/AllData';
import AllData from "./data/AllData"
function App() {

    const [images, setImage] = useState(AllData)

    const allItem = () => {
        const finalData = AllData.filter((value) => {
            return value;
        })
        setImage(finalData)
    }

    const onlyPython = (categoryItem) => {
        const finalData = AllData.filter((value) => {
            return value.category == categoryItem
        })

        setImage(finalData)
    }
    const onlyOffice = (categoryItem) => {
        const finalData = AllData.filter((value) => {
            return value.category == categoryItem
        })

        setImage(finalData)
    }
    const onlyReact = (categoryItem) => {
        const finalData = AllData.filter((value) => {
            return value.category == categoryItem
        })
        setImage(finalData)
    }

    return (
        <>
            <div className="container my-3" >
                <div className="row">
                    <div className="col-3">
                        <button className='btn btn-primary' onClick={allItem}>Trang chủ</button>
                    </div>
                    <div className="col-3">
                        <button className='btn btn-primary' onClick={() => onlyPython('Thời trang nữ')}>Thời trang nữ</button>
                    </div>
                    <div className="col-3">
                        <button className='btn btn-primary' onClick={() => onlyOffice('Thời trang nam')}>Thời trang nam</button>
                    </div>
                    <div className="col-3">
                        <button className='btn btn-primary' onClick={() => onlyReact('Thời trang em bé')}>Thời trang em bé</button>
                    </div>
                </div>
            </div>



            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    {
                        Data.map((value) => {
                            return (
                                <div className="col mt-3">
                                    <img src={value.image} className='img-fluid' alt="image" />
                                    <p>{value.name}</p>
                                    <p>{value.price}</p>

                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>


    );
}

export default App;