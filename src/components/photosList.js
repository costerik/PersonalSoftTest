import React, { Component } from 'react';
import { FlatList, View, Image, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Spinner } from 'native-base';
import moment from 'moment';
import * as globalTypes from '../const';
import colors from '../../theme';

export class PhotosList extends Component {

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
                    <Image source={{ uri: item.urls.small }} style={{ height: 200, width: null, flex: 1 }} />
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
                <Spinner color={colors.mainColor}/>
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
        flex: 1,
        height: 400,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default connect(mapStateToProps, null)(PhotosList);