import Toast from 'react-native-toast-message';

//  toast calling function
function showToast(type: string, message: string, text: string) {
  if (type === 'error') {
    Toast.show({
      type: type,
      text1: text,
      text2: `${message}`,
    });
  } else {
    Toast.show({
      type: type,
      text1: text,
      text2: `${message} 👋`,
    });
  }
}

const firstLetterUppercase = (value: string) => {
  const string = value?.slice(0, 1)?.toUpperCase()?.concat(value.slice(1));
  return string;
};

export {showToast, firstLetterUppercase};
