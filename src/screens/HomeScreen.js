import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { getComments } from "../actions/comments";

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        this.props.getComments().then(() =>
            this.setState({
                loading: false
            })
        );
    }

    render() {
        return (
            <div>
                {this.state.loading ? (
                    <p>Loading screen....</p>
                ) : (
                    <div>
                        {this.props.comments.commentList.map(comment => (
                            <p key={comment.id}>{comment.body}</p>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    comments: state.comments
});

const mapDispatchToProps = {
    getComments
};

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(HomeScreen)
);
