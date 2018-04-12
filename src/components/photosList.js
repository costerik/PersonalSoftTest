import React, { Component } from 'react';
import { FlatList, View, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spinner } from 'native-base';
import * as globalTypes from '../const';
import colors from '../../theme';
import SearchBar from './searchBar';
import MyCardItem from './myCardItem';
import { addPhoto } from '../photos/actions';

export class PhotosList extends Component {

    static navigationOptions = {
        header: <SearchBar />
    }

    static propTypes = {
        photos: PropTypes.array.isRequired,
        state: PropTypes.string.isRequired,
        addPhoto: PropTypes.func.isRequired,
    }

    static defaultProps = {
        photos: [],
        state: '',
    }

    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
        this._addPhoto=this._addPhoto.bind(this);
    }

    renderItem({ item }) {
        return (
            <MyCardItem item={item} styles={styles} addPhoto={this._addPhoto} />
        )
    }

    async _addPhoto(photo){
        await this.props.addPhoto(photo);
    }

    render() {
        return this.props.state === globalTypes.LOADING ? (
            <View style={styles.container}>
                <Spinner color={colors.mainColor} />
            </View>) :
            (
                <FlatList style={{ flex: 1 }}
                    data={this.props.photos}
                    renderItem={this.renderItem}
                    keyExtractor={item => item.id}
                />
            );
    }
}

const mapStateToProps = ({ unsplashReducer }) => {
    const { photos, reducerState } = unsplashReducer;
    return {
        photos,
        state: reducerState,
    }
}

const styles = StyleSheet.create({
    photo: {
        height: 400,
        width: null,
        flex: 1,
        resizeMode: 'stretch',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default connect(mapStateToProps, {
    addPhoto,
})(PhotosList);