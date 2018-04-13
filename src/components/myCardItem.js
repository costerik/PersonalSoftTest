import React from 'react';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Image, View } from 'react-native';
import moment from 'moment';

const MyCardItem = (props) => {
    const { item, styles } = props;
    return (
        <Card>
            <CardItem>
                <Left>
                    <Thumbnail source={{ uri: item.user.profile_image.medium }} />
                    <Body>
                        <Text>{item.user.name}</Text>
                        <Text note>{item.user.username}</Text>
                    </Body>
                    {props.addPhoto &&
                        <View style={{ right: 0, }}>
                            <Button bordered dark small onPress={async () => await props.addPhoto(item)}>
                                <Text>{"ADD"}</Text>
                            </Button>
                        </View>}
                    {props.deletePhoto &&
                        <View style={{ right: 0, }}>
                            <Button bordered danger small onPress={async () => await props.deletePhoto(item)}>
                                <Text>{"REMOVE"}</Text>
                            </Button>
                        </View>}
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