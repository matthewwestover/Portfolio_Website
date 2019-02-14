import React from "react";
const ThemeContext = React.createContext();

export const ThemeConsumer = ThemeContext.Consumer;

class ThemeProvider extends React.Component {
  state = {
    darkTheme: false,
    change: () => this.changeTheme()
  };

  changeTheme = () => {
    this.setState({darkTheme: !this.state.darkTheme});
  }
    
  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        { this.props.children }
      </ThemeContext.Provider>
    )
  }
}

export default ThemeProvider;