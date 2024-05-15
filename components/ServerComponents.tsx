export const ServerComponents = (props: any) => {
  const { value } = props;
  if (!value) return <div>oops...</div>;
  return value.map(({ type, props }: any) => {
    try {
      const Component = getComponent(type);

      if (!Component) return <div>oops...</div>;
      return <Component {...props} />;
    } catch (error) {
      return <div>oops...</div>;
    }
  });
};

export const getComponent = (componentName: string) => {
  try {
    const {
      default: Component,
    } = require(`@/components/server-ui/${componentName}.tsx`);
    return Component;
  } catch (error) {
    return null;
  }
};
