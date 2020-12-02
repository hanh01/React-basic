import React, { Component } from 'react'

export default class Check extends Component {
    constructor(props) {
        super(props);
        //Khởi tạo state chứa giá trị của input
        this.state = {
          email: "",
          password: ""
        };
      }

    changeInputValue(e) {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    validationForm() {
        let returnData = {
          error : false,
          msg: ''
        }
        const {email, password} = this.state
        //Kiểm tra email
        const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!re.test(email)) {
          returnData = {
            error: true,
            msg: 'Không đúng định dạng email'
          }
        }
        //Kiểm tra password
        if(password.length < 8) {
          returnData = {
            error: true,
            msg: 'Mật khẩu phải lớn hơn 8 ký tự'
          }
        }
        return returnData;
      }

      submitForm(e) {
        //Chặn các event mặc định của form
        e.preventDefault();
     
       //Gọi hàm validationForm() dùng để kiểm tra form
        const validation = this.validationForm()
     
        //Kiểm tra lỗi của input trong form và hiển thị
        if (validation.error) {
          alert(validation.msg)
        }else{
          alert('Submit form success')
        }
      }

      render() {
        return (
          <div className="container" style={{ paddingTop: "5%" }}>
            <form
              onSubmit={e => {
                this.submitForm(e);
              }}
            >
              <div className="form-group">
                <label htmlFor="text">Email:</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  onChange={e => this.changeInputValue(e)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="pwd">Password:</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter password"
                  onChange={e => this.changeInputValue(e)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>

          </div>
        );
      }
}
