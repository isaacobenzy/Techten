import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet } from 'react-native';

const UserScreen = () => {
  // Example user profile data
  const [userProfile, setUserProfile] = useState({
    username: 'John Doe',
    phoneNumber: '+1234567890',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    location: 'New York, USA',
    profileImage: 'https://res.cloudinary.com/dwrhh1fni/image/upload/v1711543329/Techten/pi-top_with_Robotics_Kit_zolrxf.png' // Default profile image URL
  });

  // Function to handle changing profile image
  const changeProfileImage = () => {
    // Logic to change profile image
    // For simplicity, this example just updates the profile image URL
    setUserProfile({
      ...userProfile,
      profileImage: 'https://res.cloudinary.com/dwrhh1fni/image/upload/v1711543329/Techten/pi-top_with_Robotics_Kit_zolrxf.png' // New profile image URL
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={changeProfileImage}>
        <Image source={{ uri: userProfile.profileImage }} style={styles.profileImage} />
        <Text style={styles.changeImageText}>Change Profile Image</Text>
      </TouchableOpacity>
      <View style={styles.userInfoContainer}>
        <Text style={styles.label}>Username:</Text>
        <Text style={styles.info}>{userProfile.username}</Text>
        <Text style={styles.label}>Phone Number:</Text>
        <Text style={styles.info}>{userProfile.phoneNumber}</Text>
        <Text style={styles.label}>Details:</Text>
        <Text style={styles.info}>{userProfile.details}</Text>
        <Text style={styles.label}>Location:</Text>
        <Text style={styles.info}>{userProfile.location}</Text>
        {/* Add more user information as needed */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20
  },
  changeImageText: {
    color: 'blue',
    marginBottom: 20
  },
  userInfoContainer: {
    width: '100%'
  },
  label: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5
  },
  info: {
    color: 'black',
    fontSize: 16,
    marginBottom: 15
  }
});

export default UserScreen;
