const LicenseSelector = (props: any) => {
  const { options, stateId } = props;
  return (
    <div>
      {options.map((option: any) => (
        <div key={option.value}>
          <input
            type="radio"
            id={option.value}
            name={stateId}
            value={option.value}
          />
          <label htmlFor={option.value}>{option.text}</label>
        </div>
      ))}
    </div>
  );
};

export default LicenseSelector;
