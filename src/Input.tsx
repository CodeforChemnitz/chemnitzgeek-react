import * as React from 'react';

export default function Input(props: InputProps) {
  return (
    <div>
      <form>
        <input
          type="text"
          value={props.searchTerm}
          onChange={props.onSearchTermChange}
        />
        <input
          type="number"
          min="0"
          max="100"
          value={props.playerCount}
          onChange={props.onPlayerCountChange}
        />
        <input
          type="number"
          min="0"
          max="99"
          value={props.maxAge}
          onChange={props.onMaxAgeChange}
        />
      </form>
    </div>
  );
}

interface InputProps {
  searchTerm: string;
  playerCount: number;
  rating: [number, number];
  weight: [number, number];
  maxAge: number;
  spieleNacht2016?: boolean;
  stadtBibliothek?: boolean;
  wuerfelTuermer?: boolean;
  kaffeeSatz?: boolean;
  onSearchTermChange: React.ChangeEventHandler<HTMLInputElement>;
  onPlayerCountChange: React.ChangeEventHandler<HTMLInputElement>;
  onRatingChange: React.ChangeEventHandler<HTMLInputElement>;
  onWeightChange: React.ChangeEventHandler<HTMLInputElement>;
  onMaxAgeChange: React.ChangeEventHandler<HTMLInputElement>;
}
