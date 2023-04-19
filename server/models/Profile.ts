interface Profile {
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'non-binary';
  photos: string[];
  location: 3 | 4 | 5;
}

export default Profile;