import { SectionProps } from "deco/types.ts";
import { HTMLWidget } from "apps/admin/widgets.ts";
/**
 * @titleBy matcher
 */

export interface HighText {
  /** @description RegExp to enable this banner on the current URL. Use /feminino/* to display this banner on feminino category */
  matcher: string;
  /** @description Insira o conteúdo de texto que vai ser exibido */
  text: HTMLWidget;
}

interface defaultProps {
  banners?: [
    {
      placeholders: {
        matcher: string;

        item: {
          text: string;
        };
      };
    },
  ];
}

const DEFAULT_PROPS: defaultProps = {
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

  if (item) {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: item.text }}
        class="w-4/5 mx-auto"
        id="highTextSeo"
      >
      </div>
    );
  } else {
    return null;
  }
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
