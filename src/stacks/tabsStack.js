import React from 'react'
import { TabNavigator, StackNavigator } from "react-navigation";
import PhotosList from '../components/photosList';
import MyPhotosList from '../components/myPhotosList';
import colors from '../../theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Platform } from 'react-native';

const getStackScreen = () => Platform.OS === 'ios' ? StackNavigator({
    Main: { screen: MyPhotosList },
}) : MyPhotosList;

const TabsStack = TabNavigator({
    Main: {
        screen: getStackScreen(),
        navigationOptions: {
            tabBarLabel: 'Main',
            tabBarIcon: ({ tintColor }) => <Icon name="home" size={25} color={tintColor} />,
        }
    },
    Search: {
        screen: StackNavigator({
            Search: { screen: PhotosList },
        }),
        navigationOptions: {
            tabBarLabel: 'Search',
            tabBarIcon: ({ tintColor }) => <Icon name="search" size={20} color={tintColor} />,
        }
    },
}, {
        tabBarOptions: {
            style: {
                ...Platform.select({
                    android: {
                        backgroundColor: colors.darkBlue,
                    }
                }),
            },
        }

    });

export default TabsStack;