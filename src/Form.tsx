import * as React from 'react';
import {FormState} from './App';
import {Item} from './CheckBox';
import CheckBoxGroup from './CheckBoxGroup';
import RangeInput from './RangeInput';

export default class Form extends React.PureComponent<FormProps, {}> {
  render() {
    const props = this.props;
    return (
      <div className="col-sm-4">
        <form>
          <div className="input-group fluid">
            <input
              type="text"
              value={props.searchTerm}
              placeholder="Suchbegriff"
              onChange={(event) => props.onSearchTermChange(event.target.value)}
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
                onChange={(event) => props.onPlayerCountChange(Number(event.target.value))}
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
              Minimales Alter
              <input
                type="number"
                min={0}
                max={99}
                value={props.minAge}
                onChange={(event) => props.onMinAgeChange(Number(event.target.value))}
              />
            </label>
          </div>
          <CheckBoxGroup items={props.sources} name="Quelle" onChange={props.onSourcesChange}/>
        </form>
      </div>
    );
  }
}

interface FormProps extends FormState {
  onSearchTermChange: (searchTerm: string) => void;
  onPlayerCountChange: (playerCount: number) => void;
  onRatingChange: (rating: [number, number]) => void;
  onWeightChange: (weight: [number, number]) => void;
  onMinAgeChange: (minAge: number) => void;
  onSourcesChange: (source: Item[]) => void;
}
