const Text = (props: any) => {
  const { text } = props;

  return (
    <div>
      <span className="text-red-500">{text}</span>
    </div>
  );
};

export default Text;
