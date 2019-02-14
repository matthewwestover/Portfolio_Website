import React from "react";
const ThemeContext = React.createContext();

export const ThemeConsumer = ThemeContext.Consumer;

class ThemeProvider extends React.Component {
  state = {
    darkTheme: true,
    colors: {
      dark: {
        background: "#222831",
        fontColor: "#eeeeee",
      },
      light: {
        background: "#f8f5e4",
        fontColor: "#0e3047",
      }
    },
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