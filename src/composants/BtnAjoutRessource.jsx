import './BtnAjoutRessource.scss';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function BtnAjoutRessource() {
  return (
    <Fab color="primary" size="medium" aria-label="add" className="BtnAjoutRessource">
        <AddIcon />
    </Fab>
  );
}