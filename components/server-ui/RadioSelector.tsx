"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  useServerUIActions,
  useServerUISlice,
} from "@/components/ServerContext";

const RadioSelector = (props: any) => {
  const { options, stateId } = props;

  const { setState } = useServerUIActions();
  const radioState = useServerUISlice(stateId);

  const handleChange = (e: any) => {
    setState(stateId, e.target.value);
  };

  return (
    <RadioGroup defaultValue={radioState}>
      {options.map((option: any) => {
        return (
          <div className="flex items-center space-x-2" key={option.value}>
            <RadioGroupItem
              onClick={handleChange}
              value={option.value}
              id={option.value}
            />
            <Label htmlFor={option.value}>{option.text}</Label>
          </div>
        );
      })}
    </RadioGroup>
  );
};

export default RadioSelector;
