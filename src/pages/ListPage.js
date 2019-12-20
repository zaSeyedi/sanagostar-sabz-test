import React from 'react'
import '../styles/css/ListPage.css'
import KarfarmaCard from '../utilities/components/KarfarmaCard'
import axios from 'axios'

export default class ListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }
    //"Authorization": 'Basic MDk4MjIyMjIyMjI6c2FuYTEyMzQ='

    UNSAFE_componentWillMount() {
        let self = this
        axios({
            method: 'get',
            url: 'http://stage.achareh.ir/api/karfarmas/address',
            headers: {
                "Authorization": 'Basic ' + Buffer('09822222222:sana1234').toString('base64')
            }
        })
            .then(function (response) {
                self.setState({ list: response.data })
            })
            .catch(function (ex) {
                console.log(ex)
            })
    }

    render() {

        return (
            <div className="App">
                <label className="lableFirst">{this.state.list.length> 0  ? 'نمایش لیست کارفرما ها' : '...در حال بارگذاری'}</label>
                {this.state.list.length> 0 && <div className="border">
                    {this.state.list.reverse().map((item, index) => (
                        <KarfarmaCard
                            key={index}
                            data={item}
                        />
                    ))}
                </div>}
            </div>
        );
    }
}