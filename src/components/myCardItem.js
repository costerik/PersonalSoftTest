import React from 'react';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Image } from 'react-native';
import moment from 'moment';

const MyCardItem = ({ item, styles }) => {
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

export default MyCardItem;