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
          max="99"
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
      <form>
        <input
          type="checkbox"
          checked={props.spieleNacht2016}
          onChange={props.onSpieleNacht2016Change}
        />
        <input
          type="checkbox"
          checked={props.stadtBibliothek}
          onChange={props.onStadtBibliothekChange}
        />
        <input
          type="checkbox"
          checked={props.wuerfelTuermer}
          onChange={props.onWuerfelTuermerChange}
        />
        <input
          type="checkbox"
          checked={props.kaffeeSatz}
          onChange={props.onKaffeeSatzChange}
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
  onRatingChange: React.ChangeEventHandler<{}>;
  onWeightChange: React.ChangeEventHandler<{}>;
  onMaxAgeChange: React.ChangeEventHandler<HTMLInputElement>;
  onSpieleNacht2016Change: React.ChangeEventHandler<HTMLInputElement>;
  onStadtBibliothekChange: React.ChangeEventHandler<HTMLInputElement>;
  onWuerfelTuermerChange: React.ChangeEventHandler<HTMLInputElement>;
  onKaffeeSatzChange: React.ChangeEventHandler<HTMLInputElement>;
}
