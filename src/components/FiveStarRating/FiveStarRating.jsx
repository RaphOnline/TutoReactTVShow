import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

export function FiveStarRating({ rating }) {
  // Déclarer un tableau d'étoiles (jsx) vide
  const starList = [];
  // Stocker dans une variable le nombre d'étoile pleine
  const starFillCount = Math.floor(rating);
  // Stocker dans une variable si oui ou non il y  à une demie étoile
  const hasStarHalf = rating - starFillCount >= 0.5;
  // Stocker dans une variable le nombre d'étoile vide
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);
  // Pusher dans le tableau les étoiles pleines
  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} size={16} color="gold" />);
  }
  // Pusher dans le tableau les demies étoiles (si il y en a)
  if (hasStarHalf) {
    starList.push(<StarHalf key={"star-half"} size={16} color="gold" />);
  }
  // Pusher dans le tableau les étoiles vides
  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} size={16} color="gold" />);
  }
  ;
  return (
    <div>
      {starList}
    </div>
  );
}
