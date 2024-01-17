import "./HeaderNav.sass";
import { makeStyles } from "../styles.ts";

export type HeaderNavProps = {
  width?: number;
  fullWidth?: boolean;
  borderRadius?: number;
  padding?: number;
  color?: string;
  dropShadow?: boolean;
  variant?: "left-aligned" | "right-aligned" | "centered";
};

const useStyles = makeStyles((props: HeaderNavProps) => ({
  headerNavContainer: {
    minWidth: 320,
    margin: 15,
    height: "fit-content",
    maxWidth: 1440,
    borderRadius: props.borderRadius,
    backgroundColor: props.color,
    padding: props.padding,
    display: "flex",
    filter: props.dropShadow
      ? "drop-shadow(0 5px .75em rgba(91, 78, 65, 0.5))"
      : "none",

    ul: {
      height: "3rem",
      alignItems: "center",
      listStyle: "none",
      margin: 0,
      display: "flex",
      gap: 15,
    },
  },
}));
export default function HeaderNav(props: HeaderNavProps) {
  const {} = props;
  const { classes } = useStyles(props);

  return (
    <div className={classes.headerNavContainer}>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">News</a>
        </li>
        <li>
          <a href="#">Reviews</a>
        </li>
        <li>
          <a href="#">Merch</a>
        </li>
      </ul>
    </div>
  );
}
