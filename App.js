import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import TaskPage from './src/pages/TaskPage';
import LoginPage from './src/pages/LoginPage';

const AppNavigator = createStackNavigator(
  {
    'Login': {
      screen: LoginPage,
      navigationOptions: {
        headerShown: false
      }
    },
    'Task': {
      screen: TaskPage,
      navigationOptions: {
        title: 'Tarefas de Hoje',
        headerStyle:{
          backgroundColor:'black',
        },
        headerTitleStyle: {         
          textAlign: 'left',
          fontSize: 20
        }
      }
    }
  },
  {
    defaultNavigationOptions: {
      title: 'NotesTimeline',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#0a0',
        borderBottomColor: '#f4f2ff',
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        flexGrow: 1,
        textAlign: 'center'
      }
    }
  }
)

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;