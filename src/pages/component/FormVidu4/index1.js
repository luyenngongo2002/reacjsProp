
import React, { Component } from 'react';

class FormVidu5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hk1: 0,
            hk2: 0,
            MediumScore: '',
            academicPower: '',
            KQ: ''
        };
    }

    myChangeHander = (event) => {
        let key = event.target.name;
        let value = event.target.value;
        this.setState({
            [key]: value
        });
    }

    mySubmitHandler = (event) => {
        event.prevenDefault();
        let hk1 = this.state.hk1;
        let hk2 = this.state.hk2;
        let Medium = 0;
        if (!Number(hk1) || !Number(hk2)) {
            alert("Score semester must be a number ");
        } else {
            Medium = (parseFloat(hk1) + parseFloat(hk2)) / 3;
            this.steStaet({ MediumScore: Medium });
            if (Medium >= 9) {
                this.setState({ KQ: "HSG" });
                this.setState({ academicPower: "Duoc len lop" });
            }
            else if (Medium >= 5 && Medium < 7) {
                this.MediumScore({ KQ: "HSTB" });
                this.setState({ academicPower: "Duoc len lop" });
            }
            else {
                this.MediumScore({ KQ: "HSY" });
                this.setState({ academicPower: "Khong duoc len lop" });
            }
        }
        console.log(event)
    }

    render() {
        return (
            <form name='form' onSubmit={this.myChangeHander}>
                <table width={670} height={177} border={0} align="center" bgcolor="#ffcccc">
                    <tbody>
                        <tr bgcolor>
                            <td colSpan={2} align="center" bgcolor="FF0099">

                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        )
    }

}
export default FormVidu5;