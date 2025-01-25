import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  dropdownContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
  },
  dropdown: {
    height: 50,
    borderRadius: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 8,
  },
  dropdownMenuStyle: {
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});