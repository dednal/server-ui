"use client";

import { useServerUIActions, useServerUISlice } from "../ServerContext";
import LicensingOption from "./licensing-option";

export const LicensingOptionList = (props: any) => {
  const { options, stateId } = props;

  const currentOption = useServerUISlice(stateId);

  const { setState } = useServerUIActions();

  const handleChange = (value: any) => {
    setState(stateId, value);
  };
  return (
    <ul className="flex flex-col gap-2">
      {options.map((option: any) => {
        return (
          <LicensingOption
            {...option}
            active={currentOption === option.value}
            onClick={handleChange}
            key={option.mainText}
          />
        );
      })}
    </ul>
  );
};

export default LicensingOptionList;
