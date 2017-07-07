import * as React from 'react';
import RangeInput from './RangeInput';

export default function Form(props: InputProps) {
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
        <RangeInput
          min={1}
          max={10}
          value={props.rating}
          step={1}
          onChange={props.onRatingChange}
        />
        <RangeInput
          min={1}
          max={5}
          value={props.weight}
          step={0.5}
          onChange={props.onWeightChange}
        />
        <input
          type="number"
          min="0"
          max="99"
          value={props.maxAge}
          onChange={props.onMaxAgeChange}
        />
        <div className="button-group">
          <label role="button">
            <input
              type="checkbox"
              checked={props.spieleNacht2016}
              onChange={props.onSpieleNacht2016Change}
            />
            Spielenacht 2016
          </label>
          <label role="button">
            <input
              type="checkbox"
              checked={props.stadtBibliothek}
              onChange={props.onStadtBibliothekChange}
            />
            Stadtbibliothek
          </label>
          <label role="button">
            <input
              type="checkbox"
              checked={props.wuerfelTuermer}
              onChange={props.onWuerfelTuermerChange}
            />
            Würfeltürmer
            </label>
          <label role="button">
            <input
              type="checkbox"
              checked={props.kaffeeSatz}
              onChange={props.onKaffeeSatzChange}
            />
            Kaffeesatz
          </label>
        </div>
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
  onSpieleNacht2016Change: React.ChangeEventHandler<HTMLInputElement>;
  onStadtBibliothekChange: React.ChangeEventHandler<HTMLInputElement>;
  onWuerfelTuermerChange: React.ChangeEventHandler<HTMLInputElement>;
  onKaffeeSatzChange: React.ChangeEventHandler<HTMLInputElement>;
}
