
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

    myChangeHandler = (event) => {
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
            <form name="forml" onSubmit={this.myChangeHandler}>
                <table width={670} height={177} border={0} align="center" >
                    <tbody>
                        <tr bgcolor><td colSpan={2} align="center"></td>
                            <font color size={5}><b>KẾT QUẢ HỌC TẬP</b></font>
                        </tr>
                        <tr>
                            <td width={125}><span>Điểm HK1: </span></td>
                            <td width={261}><label><input name="hk1" type="number" min="0" max="100" size={20} onChange={this.myChangeHandler}></input></label></td>
                        </tr>
                        <tr>
                            <td width={125}><span>Điểm HK2: </span></td>
                            <td width={261}><label><input name="hk2" type="number" min="0" max="100" size={20} onChange={this.myChangeHandler}></input></label></td>
                        </tr>
                        <tr>
                            <td width={125}><span>Điểm trung bình: </span></td>
                            <td width={261}><label>
                                <input name="MediumScore" type="text" readOnly value={this.state.MediumScore} size={20} onChange={this.myChangeHandler}></input></label></td>
                        </tr>
                        <tr>
                            <td width={125}><span>Kết quả: </span></td>
                            <td width={261}><label><input name="ketqua" type="text" value={this.state.KQ} size={20} onChange={this.myChangeHandler}></input></label></td>
                        </tr>
                        <tr>
                            <td width={125}><span>Xếp loại học lực: </span></td>
                            <td width={261}><label><input name="x" type="text" value={this.state.academicPower} size={20} onChange={this.myChangeHandler}></input></label></td>
                        </tr>
                        <tr>
                            <td colSpan={2} align="center"><input type="submit" defaultValue="Xem kết quả" /></td>
                        </tr>

                    </tbody>
                </table>
            </form>
        );
    }
}
export default FormVidu5;