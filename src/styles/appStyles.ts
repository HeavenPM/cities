import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    width: '100%',
    height: '100%',
    backgroundColor: '#292929',
  },
  containerCenter: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 50,
    backgroundColor: '#292929',
  },
  containerColumn: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    fontSize: 50,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#2277a8',
  },
  regular: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 25,
    color: 'white',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#2277a8',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    width: 200,
    height: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  backButton: {
    width: '100%',
    padding: 20,
    marginBottom: 20,
    marginTop: 30,
  },
  backButtonText: {
    color: 'white',
    textAlign: 'left',
    fontSize: 16,
  },

  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },

  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
  },
  ball: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: '#2277a8',
    marginVertical: 10,
  },

  citiesListText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: 'bold', 
  },
  citiesList: {
    margin: 40,
    padding: 10,
    backgroundColor: '#2277a8',
    width: '100%',
    borderRadius: 5,
  },
  citiesListElement : {
    borderColor: '#1570a3',
    borderBottomWidth: 2,
    marginBottom: 20,
  },

  leaderboard: {
    margin: 40,
    width: '80%',
  },
  leaderboardItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
    borderColor: '#1570a3',
    borderBottomWidth: 1,
  },
  leaderboardText: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
