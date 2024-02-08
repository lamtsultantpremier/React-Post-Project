export default function NavBar({ nbPost }) {
  return (
    <div className="entete">
      <p>Voici la barre de navigation :{nbPost()}</p>
    </div>
  );
}
