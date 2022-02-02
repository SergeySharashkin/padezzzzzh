import React, { Component } from "react";
import Form from "./components/Form/Form";
import PadList from "./components/PadList/PadList";

class App extends Component {
  state = {
    currentWord: ''
  }
  formSubmitHandler = (word) => {
    this.setState({ currentWord: word });
    console.log(this.state)
    };
  imPad = (word) => {
    word;
  };
  // rodPad = () =>  {
  //   this.setState({wordList: [...this.state.wordList, this.state.currentWord]});
  // };
  // datPad = () =>  {
  //   this.setState({wordList: [...this.state.wordList, this.state.currentWord]});
  // };
  // inPad = ()  => {
  //   this.setState({wordList: [...this.state.wordList, this.state.currentWord]});
  // };
  // tvorPad = () =>  {
  //   this.setState({wordList: [...this.state.wordList, this.state.currentWord]});
  // };
  // datelPad = () =>  {
  //   this.setState({wordList: [...this.state.wordList, this.state.currentWord]});
  // };
 
   // componentDidMount() {
  //   const contacts = localStorage.getItem("contacts");

  //   const parsedContacts = JSON.parse(contacts);
  //   if (parsedContacts) {
  //     this.setState({ contacts: parsedContacts });
  //   }
  // }
  // componentDidUpdate(prevProps, prevState) {
  //   if (this.state.contacts !== prevState.contacts) {
  //     localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  //   }
  // }

  render() {
    // const { filter } = this.state;
    // const filtredContacts = this.onFilter();
const list = [];
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        {/* <SearchFilterInput onChange={this.filterInputHandler} /> */}
        {list.length>0 &&
        <PadList
          list ={list}
      
        />
        }
        
      </>
    );
  }
}

export default App;
