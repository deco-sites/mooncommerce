export interface Props {
  text: string;
}

export default function HighText(props: Props) {
  const { text } = props;

  return (
    <div>
      {text}
    </div>
  );
}
