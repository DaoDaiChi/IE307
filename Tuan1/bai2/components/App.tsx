import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, SectionList, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';

const App = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const workouts = [
    { id: '1', title: 'Push-ups' },
    { id: '2', title: 'Squats' },
    { id: '3', title: 'Planks' },
    { id: '4', title: 'Groiner' },
    { id: '5', title: 'Dumbbell rows' },
    { id: '6', title: 'Burpees' },
    { id: '7', title: 'Standing Long Jump' },
    { id: '8', title: 'Lunges' },
  ];

  const fruitsAndVegetables = [
    {
      title: 'Fruits',
      data: ['Banana', 'Orange', 'Grapes', 'Apple', 'Pineapple', 'Watermelon', 'Mango', 'Strawberry'],
      background: { uri: 'https://th.bing.com/th/id/OIP.7LVTM5dKKZmS6Kya8XY3UgHaLO?rs=1&pid=ImgDetMain' }, // URI ảnh cho Fruits
    },
    {
      title: 'Vegetables',
      data: ['Carrot', 'Broccoli', 'Spinach', 'Beets & Beet Greens'],
      background: { uri: 'https://th.bing.com/th/id/OIP.7LVTM5dKKZmS6Kya8XY3UgHaLO?rs=1&pid=ImgDetMain' }, // URI ảnh cho Vegetables
    },
  ];

  const handleSelect = (item: string) => {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item)) {
        return prevSelectedItems.filter((i) => i !== item);
      } else {
        return [...prevSelectedItems, item];
      }
    });
  };

  const renderWorkoutItem = useCallback(({ item }: { item: { id: string; title: string } }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.title}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSelect(item.title)}
      >
        <Text style={styles.buttonText}>
          {selectedItems.includes(item.title) ? 'DESELECT' : 'SELECT'}
        </Text>
      </TouchableOpacity>
    </View>
  ), [selectedItems]);

  const renderSectionItem = useCallback(({ item }: { item: string }, section: { background: { uri: string } }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => handleSelect(item)}
      >
        <Text style={styles.buttonText}>
          {selectedItems.includes(item) ? 'DESELECT' : 'SELECT'}
        </Text>
      </TouchableOpacity>
    </View>
  ), [selectedItems]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>FlatList - Workouts</Text>
      <FlatList
        data={workouts}
        renderItem={renderWorkoutItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />

      <Text style={styles.header}>SectionList - Fruits & Vegetables</Text>
      <SectionList
        sections={fruitsAndVegetables}
        renderItem={({ item, section }) => renderSectionItem({ item }, section)}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text> // Sử dụng style sectionHeader
        )}
        keyExtractor={(item, index) => item + index}
        style={styles.list}
      />

      <Text style={styles.selectedHeader}>SELECTED ITEMS:</Text>
      <Text style={styles.selectedItemsContainer}>
        {selectedItems.join(', ')}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  backgroundImage: {
    width: '100%',
    resizeMode: 'cover',
    marginBottom: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#003366', // Màu xanh dương đậm
    textAlign: 'center',
    marginVertical: 10,
  },
  list: {
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Lớp phủ trắng mờ để chữ dễ đọc
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366', // Màu xanh dương đậm
    backgroundColor: 'transparent',  // Không có nền màu cho tiêu đề
    textAlign: 'left', // Căn trái
    padding: 10,
    marginVertical: 5,
  },
  selectedHeader: {
    fontSize: 16,
    color: 'red',
    marginTop: 20,
    textAlign: 'center',
  },
  selectedItemsContainer: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default App;