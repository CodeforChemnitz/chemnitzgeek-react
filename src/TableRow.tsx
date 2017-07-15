import {Set} from 'immutable';
import * as React from 'react';

export default function TableRow(props: TableRowProps) {
  const playerCount = (props.minPlayers === props.maxPlayers)
    ? props.minPlayers
    : `${props.minPlayers} – ${props.maxPlayers}`;
  const rating = props.rating / 10 * 1000;
  const weight = props.weight / 5 * 1000;
  const style = {textDecoration: 'none', color: '#212121'};
  const url = 'https://boardgamegeek.com/boardgame/' + props.bggID;

  return (
    <tr>
      <td data-label="Name">
        <a href={url} target="_blank" style={style}>{props.localName}</a>
      </td>
      <td data-label="Bewertung">
        <progress value={rating} title={String(props.rating)} max={1000}/>
      </td>
      <td data-label="Spieleranzahl">{playerCount}</td>
      <td data-label="Alter">{props.minAge}+</td>
      <td data-label="Gewicht">
        <progress value={weight} title={String(props.weight)} max={1000} className="secondary"/>
      </td>
      <td data-label="Jahr">{props.yearPublished}</td>
      <td data-label="Quelle">{props.sources.join(', ')}</td>
    </tr>
  );
}

interface TableRowProps extends Game {
}

export interface Game {
  bggID: number;
  name: string;
  yearPublished: number;
  minAge: number;
  minPlayers: number;
  maxPlayers: number;
  rating: number;
  weight: number;
  localName: string;

  sources: Set<number>;
}
