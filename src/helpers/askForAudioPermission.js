import {PermissionsAndroid} from 'react-native';

export const askForAudioRecordingPermission = () =>
  new Promise(async (resolve, reject) => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      );
      resolve(granted === PermissionsAndroid.RESULTS.GRANTED);
    } catch (err) {
      reject(err);
    }
  });
