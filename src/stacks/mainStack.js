import { StackNavigator } from "react-navigation";
import PhotosList from '../components/photosList';
import colors from '../../theme';

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
            backgroundColor: colors.mainColor,
        }
    }
});

export default MainStack;