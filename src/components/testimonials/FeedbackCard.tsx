
import { quotes } from "../../assets";
import { motion } from "framer-motion";
import { starGold } from "../../assets";

const FeedbackCard = ({ content, name, title, img }: any) => (
  <motion.div
    whileHover={{ scale: 1.08 }}
    onHoverStart={e => {}}
    onHoverEnd={e => {}}
    className="flex justify-around flex-col px-6 rounded-[20px] max-w-[370px] m-6 feedback-card"
  >
    <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins font-normal text-[16px] leading-[32.4px] text-white py-4">
      {content}
      <div className="flex flex-row py-4">
        <div>
            <img src={starGold} alt="star_gold" className="w-[30px] h-[20px] object-contain" />
        </div>
        <div>
            <img src={starGold} alt="star_gold" className="w-[30px] h-[20px] object-contain" />
        </div>
        <div>
            <img src={starGold} alt="star_gold" className="w-[30px] h-[20px] object-contain" />
        </div>
        <div>
            <img src={starGold} alt="star_gold" className="w-[30px] h-[20px] object-contain" />
        </div>
        <div>
            <img src={starGold} alt="star_gold" className="w-[30px] h-[20px] object-contain" />
        </div>
      </div>
    </p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite">
          {title}
        </p>
      </div>
    </div>
  </motion.div>
);


export default FeedbackCard;

