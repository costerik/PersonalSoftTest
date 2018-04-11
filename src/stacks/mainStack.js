import { StackNavigator } from "react-navigation";
import PhotosList from '../components/photosList';

const MainStack = StackNavigator({
    Main: {
        screen: PhotosList,
        navigationOptions:{
            title: 'Photos',
            headerTintColor: 'white',
        }
    }
},{
    navigationOptions:{
        headerStyle: {
            backgroundColor: 'blue',
        }
    }
});

export default MainStack;