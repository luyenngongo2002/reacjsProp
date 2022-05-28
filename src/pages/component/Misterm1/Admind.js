import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [],
            id: '',
            image: '',
            title: '',
            description:''
        }
        this.onDelete = this.onDelete.bind(this);
        this.onChange = this.onChange.bind(this);
        this.showEditProduct = this.showEditProduct.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            axios({
                method: 'GET',
                url: `https://61bc10bcd8542f0017824518.mockapi.io/product/${id}`,
                data: null
            }).then(res => {
                var data = res.data;
                this.setState({
                    id: data.id,
                    image: data.image,
                    title: data.title,
                    description: data.description,
                });
            }).catch(err => {
            });
        }
        axios.get('https://61bc10bcd8542f0017824518.mockapi.io/product').then(res => {
            this.setState({ product: res.data });
        })
        if (this.state.id == '') {
            document.getElementById('image-edit').style.display = 'none';
        } else {
            document.getElementById('image-edit').style.display = 'block';
        }
    }
    getProduct = (id) => {
        for (var i = 0; i < this.state.product.length; i++) {
            if (this.state.product[i].id === id) {
                return this.state.product[i];
            }
        }
        return null;
    }
    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }
    onChangeImage = (event) => {
        this.setState({
            [event.target.name]: "images/" + event.target.files[0].name,
        });
        console.log(event.target.files[0].image);
    }
    showEditProduct = (id) => {
        var product = this.getProduct(id);
        this.setState({
            id: product.id,
            image: product.image,
            title: product.title,
            description: product.description,
        });
        document.getElementById('image-edit').style.display = 'block';
        alert(id);
    }
    getIndexProduct = (id) => {
        for (var i = 0; i < this.state.product.length; i++) {
            if (this.state.product[i].id === id) {
                return i;
            }
        }
        return -1;
    }
    onSave = (event) => {
        event.preventDefault();
        if (this.state.id == '') {
            if (this.state.image !== '' && this.state.title !== '' && this.state.description !== '') {
                axios({
                    method: 'POST',
                    url: `https://61bc10bcd8542f0017824518.mockapi.io/product`,
                    data: {

                        image: this.state.image,
                        title: this.state.title,
                        description: this.state.description,
                    }

                }).then(() => {
                    // this.componentDidMount();
                    alert("Successfully");
                })
            } else {
                alert("Empty something");
            }
        } else {
            axios({
                method: 'PUT',
                url: `https://61bc10bcd8542f0017824518.mockapi.io/product/${this.state.id}`,
                data: {
                    image: this.state.image,
                    title: this.state.title,
                    description: this.state.description,
                    
                }

            }).then(res => {
                // this.componentDidMount();
                alert("Successfully");
            })
        }
        this.setState({
            id: '',
            image: '',
            title: '',
            description: '',
        });
    }
    onDelete = (id) => {
        console.log(id);
        axios({
            method: 'DELETE',
            url: `https://61bc10bcd8542f0017824518.mockapi.io/product/${id}`,
            data: null
        }).then(res => {
            if (res.status === 200) {
                var index = this.getIndexProduct(id);
                if (index !== -1) {
                    var product = this.state.product;
                    product.splice(index, 1);
                }
                this.setState({
                    product: product
                });
                alert(id);
                toast.success("Xóa sản phẩm thành công", {
                })

            }
        });
    }
    // show
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <h1> Insert News</h1> 
                        <form onSubmit={this.onSave}>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Tiêu đề</label>
                                <input
                                    type="text"
                                    name="title"
                                    onChange={this.onChange}
                                    defaultvalue={this.state.title}
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail2">Mô tả</label>
                                <input
                                    type="text"
                                    name="description"
                                    onChange={this.onChange}
                                    defaultvalue={this.state.title}
                                    className="form-control"
                                    id="exampleInputEmail2"
                                    aria-describedby="emailHelp"
                                   
                                />
                            </div>
                            <div className="form-group">
                                <label>Ảnh</label>
                                <input
                                    type="file"
                                    name="image"
                                    onChange={this.onChangeImage}
                                    className="form-control"
                                    
                                />
                            </div>
                            <div className="form-group" id="image-edit" style={{ display: "none" }}>
                                <label>Image</label>
                                <img src={this.state.image} style={{ width: "100px" }} />
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">
                                Submit
                            </button>
                        </form>

                    </div>
                    <div className="col-8">
                        <div className="row">
                            <h1>News</h1>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.product.map((product) => (

                                            <tr>
                                                <th scope="col">{product.id}</th>
                                                <td >
                                                    {product.title}
                                                </td>
                                                <td >
                                                    <img style={{ width: "100px" }} className="card-img-top" src={product.image} alt="Card image cap" />
                                                </td>
                                                
                                                <td >
                                                    {product.description}
                                                </td>
                                                <td >
                                                    <button className="btn btn-primary" onClick={() => this.showEditProduct(product.id)}>
                                                        Edit
                                                    </button>
                                                    <button className="btn btn-danger" onClick={() => this.onDelete(product.id)}>
                                                        delete
                                                    </button>
                                                </td>
                                            </tr>

                                        ))
                                    }
                                </tbody>

                            </table>


                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default List;

