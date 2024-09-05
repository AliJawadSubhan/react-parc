import { SafeAreaView,StyleSheet,TextInput,View } from "react-native"



function LoginScreen () {
    return <SafeAreaView>
        <View style={styles.backgroundContainer}>            
         <TextInput style = {styles.input}>

         </TextInput>
        </View>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    backgroundContainer: {
        height: "100%",
        width: "100%",
        backgroundColor: "#ADD8E6",
        alignItems: 'center',
        justifyContent: 'center',          
    },
  });
  
export default LoginScreen;