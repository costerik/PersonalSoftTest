import React, { Component } from 'react';
import { FlatList, View, Text, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Spinner } from 'native-base';
import * as globalTypes from '../const';
import colors from '../../theme';
import MyCardItem from './myCardItem';
import { initialLoading, deletePhoto } from '../photos/actions';

export class MyPhotosList extends Component {

    static navigationOptions = {
        ...Platform.select({
            ios: {
                headerTitle: 'My Photos',
            }
        }),
    }

    static propTypes = {
        photos: PropTypes.array.isRequired,
        state: PropTypes.string.isRequired,
        initialLoading: PropTypes.func.isRequired,
        deletePhoto: PropTypes.func.isRequired,
    }

    static defaultProps = {
        photos: [],
        state: '',
    }

    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
        this._deletePhoto = this._deletePhoto.bind(this);
    }


    async componentWillMount() {
        this.props.initialLoading();
    }


    renderItem({ item }) {
        return (
            <MyCardItem item={item} styles={styles} deletePhoto={this._deletePhoto} />
        )
    }

    async _deletePhoto(photo) {
        await this.props.deletePhoto(photo);
    }

    render() {
        return this.props.state === globalTypes.LOADING ? (
            <View style={styles.container}>
                <Spinner color={colors.mainColor} />
            </View>) :
            (<View style={{ flex: 1 }}>
                {this.props.photos.length == 0 ?
                    <View style={styles.container}>
                        <Text>{"No photos added :-("}</Text>
                    </View> :
                    <FlatList style={{ flex: 1 }}
                        data={this.props.photos}
                        renderItem={this.renderItem}
                        keyExtractor={item => item.id}
                    />}
            </View>)
    }
}

const mapStateToProps = ({ photosReducer }) => {
    const { myPhotos, reducerState } = photosReducer;
    return {
        photos: myPhotos,
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
    initialLoading,
    deletePhoto,
})(MyPhotosList);