import * as React from 'react';
import {Set} from 'immutable';

export default function TableRow(props: TableRowProps) {
  const playerCount = (props.minPlayers === props.maxPlayers)
    ? props.minPlayers
    : `${props.minPlayers} – ${props.maxPlayers}`;

  return (
    <tr>
      <td data-label="Name">{props.localName}</td>
      <td data-label="Bewertung">
        <progress value={props.rating} title={String(props.rating)} min={1} max={10}/>
      </td>
      <td data-label="Spieleranzahl">{playerCount}</td>
      <td data-label="Alter">{props.minAge}+</td>
      <td data-label="Gewicht">
        <progress value={props.weight} title={String(props.weight)} min={1} max={5}/>
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
