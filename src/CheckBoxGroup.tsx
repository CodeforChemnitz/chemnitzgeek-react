import * as React from 'react';
import CheckBox, {Item} from './CheckBox';

export default function CheckBoxGroup(props: CheckBoxGroupProps) {
  const items = props.items.map((item, index) => (
    <CheckBox key={index} item={item} name={props.name} onChange={props.onChange}/>
  ));

  return (
    <div className="col-sm-12">
      <fieldset>
        <div>
          <legend>{props.name}</legend>
          {items}
        </div>
      </fieldset>
    </div>
  );
}

interface CheckBoxGroupProps {
  items: Item[];
  name: string;
  onChange: (sourceId: number) => void;
}
