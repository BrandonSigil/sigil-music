import { makeStyles } from "../styles.ts";
import CategoryPip from "../CategoryPip/CategoryPip.tsx";
import "./FeaturedHero.sass";

export type FeaturedPostProps = {
  timeStamp?: string;
  title: string;
  body: string;
  author: string;
  imgUrl: string;
  postType?: string;
};

const useStyles = makeStyles((props: FeaturedPostProps) => ({
  featuredPost: {
    backgroundColor: "white",
    width: "100%",
    height: 600,
    borderRadius: 15,
    marginTop: 50,
    filter: "drop-shadow(0 5px .75em rgba(91, 78, 65, 0.065))",
  },
  postDescriptionContainer: {
    padding: 25,
  },
  imgUrl: {
    backgroundImage: `url(${props.imgUrl})`,
    width: "100%",
    height: "100%",
    borderRadius: 15,
    maxHeight: 400,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundOrigin: "content-box",
    backgroundSize: "cover",
  },
  featuredTitle: {
    fontSize: "1.45rem",
    fontWeight: 700,
    paddingTop: 10,
  },
}));
export default function FeaturedPost(props: FeaturedPostProps) {
  const { timeStamp, title, body, author, imgUrl, postType } = props;
  const { classes } = useStyles(props);

  return (
    <div className={classes.featuredPost}>
      <div className="innerPhoto">
        <div className={classes.imgUrl}></div>
      </div>
      <div className={classes.postDescriptionContainer}>
        <CategoryPip variant={props.postType} />
        <div className={classes.featuredTitle}>{props.title}</div>
        <div>
          {props.author} | {props.timeStamp}
        </div>
      </div>
    </div>
  );
}
