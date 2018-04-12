import React, { Component } from 'react';
import { FlatList, View, Image, StyleSheet, Platform} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Spinner } from 'native-base';
import moment from 'moment';
import * as globalTypes from '../const';
import colors from '../../theme';
import { searchPhotos } from '../unsplash/actions';

export class MyPhotosList extends Component {

    static navigationOptions = {
        ...Platform.select({
            ios:{
                headerTitle: 'My Photos',
            }
        }),
    }

    static propTypes = {
        photos: PropTypes.array.isRequired,
        state: PropTypes.string.isRequired,
    }

    static defaultProps = {
        photos: [],
        state: '',
    }

    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem({ item }) {
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={{ uri: item.user.profile_image.medium }} />
                        <Body>
                            <Text>{item.user.name}</Text>
                            <Text note>{item.user.username}</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody>
                    <Image source={{ uri: item.urls.small }} style={styles.photo} />
                </CardItem>
                <CardItem>
                    <Left>
                        <Button transparent>
                            <Icon active name="thumbs-up" />
                            <Text>{`${item.likes} Likes`}</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Text>{moment(item.created_at).fromNow()}</Text>
                    </Right>
                </CardItem>
            </Card>
        )
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

export default connect(mapStateToProps, null)(MyPhotosList);