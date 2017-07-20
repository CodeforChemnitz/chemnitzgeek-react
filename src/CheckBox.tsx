import * as React from 'react';
import {sourceID} from './TableRow';

export default function CheckBox(props: CheckBoxProps) {
  const id = 'checkbox-' + props.name + props.item.id;

  return (
    <div className="input-group">
      <input
        type="checkbox"
        checked={props.item.checked}
        onChange={() => props.onChange({...props.item, checked: !props.item.checked})}
        id={id}
        tabIndex={0}
      />
      <label htmlFor={id}>{props.item.name}</label>
    </div>
  );
}

interface CheckBoxProps {
  item: Item;
  name: string;
  onChange: (source: Item) => void;
}

export interface Item {
  id: sourceID;
  name: string;
  checked: boolean;
  url: string;
  bgColor: string;
}
