import "./HeaderNav.sass";
import { makeStyles } from "../styles.ts";

export type HeaderNavProps = {
  width?: number;
  fullWidth?: boolean;
  borderRadius?: number;
  padding?: number;
  color?: string;
  dropShadow?: boolean;
  justify?: "flex-end" | "flex-start" | "center" | "space-between";
};

const useStyles = makeStyles((props: HeaderNavProps) => ({
  headerNavContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
  },
  headerNav: {
    display: "flex",
    alignItems: "center",
    height: 50,
    minWidth: 320,
    width: "100%",
    maxWidth: 1200,
    margin: "15px 15px",
    borderRadius: props.borderRadius,
    backgroundColor: props.color ? props.color : "white",
    padding: props.padding,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: props.justify,
    filter: props.dropShadow
      ? "drop-shadow(0 5px .75em rgba(91, 78, 65, 0.05))"
      : "none",

    ul: {
      alignItems: "center",
      height: "3rem",
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
      <div className={classes.headerNav}>
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
        <div>Because music matters.</div>
      </div>
    </div>
  );
}
