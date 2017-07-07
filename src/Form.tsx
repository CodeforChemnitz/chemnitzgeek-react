import * as React from 'react';
import RangeInput from './RangeInput';
import CheckBoxGroup from './CheckBoxGroup';
import {Item} from './CheckBox';

export default function Form(props: InputProps) {
  return (
    <div className="col-sm-3">
      <form>
        <div className="input-group fluid">
          <input
            type="text"
            value={props.searchTerm}
            placeholder="Suchbegriff"
            onChange={props.onSearchTermChange}
          />
        </div>
        <div className="input-group fluid">
          <input
            type="number"
            min={0}
            max={99}
            value={props.playerCount}
            onChange={props.onPlayerCountChange}
          />
        </div>
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
        <div className="input-group fluid">
          <input
            type="number"
            min={0}
            max={99}
            value={props.maxAge}
            onChange={props.onMaxAgeChange}
          />
        </div>
        <CheckBoxGroup items={props.sources} name="source" onChange={props.onSourcesChange}/>
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
  sources: Item[];
  onSearchTermChange: React.ChangeEventHandler<HTMLInputElement>;
  onPlayerCountChange: React.ChangeEventHandler<HTMLInputElement>;
  onRatingChange: React.ChangeEventHandler<HTMLInputElement>;
  onWeightChange: React.ChangeEventHandler<HTMLInputElement>;
  onMaxAgeChange: React.ChangeEventHandler<HTMLInputElement>;
  onSourcesChange: (sourceId: number) => void;
}
