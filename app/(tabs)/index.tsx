import { Image } from 'expo-image';
import { StyleSheet } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Lista de Feriados</ThemedText>
        {/* <HelloWave /> */}
      </ThemedView>
          <ThemedView style={styles.stepContainer}>
            <ThemedText type="subtitle">Dia do Trabalho</ThemedText>
            <ThemedText>
              {`1 de maio`}
            </ThemedText>
          </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Dia da independência</ThemedText>
        <ThemedText>
          {/* Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </ThemedText>{' '} */}
          {/* TODO: Incluir dados nessa pagina de forma dinamica */}
          {`11 de Setembro`}
        </ThemedText>
      </ThemedView>
      
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Dia de Finados</ThemedText>
        <ThemedText>
          {`1 de novembro`}
          {/* <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '} */}
          {/* <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '} */}
          {/* <ThemedText type="defaultSemiBold">app</ThemedText> to{' '} */}
          {/* <ThemedText type="defaultSemiBold">app-example</ThemedText>. */}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
