import React from 'react';
import '../styles/css/ListPage.css'
import KarfarmaCard from '../utilities/components/KarfarmaCard'

export default class ListPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    address: 'first alley',
                    fullName: 'zahra seyedi',
                    phone: '0913',

                },
                {
                    address: 'first alley',
                    fullName: 'zahra seyed311i',
                    phone: '0913',

                },
                {
                    address: 'first alley',
                    fullName: 'zahra 31seyedi',
                    phone: '0913',

                },
                {
                    address: 'first alley',
                    fullName: 'zahra eew1seyedi',
                    phone: '0913',

                },
                {
                    address: 'first alley',
                    fullName: 'zahra se1yedi',
                    phone: '0913',

                }
            ]
        };
    }

    render() {

        return (
            <div className="App">
                <label className="lableFirst">نمایش لیست آدرس ها</label>
                <div className="border">
                    {this.state.list.map((item, index) => (
                        <KarfarmaCard
                            key={index}
                            data={item}
                        />
                    ))}
                </div>
            </div>
        );
    }
}