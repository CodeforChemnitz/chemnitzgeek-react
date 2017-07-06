import * as React from 'react';

export default function TableRow(props: TableRowProps) {
  return (
    <tr>
      <td>{props.game.name}</td>
      <td>{props.game.rating}</td>
      <td>{props.game.players}</td>
      <td>{props.game.age}</td>
      <td>{props.game.weight}</td>
      <td>{props.game.year}</td>
      <td>{props.game.source}</td>
    </tr>
  );
}

interface TableRowProps {
  game: Game;
}

export interface Game {
  name: string;
  rating: number;
  players: number;
  age: number;
  weight: number;
  year: number;
  source: number;
}
