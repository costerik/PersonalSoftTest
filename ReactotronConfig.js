import Reactotron, {
    trackGlobalErrors,
    openInEditor,
    networking,
} from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

Reactotron.configure()
    .useReactNative()
    .use(reactotronRedux())
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(networking());

if (__DEV__) {
    Reactotron.connect();
    Reactotron.clear();
    debug = (title, data = {}) =>
        Reactotron.display({
            name: title,
            value: data,
            preview: JSON.stringify(data).substr(0, 50),
        });
}