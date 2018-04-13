import { Alert } from 'react-native';

export const findPhotoByID = (photoID, photos) => {
    const res = photos.find(photo => photo.id == photoID);
    return res ? true : false;
}

export const deletePhotoByID = (photoID, photos) =>
    photos.filter(photo => photo.id !== photoID);

export const showAlertDialog = () => {
    Alert.alert(
        'Duplicated',
        `There was an error adding this photo, It's already added`,
        [
            { text: 'OK', onPress: () => null },
        ]);
}
