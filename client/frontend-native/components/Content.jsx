import { View, Text } from 'react-native';
import {useTailwind} from 'tailwind-rn';

export default function Content() {
  const tailwind = useTailwind();
  
    return (
      <View>
          <Text style={tailwind('text-green-600 text-xl mt-16 ml-auto text-center')}>Hello world</Text>
      </View>
    );
  }