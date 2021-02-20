import './Dossier.scss';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SortIcon from '@material-ui/icons/Sort';

export default function Dossier({id, titre, couleur, dateModif}) {
  let styleCouleur = {
    backgroundColor: couleur
  }
  return (
    <article className="Dossier">
      <div className="couverture">
        <span className="deplacer"><SortIcon /></span>
        <img src={`images-dossiers/${id}.png`} alt={titre}/>
      </div>
      <div className="info" style={styleCouleur}>
        <h2>{titre}</h2>
        <p>Modifié : {dateModif}</p>
      </div>
      <button><MoreVertIcon /></button>
    </article>
  );
}