import React, { Component } from "react";
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";
class App extends Component {
    id = 2;
    state = {
        information: [
            {
                id: 0,
                name: "김기현",
                phone: "010-5555-1111"
            },
            {
                id: 1,
                name: "스타벅스",
                phone: "010-1234-0000"
            }
        ]
    };

    handleCreate = data => {
        const { information } = this.state;
        this.setState({
            information: information.concat({ id: this.id++, ...data })
        });
    };

    handleRemove = id => {
        const { information } = this.state;
        this.setState({
            information: information.filter(info => info.id !== id)
        });
    };

    handleUpdate = (id, data) => {
        const { information } = this.state;
        this.setState({
            information: information.map(info =>
                info.id === id ? { ...info, ...data } : info
            )
        });
    };

    render() {
        return (
            <div>
                <PhoneForm onCreate={this.handleCreate} />
                <PhoneInfoList
                    data={this.state.information}
                    onRemove={this.handleRemove}
                    onUpdate={this.handleUpdate}
                />
            </div>
        );
    }
}

export default App;
