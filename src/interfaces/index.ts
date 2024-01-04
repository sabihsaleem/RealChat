import {NavigationProp} from '@react-navigation/native';
import {ImageSourcePropType} from 'react-native';

export interface Props {
  navigation: NavigationProp<any>;
}

export interface StateProps {
  swipeIndex: number;
  swipeItem: Array<{
    title: string;
    header: string;
    swipeImg: ImageSourcePropType;
  }>;
}
