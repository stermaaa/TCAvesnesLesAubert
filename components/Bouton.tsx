import Link from "next/link";

type BoutonVariante = "primaire" | "secondaire" | "fantome";

const STYLES: Record<BoutonVariante, string> = {
  primaire: "bg-court-blue text-white-line hover:bg-court-blue/90",
  secondaire: "bg-court-orange text-white-line hover:bg-court-orange/90",
  fantome: "bg-transparent text-ink hover:bg-ink/5",
};

type BoutonBaseProps = {
  variante?: BoutonVariante;
  className?: string;
  children: React.ReactNode;
};

type BoutonProps =
  | (BoutonBaseProps & { href: string; type?: never; onClick?: never })
  | (BoutonBaseProps & {
      href?: never;
      type?: "button" | "submit";
      onClick?: () => void;
    });

/** Cibles ≥44px (h-11), transition rapide ("vif"), pas d'ombre décorative. */
export function Bouton(props: BoutonProps) {
  const { variante = "primaire", className, children } = props;
  const classes = `inline-flex h-11 items-center justify-center rounded-sm px-6 text-sm font-semibold transition-colors duration-reaction ease-vif ${STYLES[variante]} ${className ?? ""}`;

  if (props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={classes}
    >
      {children}
    </button>
  );
}
