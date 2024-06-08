import { SectionProps } from "deco/types.ts";

export interface HighText {
  /** @description RegExp to enable this banner on the current URL. Use /feminino/* to display this banner on feminino category  */
  matcher: string;
  /** @description Insira o conteúdo de texto que vai ser exibido */
  text: string;
  _readMore?: boolean;
}

const DEFAULT_PROPS = {
  banners: [
    {
      placeholders: {
        matcher: "/*",
        item: {
          text: "Teste de componente",
        },
      },
    },
  ],
};

function HighText(props: SectionProps<ReturnType<typeof loader>>) {
  const { item } = props;

  return (
    <div>
      <p>{item?.text}</p>
    </div>
  );
}

export interface Props {
  placeholders: HighText[];
}

export const loader = (props: Props, req: Request) => {
  const { placeholders } = { ...DEFAULT_PROPS, ...props };
  const item = placeholders.find(({ matcher }) =>
    new URLPattern({ pathname: matcher }).test(req.url)
  );

  return { item };
};

export default HighText;
