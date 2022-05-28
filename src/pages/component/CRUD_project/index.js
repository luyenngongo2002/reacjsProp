import 'bootstrap/dist/css/bootstrap.css';
import React, { Component } from 'react';
import products_data from '../../../data/data';

class Crud extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            name: "",
            image: "",
            detail: "",
            action: "add",
            products: products_data() //link toi ten data minh tao

        }
        this.changeName = this.changeName.bind(this);
        this.changeImage = this.changeImage.bind(this);
        this.changeDetail = this.changeDetail.bind(this);
    }
    changeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }
    changeImage = (e) => {
        this.setState({
            image: e.target.value
        })
    }
    changeDetail = (e) => {
        this.setState({
            detail: e.target.value
        })
    }

    addProduct = () => {
        if (!this.state.products.find(product => product.id === this.state.id)) {
            this.setState({
                products: [
                    ...this.state.products,
                    {
                        id: this.state.products.length + 1,
                        name: this.state.name,
                        image: this.state.image,
                        detail: this.state.detail
                    }
                ],
            })
        }
        this.resetInput();

    }
    editProduct = (id) => {
        var product = this.state.products.find(product => product.id === id)
        this.setState({
            action: 'edit',
            name: product.name,
            image: product.image,
            detail: product.detail,
            id
        })
    }
    updateProduct = () => {
        let data = this.state.products;
        data[this.state.id] = {
            name: this.state.name,
            image: this.state.image,
            detail: this.state.detail
        }

        this.setState({ products: data })
        this.resetInput();
    }
    deleteProduct = (id) => this.setState({
        products: this.state.products.filter(product => product.id != id)
    })


    resetInput() {
        this.setState({
            name: "",
            image: "",
            detail: "",
            action: 'add'
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1>{this.state.action}</h1>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" name="" className="form-control" onChange={this.changeName} value={this.state.name} />
                        </div>
                        <div className="form-group">
                            <label>Image</label>
                            <input type="file" name="" className="form-control" onChange={this.changeImage} value={this.state.image} />

                        </div>
                        <div className="form-group">
                            <label>Detail</label>
                            <input type="text" name="" className="form-control" onChange={this.changeDetail} value={this.state.detail} />
                        </div>
                        <div className="form-group mt-3">
                            <button type="button" className="btn btn-primary" onClick={() => this.state.action == "add" ? this.addProduct() : this.updateProduct()}>{this.state.action}</button>
                        </div>
                    </div>

                    <div className="col-md-8">
                        <h1>List Products</h1>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>SDT</th>
                                    <th>Name</th>
                                    <th>Image</th>
                                    <th>Detail</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map((product, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{product.name}</td>
                                            <td ><img width={100} src={"./" + product.image} /></td>
                                            <td>{product.detail}</td>
                                            <td><label className="btn btn-primary" onClick={() => this.editProduct(product.id)}>Edit</label></td>
                                            <td><label className="btn btn-primary" onClick={() => this.deleteProduct(product.id)}>Delete</label></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        );
    }
}

export default Crud;