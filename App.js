import { StatusBar } from 'expo-status-bar';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialIcons } from '@expo/vector-icons';
const Stack = createNativeStackNavigator();



var nameMovie = [
  {
    linkHinhAnh: "https://upload.wikimedia.org/wikipedia/en/c/c7/Batman_Infobox.jpg",
    tieuDe: "Batman Begins (2005)"
  },
  {
    linkHinhAnh: "https://hips.hearstapps.com/hmg-prod/images/robert-pattinson-as-batman-bruce-wayne-in-the-batman-1645186686.jpeg?crop=0.505xw:0.757xh;0.385xw,0.0144xh&resize=1200:*",
    tieuDe: "Batman v Superman: Dawn of Justice (2016)"
  },
  {
    linkHinhAnh: "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg",
    tieuDe: "Batman (1989)"
  },
  {
    linkHinhAnh: "https://parade.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTkwNTgxMDk5NzY2MzU5MTY1/on-the-set-of-batman.jpg",
    tieuDe: "Batman Return (1992)"
  },
  {
    linkHinhAnh: "https://cdn.mos.cms.futurecdn.net/5vPndSdDicde7EwTyAtqjk.jpg",
    tieuDe: "Batman Forever (1995)"
  },
  {
    linkHinhAnh: "https://hips.hearstapps.com/hmg-prod/images/batman-review-1646354817.jpg?crop=0.888888888888889xw:1xh;center,top&resize=1200:*",
    tieuDe: "Batman & Robin (1997)"
  }
];
function HomeScreen({ navigation }) {
  return (
    <View className='h-[100%]'>
      <StatusBar></StatusBar>
      <View className='bg-[#F35120]  h-[100px] items-center relative'>
        <Text className='text-white font-bold text-base absolute bottom-4'>Movie Explorer</Text>
      </View>
      <ScrollView>
        {nameMovie.map((item, key) =>
          <TouchableOpacity className='h-32 flex flex-row m-2' key={key} onPress={() =>
            navigation.navigate('Detail', { item: item })
          }>
            <Image className="w-20 h-32" source={{ uri: item.linkHinhAnh }} />
            <Text className='font-bold m-3 flex-1'>{item.tieuDe}</Text>
            <View className='flex justify-center'>
              <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
            </View>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>

  );
}
function DetailScreen({ navigation, route }) {
  const { item } = route.params;
  return (
    <View className='h-[100%]'>
      <StatusBar></StatusBar>
      <View className='bg-[#F35120]  h-[100px] items-center relative'>
        <TouchableOpacity className='flex flex-row absolute left-0 bottom-3 items-center' onPress={() =>
          navigation.navigate('Home')
        }>
          <MaterialIcons name="keyboard-arrow-left" size={35} color="white" />
          <Text className='text-white'>Back</Text>
        </TouchableOpacity>
        <Text className='text-white font-bold text-base absolute bottom-4'>Movie Detail</Text>
      </View>
      <View className='mt-20 flex flex-row p-3'>
        <View>
          <Image className="w-[130px] h-56" source={{ uri: item.linkHinhAnh }} />
          <Text className='font-bold'>Meta: 44</Text>
          <Text className='font-bold'>imDB: 6.5</Text>
        </View>
        <View className='flex-1 p-2'>
          <Text className='font-bold text-lg'>{item.tieuDe}</Text>
          <Text className='border-b border-solid border-gray-500 text-xs'>Gene: Action, Adventure, Fantasy, Sci-Fi (151 min)</Text>
          <Text className='border-b py-2 border-solid border-gray-500 text-xs'>Releassed: 25 Mar 2016 [PG-13]</Text>
          <Text className='border-b py-2 border-solid border-gray-500 text-xs'>Fearing that the actions of Superman are let unchecked, Batman takes on the
            Man of Steel, While the world wrestles with what kind of a hero it really needs</Text>
          <Text className='border-b py-2 border-solid border-gray-500 text-xs'>Director: Zack Snyder</Text>
          <Text className='border-b py-2 border-solid border-gray-500 text-xs'>Writter: Chris Terrio, David S. Goyer, Bob Kane (Batman created by),
            Bill finger(Batman created by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by),
            William Moulton Marston (Character created by: Wonder Woman)</Text>
          <Text className=' py-2 border-solid border-gray-500 text-xs'>Actors: Ben affeck, Herry Cavil, Amy Adams, Jesse Eisenberg</Text>
        </View>
      </View>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
