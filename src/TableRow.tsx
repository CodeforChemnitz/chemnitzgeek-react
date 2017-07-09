import * as React from 'react';
import {Set} from 'immutable';

export default function TableRow(props: TableRowProps) {
  const playerCount = (props.minPlayers === props.maxPlayers)
    ? props.minPlayers
    : `${props.minPlayers} – ${props.maxPlayers}`;
  const rating = (props.rating - 1) / 9 * 1000;
  const weight = (props.weight - 1) / 4 * 1000;

  return (
    <tr>
      <td data-label="Name">{props.localName}</td>
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
