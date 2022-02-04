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
  imtnPad = (word) => {
    return word;
  };
  rodPad = (word) => {
    const pre = this.splitter(word);
    const { beginWord, lastLetter } = pre;
    let rodWord = "";
    if (lastLetter === "а") {
      return (rodWord = [...beginWord, "у"].join(""));
    }

    if (lastLetter === "ё") {
      return (rodWord = [...beginWord, "я"].join(""));
    }
    if (lastLetter === "и") {
      return (rodWord = [...beginWord, "ей"].join(""));
    }
    if (lastLetter === "й") {
      return (rodWord = [...beginWord, "я"].join(""));
    }
    if (lastLetter === "о") {
      return (rodWord = [...beginWord, "а"].join(""));
    }
    if (lastLetter === "ы") {
      return (rodWord = [...beginWord, "ов"].join(""));
    }
    if (lastLetter === "ь") {
      return (rodWord = [...beginWord, "и"].join(""));
    }
    if (lastLetter === "е" || lastLetter === "у" || lastLetter === "э") {
      return (rodWord = [...beginWord, lastLetter].join(""));
    }
    rodWord = [...beginWord, lastLetter, "а"].join("");
    return rodWord;
  };
  datPad = (word) => {
    const pre = this.splitter(word);
    const { beginWord, lastLetter } = pre;
    let datWord = "";
    if (lastLetter === "а") {
      return (datWord = [...beginWord, "е"].join(""));
    }

    if (lastLetter === "ё") {
      return (datWord = [...beginWord, "ю"].join(""));
    }
    if (lastLetter === "и") {
      return (datWord = [...beginWord, "ям"].join(""));
    }
    if (lastLetter === "й") {
      return (datWord = [...beginWord, "ю"].join(""));
    }
    if (lastLetter === "о") {
      return (datWord = [...beginWord, "у"].join(""));
    }
    if (lastLetter === "ы") {
      return (datWord = [...beginWord, "ам"].join(""));
    }
    if (lastLetter === "ь") {
      return (datWord = [...beginWord, "и"].join(""));
    }
    if (lastLetter === "е" || lastLetter === "у" || lastLetter === "э") {
      return (datWord = [...beginWord, lastLetter].join(""));
    }
    datWord = [...beginWord, lastLetter, "у"].join("");
    return datWord;
  };

  vinPad = (word) => {
    const pre = this.splitter(word);
    const { beginWord, lastLetter } = pre;
    let vinWord = "";
    if (lastLetter === "а") {
      return (vinWord = [...beginWord, "у"].join(""));
    }

    if (lastLetter === "ё") {
      return (vinWord = [...beginWord, "ё"].join(""));
    }
    if (lastLetter === "и") {
      return (vinWord = [...beginWord, "и"].join(""));
    }
    if (lastLetter === "й") {
      return (vinWord = [...beginWord, "й"].join(""));
    }
    if (lastLetter === "о") {
      return (vinWord = [...beginWord, "о"].join(""));
    }
    if (lastLetter === "ы") {
      return (vinWord = [...beginWord, "ы"].join(""));
    }
    if (lastLetter === "ь") {
      return (vinWord = [...beginWord, "ь"].join(""));
    }
    if (lastLetter === "е" || lastLetter === "у" || lastLetter === "э") {
      return (vinWord = [...beginWord, lastLetter].join(""));
    }
    vinWord = [...beginWord, lastLetter, "а"].join("");
    return vinWord;
  };
  tvorPad = (word) => {
    const pre = this.splitter(word);
    const { beginWord, lastLetter } = pre;
    let tvorWord = "";
    if (lastLetter === "а") {
      return (tvorWord = [...beginWord, "ой"].join(""));
    }

    if (lastLetter === "ё") {
      return (tvorWord = [...beginWord, "ём"].join(""));
    }
    if (lastLetter === "и") {
      return (tvorWord = [...beginWord, "ями"].join(""));
    }
    if (lastLetter === "й") {
      return (tvorWord = [...beginWord, "ем"].join(""));
    }
    if (lastLetter === "о") {
      return (tvorWord = [...beginWord, "ом"].join(""));
    }
    if (lastLetter === "ы") {
      return (tvorWord = [...beginWord, "ами"].join(""));
    }
    if (lastLetter === "ь") {
      return (tvorWord = [...beginWord, "ью"].join(""));
    }
    if (lastLetter === "е" || lastLetter === "у" || lastLetter === "э") {
      return (tvorWord = [...beginWord, lastLetter].join(""));
    }
    tvorWord = [...beginWord, lastLetter, "ом"].join("");
    return tvorWord;
  };
  predPad = (word) => {
    const pre = this.splitter(word);
    const { beginWord, lastLetter } = pre;
    let tvorWord = "";
    if (lastLetter === "а") {
      return (tvorWord = [...beginWord, "е"].join(""));
    }

    if (lastLetter === "ё") {
      return (tvorWord = [...beginWord, "е"].join(""));
    }
    if (lastLetter === "и") {
      return (tvorWord = [...beginWord, "ях"].join(""));
    }
    if (lastLetter === "й") {
      return (tvorWord = [...beginWord, "е"].join(""));
    }
    if (lastLetter === "о") {
      return (tvorWord = [...beginWord, "е"].join(""));
    }
    if (lastLetter === "ы") {
      return (tvorWord = [...beginWord, "ах"].join(""));
    }
    if (lastLetter === "ь") {
      tvorWord = [...beginWord, "и"].join("");
    }
    if (lastLetter === "е" || lastLetter === "у" || lastLetter === "э") {
      return (tvorWord = [...beginWord, lastLetter].join(""));
    }
    tvorWord = [...beginWord, lastLetter, "е"].join("");
    return tvorWord;
  };

  render() {
    let words = [];
    if (this.state.currentWord) {
      const rod = this.rodPad(this.state.currentWord);
      const imen = this.imtnPad(this.state.currentWord);
      const dat = this.datPad(this.state.currentWord);
      const vin = this.vinPad(this.state.currentWord);
      const tvor = this.tvorPad(this.state.currentWord);
      const pred = this.predPad(this.state.currentWord);
      words = [
        { padezh: "Именительный", word: imen },
        { padezh: "Родительный", word: rod },
        { padezh: "Дательный", word: dat },
        { padezh: "Винительный", word: vin },
        { padezh: "Творительный", word: tvor },
        { padezh: "Предложный", word: pred },
      ];
    }
       return (
      <>
        <Form onSubmit={this.formSubmitHandler} />
        {/* <SearchFilterInput onChange={this.filterInputHandler} /> */}
        {words.length > 0 && <PadList words={words} />}
      </>
    );
  }
}

export default App;
