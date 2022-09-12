import { View, Text } from 'react-native';
import {useTailwind} from 'tailwind-rn';

export default function Content() {
  const tailwind = useTailwind();
    return (
      <View>
          <Text style={tailwind('text-blue-600')}>Hello world</Text>
      </View>
    );
  }