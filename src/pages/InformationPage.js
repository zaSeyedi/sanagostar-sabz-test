import React from 'react';
import '../styles/css/informationPage.css'

export default class InformationPage extends React.Component {
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
            fistname: this.state.name,
            LastName: this.state.LastName,
            mobile: this.state.mobile,
            phone: this.state.phone,
            address: this.state.address,
            gender: this.state.gender === true ? 'man': 'woman',
        }
        console.log(data)
        //send data to server
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