import React from 'react';
import '../styles/css/informationPage.css'
export default class InformationPage extends React.Component {
    render(){
        return (
            <div className="App">
        
                <form action="http://localhost:3000/" method="post" className="App">
                <text readOnly="readonly" disabled="disable" className="txtname">لطفا اطلاعات خود را وارد نمایید</text>
                 
                <div className="box">
                    <content>نام</content>
                    <input type="textbox"/>
                </div>
                 
                <div className="box">
                    <content>نام خانوادگی</content>
                    <input type="textbox"/>
                </div>
                 
                <div className="box">
                    <content>تلفن همراه</content>
                    <input type="textbox"/>
                </div>
                 
                <div className="box">
                    <content>تلفن ثابت</content>
                    <input type="textbox"/>
                </div>
                 
                <div className="line"></div>
                 
                <div className="boxaddress">
                    <content>آدرس دقیق</content>
                    <input type="textbox"/>
                </div>
                 
                <div className="gender">
                  <div>جنسیت</div>
                  <div className="inGender">
                  <div className="man">آقا</div>
                  <div className="woman">خانم</div>
                  </div>
                </div>
                
                 
                <div className="send">
                <button type="submit">مرحله ی بعد</button>
                </div>
                </form>
            
            </div>
          );
    }
  }