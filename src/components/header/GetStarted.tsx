import { motion } from "framer-motion";
import { apple, google } from "public";

interface IProps {
    noBorder?: boolean;
}

const GetStarted: React.FC<IProps> = ({noBorder}) => (
  <div style={ { display: "flex", flexDirection: "row", gap: "25px", zIndex: "5" } }>
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}
    >
    <a href="https://testflight.apple.com/join/dG4SXTTm"
    >
      <img src={ (apple as any).src } alt="apple"
        style={ {
            width: "150px",
            height: "100%",
            border: `${ noBorder ? "" : "1px solid lightgrey" }`,
            borderRadius: `${ noBorder ? "none" : "8px" }`,
            display: "inline-block",
            cursor: "pointer",
        } }
        />
    </a>
    </motion.div>

    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      onHoverStart={e => {}}
      onHoverEnd={e => {}}
    >
    <a href="https://app.proximafitness.com/">
        <img src={(google as any).src} alt="google"
            style={ {
                width: "150px",
                height: "100%",
                border: `${ noBorder ? "" : "1px solid lightgrey" }`,
                borderRadius: `${ noBorder ? "none" : "8px" }`,
                display: "inline-block",
                cursor: "pointer",
            } }
        />
    </a>
  </motion.div>
</div>
);

export default GetStarted;

