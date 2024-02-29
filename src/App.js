import './App.css';
import TodoList from './components/todo/todo-list';
import Exemple from './components/exemple/exemple';
import { useContext, useState } from 'react';
import { ThemeContext } from './contexts/themeContext';
import Header from './components/Header';
function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light')
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Header />
      <Exemple />
      <TodoList />
    </ThemeContext.Provider>
  );
}

export default App;
