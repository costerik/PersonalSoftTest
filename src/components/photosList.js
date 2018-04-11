import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class PhotosList extends Component {

    static propTypes = {
        photos: PropTypes.array.isRequired,
    }

    static defaultProps = {
        photos: [],
    }

    constructor(props){
        super(props);
    }

    render() {
        console.log(this.props.photos);
        return (
            <View>
                <Text>{"Hello List"}</Text>
            </View>
        );
    }
}

const mapStateToProps = ({ unsplashReducer }) => {
    const { photos } = unsplashReducer;
    return {
        photos,
    }
}

export default connect(mapStateToProps, null)(PhotosList);