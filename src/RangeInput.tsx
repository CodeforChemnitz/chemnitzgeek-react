import * as React from 'react';

export default function RangeInput(props: RangeInputProps) {
  return(
    <div className="input-group">
      <label>
        {props.name}
        <div>
          <input
            type="number"
            min={props.min}
            max={props.value[1]}
            value={props.value[0]}
            step={props.step}
            disabled={props.disabled}
            onChange={(event) => props.onChange([Number(event.target.value), props.value[1]])}
          />
          <input
            type="number"
            min={props.value[0]}
            max={props.max}
            value={props.value[1]}
            step={props.step}
            disabled={props.disabled}
            onChange={(event) => props.onChange([props.value[0], Number(event.target.value)])}
          />
        </div>
      </label>
    </div>
  );
}

export interface RangeInputProps {
  min: number;
  max: number;
  value: [number, number];
  step: number;
  name: string;
  disabled?: boolean;
  onChange: (value: [number, number]) => void;
}
