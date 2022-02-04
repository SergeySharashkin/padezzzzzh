import React, { Component } from "react";
import Form from "./components/Form/Form";
import PadList from "./components/PadList/PadList";

class App extends Component {
  state = {
    currentWord: "",
  };
  formSubmitHandler = (word) => {
    this.setState({ currentWord: word });
  };
  splitter = (word) => {
    const a = word.split("");
    if (word.length !== 0) {
      const lastLetter = a.pop();
      return {
        beginWord: a,
        lastLetter: lastLetter,
      };
    }
  };
  rodPad = (word) => {
    const pre = this.splitter(word);
    const { beginWord, lastLetter } = pre;
    let rodWord = "";
    if (lastLetter === "а") {
      return rodWord = [...beginWord, "у"];
    }
   
    if (lastLetter === "ё") {
      return rodWord = [...beginWord, "я"];
    }
    if (lastLetter === "и") {
      return rodWord = [...beginWord, "ей"];
    }
    if (lastLetter === "й") {
      return rodWord = [...beginWord, "я"];
    }
    if (lastLetter === "о") {
      return rodWord = [...beginWord, "а"];
    }
    if (lastLetter === "ы") {
      return rodWord = [...beginWord, "ов"];
    }
    if (lastLetter === "ь") {
      return rodWord = [...beginWord, "и"];
    } 
    if (lastLetter === "е" || lastLetter === "у" || lastLetter === "э") {
      return rodWord = [...beginWord, lastLetter];
    }
      rodWord = [...beginWord, lastLetter, "а"];
    return rodWord
    
  };
  datPad = (word) => {
    const pre = this.splitter(word);
    const { beginWord, lastLetter } = pre;
    let datWord = "";
    if (lastLetter === "а") {
      return datWord = [...beginWord, "е"];
    }
   
    if (lastLetter === "ё") {
      return datWord = [...beginWord, "ю"];
    }
    if (lastLetter === "и") {
      return datWord = [...beginWord, "ям"];
    }
    if (lastLetter === "й") {
      return datWord = [...beginWord, "ю"];
    }
    if (lastLetter === "о") {
      return datWord = [...beginWord, "у"];
    }
    if (lastLetter === "ы") {
      return datWord = [...beginWord, "ам"];
    }
    if (lastLetter === "ь") {
      return datWord = [...beginWord, "и"];
    } 
    if (lastLetter === "е" || lastLetter === "у" || lastLetter === "э") {
      return datWord = [...beginWord, lastLetter];
    }
    datWord = [...beginWord, lastLetter, "у"];
    return datWord
    
  };
 
  // inPad = ()  => {
  //   this.setState({wordList: [...this.state.wordList, this.state.currentWord]});
  // };
  // tvorPad = () =>  {
  //   this.setState({wordList: [...this.state.wordList, this.state.currentWord]});
  // };
  // datelPad = () =>  {
  //   this.setState({wordList: [...this.state.wordList, this.state.currentWord]});
  // };

  render() {
    if (this.state.currentWord) {
      const rod = this.rodPad(this.state.currentWord);
const dat = this.datPad(this.state.currentWord);
      console.log(rod, dat);
    }

    const list = [];
    return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        {/* <SearchFilterInput onChange={this.filterInputHandler} /> */}
        {list.length > 0 && <PadList list={list} />}
      </>
    );
  }
}

export default App;
