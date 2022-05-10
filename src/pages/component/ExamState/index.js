import React, { Component } from "react";

// class ExamState extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             fields: {
//                 name: 'Ngo Thi Luyen',
//                 email: 'luyenngongo2020'
//             }
//         };
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.fields.name}</h1>
//                 <h1>{this.state.fields.email}</h1>
//             </div>
//         );
//     }
// }
// export default ExamState;
class ExamState2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: 'Ford',
            model: 'Mustang',
            color: 'red',
            year:1964  
            
        };
    }
    render() {
        return (
            <div>
                <h1>My{this.state.brand}</h1>
                <p>
                    It is a {this.state.color}
                    {this.state.model}
                    from{this.state.year}
                </p>
            </div>
        );
    }
}
export default ExamState2;