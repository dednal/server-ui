"use client";

import { useServerUISlice } from "@/components/ServerContext";
import { getComponent } from "../ServerComponents";

const Swtich = (props: { switchValue: any; options: any }) => {
  const { switchValue, options } = props;

  const currentOption = useServerUISlice(switchValue);

  const selectedOption = options.find(
    (option: { value: any }) => option.value === currentOption
  );

  const Component = getComponent(selectedOption.type);
  if (!Component) return <div>oops...</div>;

  return <Component {...selectedOption.props} />;
};

export default Swtich;
