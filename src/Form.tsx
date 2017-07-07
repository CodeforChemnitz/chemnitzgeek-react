import * as React from 'react';
import RangeInput from './RangeInput';
import CheckBoxGroup from './CheckBoxGroup';
import {FormState} from './App';

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
          <label>
            Spieleranzahl
            <input
              type="number"
              min={0}
              max={99}
              value={props.playerCount}
              onChange={props.onPlayerCountChange}
            />
          </label>
        </div>
        <RangeInput
          min={1}
          max={10}
          value={props.rating}
          step={1}
          name="Bewertung"
          onChange={props.onRatingChange}
        />
        <RangeInput
          min={1}
          max={5}
          value={props.weight}
          step={0.5}
          name="Gewicht"
          onChange={props.onWeightChange}
        />
        <div className="input-group fluid">
          <label>
            Maximales Alter
            <input
              type="number"
              min={0}
              max={99}
              value={props.maxAge}
              onChange={props.onMaxAgeChange}
            />
          </label>
        </div>
        <CheckBoxGroup items={props.sources} name="Quelle" onChange={props.onSourcesChange}/>
      </form>
    </div>
  );
}

interface InputProps extends FormState {
  onSearchTermChange: React.ChangeEventHandler<HTMLInputElement>;
  onPlayerCountChange: React.ChangeEventHandler<HTMLInputElement>;
  onRatingChange: React.ChangeEventHandler<HTMLInputElement>;
  onWeightChange: React.ChangeEventHandler<HTMLInputElement>;
  onMaxAgeChange: React.ChangeEventHandler<HTMLInputElement>;
  onSourcesChange: (sourceId: number) => void;
}
