import React from "react";

class FormVidu6 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          price : 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form>
                <table >
                    <tr id="title">
                        <td colspan="2">HÃY CHỌN MÓN</td>
                    </tr>
                    <tr>
                        <td>Nhập số tiền bạn có: </td>
                        <td>
                            <input type="text" name="money" id="money"  />
                        </td>
                    </tr>
                    <tr>
                        <td>Chọn loại đồ uống: </td>
                        <td>
                            <select name="drink" id="drink" >
                                <option value="10000">Cà phê đá : 10000</option>
                                <option value="12000">Cà phê sữa: 12000</option>
                                <option value="8000">Bạc xỉu: 8000</option>
                                <option value="5000">Trà đá: 5000</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>Thông báo: </td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td>Tiền còn lại: </td>
                        <td><input type="text" /></td>
                    </tr>
                    <tr>
                        <td colspan="2"><input type="submit"/></td>
                    </tr>
                </table>
            </form>

        );
    }
}
export default FormVidu6;