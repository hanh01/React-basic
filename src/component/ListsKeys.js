import React, { Component } from "react";

class ListsKeys extends Component {
    mangSP = [
        {name: 'ip1', qty: '2', price: '232.3'},
        {name: 'ip2', qty: '2', price: '232.3'},
        {name: 'ip3', qty: '2', price: '232.3'},
        {name: 'ip4', qty: '2', price: '232.3'}
    ];

    resultTable = () =>{
        return this.mangSP.map((item,index) => {
            return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.qty}</td>
                    <td>{item.price}</td>
                </tr>
            )
        })
    }

  render(){
      return(
          <div className='container'>
              <div className = 'table'>
                    <thead>
                        <tr>
                            <td>Tên sp</td>
                            <td>Số lương</td>
                            <td>Giá bán</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.resultTable()}
                    </tbody>
              </div>
          </div>
      )
  }
}
export default ListsKeys;
