
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { useScannerProduct } from '@/context/ScannerProvider';
import { Ionicons } from '@expo/vector-icons';
import { CameraView, CameraType, useCameraPermissions, CameraCapturedPicture } from 'expo-camera';
import { router } from 'expo-router';
import LottieView from 'lottie-react-native';
import { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View ,Image, TextInput, ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function Scanner() {
  const [photo, setPhoto] = useState<CameraCapturedPicture|null>();
  const [permission, requestPermission] = useCameraPermissions();
  const [userChoice, setUserChoice] = useState<string | null>("choice");
  const [customPrompt, setCustomPrompt] = useState<string>("");
  const [resultModal, setResultModal] = useState<boolean>(false);

  const { setScannerProduct } = useScannerProduct();

  const cameraRef = useRef<any>(null);
  useEffect(()=>{
    requestPermission()
  },[])

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <SafeAreaView style={[styles.container,{backgroundColor:Colors.background,padding:10}]}>

        <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
        <View style={{
          position: "absolute",
          alignSelf: "center",
          padding:20,
          top: 0,
          width: "100%",
          height: "auto",
          backgroundColor: Colors.background,
        }}>
            <Text style={{letterSpacing:1,fontFamily:'brolimo',color:Colors.text,fontSize:28,lineHeight:30,textAlign:"center"}}>Outfitr Vision</Text>
          </View>
          <View style={{marginBottom:20}}>
            <ThemedText type="header" style={styles.message}>Snap any clothing and find the product</ThemedText>
          </View>
          <ThemedText type="subtitle" style={styles.message}>We need your permission to access the camera</ThemedText>
          <TouchableOpacity style={{backgroundColor:Colors.text,paddingVertical:10, paddingHorizontal:20,borderRadius:25}} onPress={requestPermission} ><ThemedText type="default" style={{color:Colors.background}}>Grant Permission</ThemedText></TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo); // Do something with the photo
      console.log(photo)
    }
  };


  // const bottomSheetRef = useRef<any>(null); // Create a ref for the BottomSheet

  // const openBottomSheet = () => {
  //   bottomSheetRef.current?.snapTo(1); // Open to the second snap point
  // };

  // const closeBottomSheet = () => {
  //   bottomSheetRef.current?.snapTo(0); // Close to the first snap point
  // };


  function handleResultsExact (){
    console.log('hi')
    console.log('hi')
    setScannerProduct(photo?.uri)
    console.log('hi')
    
    router.push('/(scanner)/exact')
    setUserChoice("choice")
  }

  function handleResultsCustom (){
    console.log('hi')
    console.log('hi')
    setScannerProduct(photo?.uri)
    console.log('hi')
    
    router.push('/(scanner)/custom')
    setUserChoice("choice")
    
  }


  return (
    <SafeAreaView style={styles.container}>
      {/* <ScannerSheet ref={bottomSheetRef} /> */}

      {
        photo?
        <ScrollView style={{flex:1,backgroundColor:Colors.background}}>
            
            <View style={{
              // position: "absolute",
              alignSelf: "center",
              padding:20,
              top: 0,
              width: "100%",
              height: "auto",
              backgroundColor: Colors.background,
            }}>
              <Text style={{letterSpacing:1,fontFamily:'brolimo',color:Colors.text,fontSize:28,lineHeight:30,textAlign:"center"}}>Outfitr Vision</Text>
              <ThemedText type="subtitle" style={{textAlign:'center'}}>Snap any clothing and find the product</ThemedText>
            </View>
            <View style={{flexDirection:"row",justifyContent:"center",marginVertical:20}}>
              {(userChoice=="exact" || userChoice=="custom2") && <View style={{position:"absolute",top:0,left:0,flexDirection:"row",justifyContent:"center",width:"100%",zIndex:999}}>
              <LottieView
                autoPlay
                style={{
                  width: 300,
                  height: 300,
                }}
                source={require('@/assets/animations/scanner.json')}
              />
              </View>}
              <Image source={{uri:photo.uri}} style={{width:300,height:300,borderRadius:20,zIndex:-1}}/>
            </View>
            {userChoice=="exact" && <ThemedText type="header" style={{marginVertical:10,textAlign:"center"}}>Finding exact products..</ThemedText>}
            {userChoice=="custom2" && <ThemedText type="header" style={{marginVertical:10,textAlign:"center"}}>Finding perfect matches..</ThemedText>}
            {userChoice=="custom" && <ThemedText type="header" style={{marginTop:40,textAlign:"center"}}>Enter a prompt</ThemedText>}

            {(userChoice=="exact" || userChoice=="custom2") && 
            <View style={{flexDirection:"row",justifyContent:"center",marginVertical:10,marginHorizontal:20,gap:20}}>
                 <LottieView
                  autoPlay
                  style={{
                    width: 300,
                    height: 300,
                  }}
                  source={require('@/assets/animations/loader.json')}
                />
            </View>
            }

            {userChoice==="choice" && <ThemedText type="header" style={{marginVertical:10,textAlign:"center"}}>Make a choice</ThemedText>}

            {userChoice==="choice" && 

            <View style={{flexDirection:"row",justifyContent:"center",marginVertical:10,marginHorizontal:20,gap:20}}>
              <TouchableOpacity onPress={()=>{setUserChoice('exact'); setTimeout(handleResultsExact,3000)}} style={[styles.choiceBtn]}>
                <Text style={styles.text}>Exact Match</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>{setUserChoice('custom');}} style={styles.choiceBtn}>
                <Text style={styles.text}>Custom Match</Text>
              </TouchableOpacity>
            </View>

            }
            {
              userChoice ==="custom" &&
              <View style={{justifyContent:"center",marginTop:25,marginHorizontal:20,gap:20}}>
                <TextInput
                  style={styles.customInput}
                  value={customPrompt}
                  onChangeText={setCustomPrompt}
                  placeholder='Find it in orange or red'
                />
                <TouchableOpacity onPress={()=>{setUserChoice('custom2');setTimeout(handleResultsCustom,3000)}} style={styles.customInputBtn}>
                  <Text style={styles.text}>Custom Match</Text>
                </TouchableOpacity>
              </View>
            }
            {
              userChoice ==="choice" &&
              <View style={{justifyContent:"center",marginTop:25,marginHorizontal:20,gap:20}}>
                <TouchableOpacity onPress={()=>{setPhoto(null)}} style={styles.resetBtn}>
                  <Text style={[styles.text,{color:Colors.background}]}>Retake Image</Text>
                </TouchableOpacity>
              </View>
            }
        </ScrollView>
        :
        <CameraView ref={cameraRef} style={styles.camera} facing={"back"}>
        <View style={{
            position: "absolute",
            alignSelf: "center",
            padding:20,
            top: 0,
            width: "100%",
            height: "auto",
            backgroundColor: Colors.background,
          }}>
              <Text style={{letterSpacing:1,fontFamily:'brolimo',color:Colors.text,fontSize:28,lineHeight:30,textAlign:"center"}}>Outfitr Vision</Text>
              <ThemedText type="subtitle" style={{textAlign:'center'}}>Snap any clothing and find the product</ThemedText>
            </View>
      
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
              <Ionicons
                style={{alignSelf:'center'}}
                name={"camera"}
                size={40}
                color={Colors.background}
              />
          </TouchableOpacity>
        </View>
      </CameraView>
      }
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {

    // borderWidth:2,
    // borderColor:"#00ff00",
    flex: 1,
    justifyContent:"center",
    flexDirection: 'row',
    backgroundColor: 'transparent',
    marginBottom:20
  },
  button: {
    backgroundColor:Colors.text,
    width:80,
    height:80,
    borderRadius:40,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent:"center"
  },
  text: {
    textAlign:"center",
    fontSize: 20,
    color: Colors.text,
    fontFamily:'productSans'
  },
  choiceBtn:{
    paddingVertical:50,
    borderRadius:20,
    backgroundColor:Colors.background,
    borderWidth:1,
    borderColor:Colors.text,
    flex:1
  },
  customInput:{
    backgroundColor:Colors.text,
    fontFamily:'productSans',
    // marginHorizontal: 20,
    fontSize: 20,
    borderRadius: 15,
    paddingHorizontal:10,
    paddingVertical:10,
    color: Colors.background,

  },
  customInputBtn:{
    borderRadius:20,
    paddingHorizontal:10,
    paddingVertical:10,
    backgroundColor:Colors.background,
    borderWidth:1,
    borderColor:Colors.text,
    marginTop:25
  },
  resetBtn:{
    borderRadius:50,
    paddingHorizontal:10,
    paddingVertical:10,
    backgroundColor:Colors.text,
    borderWidth:1,
    borderColor:Colors.background,
    marginTop:25
  }
});
