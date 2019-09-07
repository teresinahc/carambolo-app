import React from 'react';
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

const cardStyles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    borderTopColor: '#e9e9e9',
    borderTopWidth: 1,
    alignItems: 'center',
  },
  date: {fontSize: 17},
  description: {width: 280},
  image: {width: 50, height: 50, margin: 10},
});

const addButtonStyles = StyleSheet.create({
  wrapper: {padding: 20},
  text: {fontSize: 20},
});

const Card = ({feeling, date, description}) => (
  <View style={cardStyles.wrapper}>
    <View>
      <Image
        style={cardStyles.image}
        source={{
          uri:
            'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/apple/198/smiling-face-with-smiling-eyes_1f60a.png',
        }}
      />
    </View>
    <View style={cardStyles.details}>
      <Text style={cardStyles.date}>{date}</Text>
      <Text style={cardStyles.description} numberOfLines={1}>
        {description}
      </Text>
    </View>
  </View>
);

const AddButton = () => (
  <TouchableOpacity style={addButtonStyles.wrapper}>
    <View>
      <Text style={addButtonStyles.text}>➕Novo registro</Text>
    </View>
  </TouchableOpacity>
);

const Home = () => (
  <View>
    <AddButton />
    <View>
      <Card
        felling={1}
        date="07 set 2019"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing"
      />
      <Card
        felling={1}
        date="07 set 2019"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing"
      />
      <Card
        felling={1}
        date="07 set 2019"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing"
      />
      <Card
        felling={1}
        date="07 set 2019"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing"
      />
    </View>
  </View>
);

export default Home;
