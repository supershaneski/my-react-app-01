import React from 'react'
class Clock extends React.Component {
    constructor(props) {
        super(props);
        // initialize variables
        this.state = {
            datetime: new Date(),
        };
        this.timer = null;
    }
    componentDidMount() {
        // after component is mounted, start timer
        this.timer = setInterval(() => {
            // update state variable using setState
            this.setState({
                datetime: new Date()
            })
        })
    }
    componentWillUnmount() {
        // destroy timer before exit
        clearInterval(this.timer)
    }
    render() {
        // pass props value to variable so that we can set default
        // if props is not set
        const txtColor = this.props.txtColor || "#000000";
        return (
            <React.Fragment>
                <span style={{ color: txtColor }}>
                { this.state.datetime.toLocaleString() }
                </span>
            </React.Fragment>
        )
    }
}

export default Clock;