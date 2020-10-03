import React, { FC, useState } from "react";

interface Props {
  onRetreive: (min: number, max: number) => void;
}

const Filter: FC<Props> = ({ onRetreive }) => {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(100);

  const updateMin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value > max || value < 0) return;
    setMin(value);
  };

  const updateMax = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value < min) return;
    setMax(value);
  };

  const submit = () => {
    onRetreive(min, max);
  };

  return (
    <div>
      value min:
      <input name="minAge" value={min} onChange={updateMin} type="number" />
      max:
      <input name="maxAge" value={max} onChange={updateMax} type="number" />
      <button type="button" onClick={submit}>
        Retrieve Users
      </button>
    </div>
  );
};

export default Filter;
