import * as React from 'react';
import {Set} from 'immutable';

export default function TableRow(props: TableRowProps) {
  const playerCount = (props.minPlayers === props.maxPlayers)
    ? props.minPlayers
    : `${props.minPlayers} – ${props.maxPlayers}`;

  return (
    <tr>
      <td data-label="Name">{props.localName}</td>
      <td data-label="Bewertung">{props.rating}</td>
      <td data-label="Spieleranzahl">{playerCount}</td>
      <td data-label="Alter">{props.minAge}+</td>
      <td data-label="Gewicht">{props.weight}</td>
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
  localName: number;

  sources: Set<number>;
}
