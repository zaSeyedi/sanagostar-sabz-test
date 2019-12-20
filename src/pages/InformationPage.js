import React from 'react';
import '../styles/css/informationPage.css'
import axios from 'axios'
import { withRouter  } from 'react-router-dom'

class InformationPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            LastName: '',
            mobile: '',
            phone: '',
            address: '',
            gender: true
        };
    }

    insertKarfarma() {
        let data = {
            region: 1,
            lat: 35.7717503,
            lng: 51.3365315,
            first_name: this.state.name,
            last_name: this.state.LastName,
            coordinate_mobile: this.state.mobile,
            coordinate_phone_number: this.state.phone,
            address: this.state.address,
            gender: this.state.gender === true ? 'Male' : 'Female',
        }
        let self = this
        axios({
            method: 'post',
            url: 'http://stage.achareh.ir/api/karfarmas/address',
            headers: {
                "Authorization": 'Basic ' + Buffer('09822222222:sana1234').toString('base64')
            },
            data: data
        })
            .then(function (response) {
                if (response.status === 201) {
                    self.props.history.push("/karfarma-list");
                    self.setState({
                        name: '',
                        LastName: '',
                        mobile: '',
                        phone: '',
                        address: '',
                        gender: true
                    })
                }
            })
            .catch(function (ex) {
                console.log(ex)
            })
    }

    render() {
        return (
            <div className="App">


                <text readOnly="readonly" disabled="disable" className="txtname">لطفا اطلاعات خود را وارد نمایید</text>

                <div className="box">
                    <content>نام</content>
                    <input type="textbox"
                        value={this.state.name}
                        onChange={(content) => this.setState({ name: content.target.value })} />
                </div>

                <div className="box">
                    <content>نام خانوادگی</content>
                    <input type="textbox"
                        value={this.state.LastName}
                        onChange={(content) => this.setState({ LastName: content.target.value })} />
                </div>

                <div className="box">
                    <content>تلفن همراه</content>
                    <input type="textbox"
                        value={this.state.mobile}
                        onChange={(content) => this.setState({ mobile: content.target.value })} />
                </div>

                <div className="box">
                    <content>تلفن ثابت</content>
                    <input type="textbox"
                        value={this.state.phone}
                        onChange={(content) => this.setState({ phone: content.target.value })} />
                </div>

                <div className="line"></div>

                <div className="boxaddress">
                    <content>آدرس دقیق</content>
                    <input type="textbox"
                        value={this.state.address}
                        onChange={(content) => this.setState({ address: content.target.value })} />
                </div>

                <div className="gender">
                    <div>جنسیت</div>
                    <div className="inGender">
                        <button className={this.state.gender === true ? "blue" : "white"} onClick={() => this.setState({ gender: true })}>آقا</button>
                        <button className={this.state.gender === false ? "blue" : "white"} onClick={() => this.setState({ gender: false })}>خانم</button>
                    </div>
                </div>


                <div className="send">
                    <button type="submit" onClick={() => this.insertKarfarma()}>مرحله ی بعد</button>
                </div>


            </div>
        );
    }
}

export default withRouter(InformationPage);