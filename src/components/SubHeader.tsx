import React, { FC, memo } from "react";

interface Props {
  title: string;
}
const SubHeader: FC<Props> = ({ title }) => <h2>{title}</h2>;

export default memo(SubHeader);
