import { useEffect, useState } from "react";
export default function Compteur(props) {
  const [compteur, setCompteur] = useState(1);
  const incrementer = () => {
    setCompteur(compteur + 1);
  };
  const decrementer = () => {
    setCompteur(compteur - 1);
  };
  useEffect(() => {
    console.log("Je me suis rendu");
  });
  return (
    <>
      {props.age > 20 ? <p>Bonjour jai {props.age} ans</p> : null}
      <div className="compteur">
        <button onClick={incrementer}>+</button>
        <p className={compteur < 0 && "erreur"}>{compteur}</p>
        <button onClick={decrementer}>-</button>
      </div>
    </>
  );
}
