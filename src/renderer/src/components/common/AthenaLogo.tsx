import icon from "../../assets/athena-q.svg";

function AthenaLogo({ size = 32 }: { size?: number }): React.JSX.Element {
  return (
    <img
      src={icon}
      width={size}
      height={size}
      className="rounded-xl"
      alt="Athena Q"
    />
  );
}

export default AthenaLogo;
