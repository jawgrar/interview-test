import React, { FC, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { ShadowContainer } from "../styled/common";
import styled from "styled-components";

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
    <Container>
      <TextField
        style={{ flex: 1, margin: 8 }}
        label="Min"
        variant="outlined"
        name="minAge"
        value={min}
        onChange={updateMin}
        type="number"
      />
      <TextField
        style={{ flex: 1, margin: 8 }}
        label="Max"
        variant="outlined"
        name="maxAge"
        value={max}
        onChange={updateMax}
        type="number"
      />
      <Button
        style={{ flex: 1, margin: 8 }}
        variant="contained"
        color="primary"
        disableElevation
        onClick={submit}
      >
        Retrieve Users
      </Button>
    </Container>
  );
};

const Container = styled(ShadowContainer)`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 200px;
`;

export default Filter;
