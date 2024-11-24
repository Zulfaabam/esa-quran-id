import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <ThemedView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <ThemedText style={{ fontFamily: 'Poppins_400Regular' }}>
        Test 1
      </ThemedText>
    </ThemedView>
  );
}
