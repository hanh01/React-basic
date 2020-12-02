import React, { Component } from 'react';
import SanPham from './SanPham';

class Danhsachsp extends Component {
    arrSp = [
        {name: 'sp1', price: '123', qty: '5'},
        {name: 'sp1', price: '123', qty: '5'},
        {name: 'sp1', price: '123', qty: '5'}
    ]

    renderSp = () => {
        return this.arrSp.map((item,index) => {
            return <SanPham SP = {item} key={index}></SanPham>
        })
    }
   
    render() {
        return (
            <div className = "container">
                <table className = 'table'>
                    <thead>
                        <tr>
                            <td>Tên sp</td>
                            <td>Số lượng</td>
                            <td>Giá bán</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSp()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Danhsachsp;