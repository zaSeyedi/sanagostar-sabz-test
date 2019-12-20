import React from 'react';


export default class KarfarmaCard extends React.Component {


    render() {
        return (
            <div className="info">
                <label className="lable">آدرس</label>
                <div className="FirstRow">{this.props.data.address}
                </div>
                <div className="SeRow">
                    <div className="SecondRow">
                        <label className="lable2">نام و نام خانوادگی</label>
                        <div className="name">{this.props.data.fullName}</div>

                    </div>
                    <div className="SecondRow">
                        <label className="lable2">تلفن</label>
                        <div className="phone">{this.props.data.phone}</div>
                    </div>
                </div>
            </div>
        );
    }
}