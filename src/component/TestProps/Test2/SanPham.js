import React, { Component } from "react";

class SanPham extends Component {
  render() {
    let { SP } = this.props;
    return (
        <tr>
          <td>{SP.name}</td>
          <td>{SP.qty}</td>
          <td>{SP.price}</td>
        </tr>
    );
  }
}

export default SanPham;
