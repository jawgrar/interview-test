import React, { FC, memo } from "react";
import { HeadLine2 } from "../styled/common";

interface Props {
  title: string;
}
const SubHeader: FC<Props> = ({ title }) => <HeadLine2>{title}</HeadLine2>;

export default memo(SubHeader);
