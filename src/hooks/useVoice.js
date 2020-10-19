import {useEffect, useState} from 'react';
import Voice from '@react-native-community/voice';
import {askForAudioRecordingPermission} from '../helpers/askForAudioPermission';

export function useVoice() {
  const [isAudioAvailable, setAudioAvailable] = useState(false),
    [isListening, setIsListening] = useState(false);
  useEffect(() => {
    askForAudioRecordingPermission()
      .then((res) => setAudioAvailable(res))
      .catch((err) => console.warn(err));
  }, []);

  useEffect(() => {
    Voice.onSpeechResults((e) => {
      console.log(e.value);
    });
  }, []);

  const startListening = () => {
    Voice.start('en-us')
      .then(() => setIsListening(true))
      .catch((err) => console.warn(err));
  };

  const stopListening = () => {
    Voice.stop()
      .then(() => setIsListening(false))
      .catch((err) => console.warn(err));
  };

  return [isAudioAvailable, isListening, startListening, stopListening];
}
