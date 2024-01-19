import { makeStyles } from "../styles.ts";

export type CategoryPipProps = {
  variant: "news" | "reviews" | "featured" | undefined;
};

const useStyles = makeStyles(() => ({
  outerPip: {
    borderRadius: 100,
    height: "1rem",
    width: "fit-content",
    padding: "5px 10px",
    backgroundColor: "#2f1b35",
    color: "#f5f3e8",
    lineHeight: "1rem",
    fontSize: ".85rem",
  },
}));
export default function CategoryPip(props: CategoryPipProps) {
  const { variant } = props;
  const { classes } = useStyles();

  return <div className={classes.outerPip}>{variant}</div>;
}
