import { useEffect, useState } from "react";

interface FirstStanzaProps {
  setFirstEndingWord: React.Dispatch<React.SetStateAction<string>>
  setSecondEndingWord: React.Dispatch<React.SetStateAction<string>>
  setThirdEndingWord: React.Dispatch<React.SetStateAction<string>>
  setFourthEndingWord: React.Dispatch<React.SetStateAction<string>>
  setFifthEndingWord: React.Dispatch<React.SetStateAction<string>>
  setSixthEndingWord: React.Dispatch<React.SetStateAction<string>>
}

const FirstStanza = ({
  setFirstEndingWord,
  setSecondEndingWord,
  setThirdEndingWord,
  setFourthEndingWord,
  setFifthEndingWord,
  setSixthEndingWord
}: FirstStanzaProps) => {
  const selectEndingWordSetter = (i: number, value: string) => {
    switch (i) {
      case 0:
        setFirstEndingWord(value);
        break;
      case 1:
        setSecondEndingWord(value);
        break;
      case 2:
        setThirdEndingWord(value);
        break;
      case 3:
        setFourthEndingWord(value);
        break;
      case 4:
        setFifthEndingWord(value);
        break;
      case 5:
        setSixthEndingWord(value);
        break;
      default:
        console.log(`wtf`);
    }
  }

  return (
    <form name="stanza-1">
      {[1, 2, 3, 4, 5, 6].map((x, i) =>
        <div key={`1-${i}`}>
          <label className="sr-only" aria-hidden="true" htmlFor={`line_${x}`}>
            Write line {x} minus the ending word
          </label>
          <input
            name={`line_${x}`}
            className="beginning-line"
            placeholder={`Write line ${x} minus the ending word here`}
            required
          />
          <label className="sr-only" aria-hidden="true" htmlFor={`last_word_${x}`}>
            Write the last word of your first line here
          </label>
          <input
            name={`last_word_${x}`}
            onChange={(e) => selectEndingWordSetter(i, e.target.value)}
            className="ending-word"
            placeholder={`Ending word ${x}`}
            required />
        </div>
      )}
    </form>
  )
};

interface SecondStanzaProps {
  firstEndingWord: string
  secondEndingWord: string
  thirdEndingWord: string
  fourthEndingWord: string
  fifthEndingWord: string
  sixthEndingWord: string
}

const SecondStanza = ({
  firstEndingWord,
  secondEndingWord,
  thirdEndingWord,
  fourthEndingWord,
  fifthEndingWord,
  sixthEndingWord,
}: SecondStanzaProps) => {
  const selectEndingWord = (endingWordNum: number) => {
    switch (endingWordNum) {
      case 1:
        return firstEndingWord;
      case 2:
        return secondEndingWord;
      case 3:
        return thirdEndingWord;
      case 4:
        return fourthEndingWord;
      case 5:
        return fifthEndingWord;
      case 6:
        return sixthEndingWord;
      default:
        console.log(`wtf`);
    }
  }

  return (<form name="stanza-2">
    {[6, 1, 5, 2, 4, 3].map((x, i) =>
      <div key={`2-${i}`}>
        <label className="sr-only" aria-hidden="true" htmlFor={`line_${i + 1}`}>
          Write line {i + 1} minus the ending word
        </label>
        <input
          name={`line_${i + 1}`}
          className="beginning-line"
          placeholder={`Write line ${i + 1} minus the ending word here`}
          required
        />
        <span>{selectEndingWord(x)}</span>
      </div>
    )}
  </form>
  )
}

const Home = () => {
  const [firstEndingWord, setFirstEndingWord] = useState<string>('');
  const [secondEndingWord, setSecondEndingWord] = useState<string>('');
  const [thirdEndingWord, setThirdEndingWord] = useState<string>('');
  const [fourthEndingWord, setFourthEndingWord] = useState<string>('');
  const [fifthEndingWord, setFifthEndingWord] = useState<string>('');
  const [sixthEndingWord, setSixthEndingWord] = useState<string>('');

  useEffect(() => {
    console.log(firstEndingWord, secondEndingWord, thirdEndingWord, fourthEndingWord, fifthEndingWord, sixthEndingWord);
  }, [firstEndingWord, secondEndingWord, thirdEndingWord, fourthEndingWord, fifthEndingWord, sixthEndingWord])


  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <p>First Stanza</p>
          <FirstStanza
            setFirstEndingWord={setFirstEndingWord}
            setSecondEndingWord={setSecondEndingWord}
            setThirdEndingWord={setThirdEndingWord}
            setFourthEndingWord={setFourthEndingWord}
            setFifthEndingWord={setFifthEndingWord}
            setSixthEndingWord={setSixthEndingWord}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <p>Second Stanza</p>
          <SecondStanza
            firstEndingWord={firstEndingWord}
            secondEndingWord={secondEndingWord}
            thirdEndingWord={thirdEndingWord}
            fourthEndingWord={fourthEndingWord}
            fifthEndingWord={fifthEndingWord}
            sixthEndingWord={sixthEndingWord}
          />
        </div>
      </div>
    </div>
  )
};

export { Home };